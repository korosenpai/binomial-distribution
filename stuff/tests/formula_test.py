import json
from scipy.stats import binom

# p(binom.pmf(k, number_of_trials, prob_of_success))

n = 2
p = 0.5
grades = {
    "elementare": {
        "p": 29.9,
        "n": 721
    },
    "media": {
        "p": 44.8,
        "n": 7050
    },
    "diploma": {
        "p": 63.5,
        "n": 11612
    },
    "laurea": {
        "p": 78,
        "n": 5830
    }
}

data = {}

for school in list(grades.keys()):
    data[school] = [binom.pmf(k, grades[school]['n'], grades[school]['p']/100) for k in range(grades[school]['n'] + 1)]

with open("data.json", "w+") as jsonfile:
    json.dump(data, jsonfile)
