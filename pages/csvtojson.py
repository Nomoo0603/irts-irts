import csv
import json
def make_json(a, b):
    data = {}
    with open(a, encoding = 'utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        for rows in csvReader:
            key = rows['No']
            data[key] = rows
    with open(b, 'w', encoding ='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent = 4))
a = r"C:/Users/DELL/OneDrive/Documents/GitHub/irts-irts/algorithm/savedata/save.csv"
b = r"C:/Users/DELL/OneDrive/Documents/GitHub/irts-irts/pages/data.json"
make_json(a, b)