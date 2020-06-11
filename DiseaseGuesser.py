import json,os,sys,re
from naiveBayesClassifier import tokenizer
from naiveBayesClassifier.trainer import Trainer
from naiveBayesClassifier.classifier import Classifier





DiseaseClassifier = Trainer(tokenizer) 
with open("Dataset.csv", "r") as file: 
    for i in file: 
       lines = file.next().split(",") 
       DiseaseClassifier.train(lines[1],  lines[0]) 
DiseaseClassifier = Classifier(DiseaseClassifier.data, tokenizer)
Classification = DiseaseClassifier.classify(sys.argv[1]) 
print Classification[0] 
