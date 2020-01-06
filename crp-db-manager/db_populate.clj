(set-env! :dependencies '[[pdfboxing "0.1.6"]])

(require '[pdfboxing.text :as text])

(require '[clojure.string :as str])

(def pdf-content 
 (str/replace 
  (text/extract "/home/gadsater/code/software-project/crp-db-manager/computer-science-and-engineering.pdf") #"\n" " "))

(-> 
  pdf-content 
  (str/replace #"(\s*\d\d[A-Z][A-Z][A-Z]\d\d\d\s*)" "~$1~")
  (str/replace #"(\s*Unit\s+\d\s*)" "~$1~")
  (str/replace #"(\s*\d\d?\.\s*)" "~$1~")
  (str/replace #"(\s*TEXTBOOKS:\s*|\s*TEXTBOOK:\s*|\s*REFERENCES:\s*|\s*REFERENCE:\s*)" "~$1~")
  (str/replace #"\s\s+" " ")
  (str/replace #"\s*\d\s+\d\s+\d\s+\d\s*" "")
  (str/replace #"\s*Schools\s*of\s*Engineering\s*Amrita\s*Vishwa\s*Vidyapeetham\s*2015\s*admissions\s*onwardsSYLLABI\s*B.\s*Tech\s*-\s*Computer\s*Science\s*&\s*Engg.\s*" "")
  (str/split #"~"))




