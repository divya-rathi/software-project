from collections import defaultdict
import PyPDF2
import re
import json

pdfFileObj = open('computer-science-and-engineering.pdf', 'rb')

pdfReader = PyPDF2.PdfFileReader(pdfFileObj)

pageText = ""
for i in range(76):
    pageText += pdfReader.getPage(i).extractText()

reqText = defaultdict(list)

key = None
for elem in pageText.split():
    if re.search('^15[A-Z][A-Z][A-Z]...$', elem):
        key = elem

    if key:
        reqText[key].append(elem)


outText = dict()

for key, val in reqText.items():
    outText[key] = dict()
    outText[key]['courseCode'] = ''
    outText[key]['courseName'] = ''
    outText[key]['courseDescription'] = dict()
    outText[key]['courseDescription']['units'] = dict()
    outText[key]['courseDescription']['textbooks'] = dict()
    outText[key]['courseDescription']['references'] = dict()
    outText[key]['Reviews'] = list()
    outText[key]['Questions'] = list()

    state = 0
    buffer = list()
    buffer_key = list()
    for i in range(len(val)):

        if state == 0:
            outText[key]['courseCode'] = val[i]
            state = 1

        elif state == 1:
            if val[i].isdigit():
                outText[key]['courseName'] = ' '.join(buffer)
                buffer.clear()
                state = 2
            else:
                buffer.append(val[i])

        elif state == 2:
            if not val[i].isdigit():
                buffer.append(val[i])
                state = 3

        elif state == 3:
            if val[i].isdigit():
                if len(buffer) and buffer[-1] == 'Unit':
                    if len(buffer_key):
                        buffer.pop()
                        buffer_key_text = ' '.join(buffer_key)
                        outText[key]['courseDescription']['units'][buffer_key_text] = ' '.join(
                            buffer)
                        buffer_key.clear()

                    buffer_key.append('Unit')
                    buffer_key.append(val[i])
                    buffer.clear()

                else:
                    buffer.append(val[i])

            elif val[i] in ['TEXTBOOK:', 'TEXTBOOKS:', 'REFERENCE:', 'REFERENCES:']:
                buffer.pop()
                buffer_key_text = ' '.join(buffer_key)
                if not buffer_key_text: buffer_key_text = 'Unit'
                outText[key]['courseDescription']['units'][buffer_key_text] = ' '.join(
                            buffer)
                
                buffer.clear()
                buffer_key.clear()
                buffer_key.append(val[i])
                state = 4

            else:
                buffer.append(val[i])

        elif state == 4:
            if val[i] in ['TEXTBOOK:', 'TEXTBOOKS:', 'REFERENCE:', 'REFERENCES:']:
                buffer_key_text = ''.join(buffer_key)

                if buffer_key_text in ['TEXTBOOK:', 'TEXTBOOKS:']:
                    textbookList = ' '.join(buffer)
                    textbookList = re.split('[0-9]\.', textbookList)
                    while '' in textbookList: textbookList.remove('')
                    while ' ' in textbookList: textbookList.remove(' ')
                    outText[key]['courseDescription']['textbooks'] = textbookList

                elif buffer_key_text in ['REFERENCE:', 'REFERENCES:']:
                    referenceList = ' '.join(buffer)
                    referenceList = re.split('[0-9]\.', referenceList)
                    while '' in referenceList: referenceList.remove('')
                    while ' ' in referenceList: referenceList.remove(' ')
                    outText[key]['courseDescription']['references'] = referenceList

                buffer.clear()
                buffer_key.clear()
                buffer_key.append(val[i])

            else:
                buffer.append(val[i])

    buffer_key_text = ''.join(buffer_key)

    if buffer_key_text in ['TEXTBOOK:', 'TEXTBOOKS:']:
        textbookList = ' '.join(buffer)
        textbookList = re.split('[0-9]\.', textbookList)
        while '' in textbookList: textbookList.remove('')
        while ' ' in textbookList: textbookList.remove(' ')
        outText[key]['courseDescription']['textbooks'] = textbookList

    elif buffer_key_text in ['REFERENCE:', 'REFERENCES:']:
        referenceList = ' '.join(buffer)
        referenceList = re.split('[0-9]\.', referenceList)
        while '' in referenceList: referenceList.remove('')
        while ' ' in referenceList: referenceList.remove(' ')
        outText[key]['courseDescription']['references'] = referenceList

    elif len(buffer):
        outText[key]['courseDescription']['units']['Unit'] = ' '.join(buffer) 
    buffer.clear()

with open('course_parse_data.json', 'w+') as course_data:
    course_data.write(json.dumps(outText))