# import pandas as pd
import csv
import json

# Read the csv file
# data = pd.read_csv('diploma.csv')

# print(data)

# data.to_json("medie.json")

filename = "vend1"
dict_from_csv = {}

with open(f'{filename}.csv', mode='r') as inp:
    reader = csv.reader(inp)
    # dict_from_csv = {rows[0]:rows[1] for rows in reader}
    for n, row in enumerate(reader):
        if n == 0:
            print(row) # the headers
            for header in row:
                dict_from_csv[header] = []
        
        else:
            # not headers parameters that must be added to the header array
            dict_from_csv["x"].append(row[0])
            dict_from_csv["y"].append(float(row[1]) / 100)

print(dict_from_csv)

with open(f'{filename}.json', "w+") as jsonfile:
    json.dump(dict_from_csv, jsonfile)
    print("added data to json")