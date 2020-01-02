(require '[pdfboxing.text :as text])

(require '[clojure.string :as str])

(def pdf-content 
 (str/replace 
  (text/extract "/home/gadsater/code/software-project/crp-db-manager/computer-science-and-engineering.pdf") #"\n" " "))

(str/replace pdf-content #"e|H" "~")




