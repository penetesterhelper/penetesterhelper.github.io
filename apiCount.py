import json
import sys

def uses():
    print("Uses:")
    print("1. python3 apiCount.py jsonfile.json")
    print("Extracting API with Different Methods and Counting All extracting API with Methods")
    print("2. python3 apiCount.py jsonfile.json --api")
    print("Extracting API without Methods and Counting All extracting API without Methods")
    
n = len(sys.argv)
try:
    if(n==2):
        filePath = sys.argv[1]
        f = open(filePath) 
        data = json.load(f)
        count = 0     
        for i in data['paths']:
            apiList = i
            apiMethod = json.dumps(data['paths'][apiList])
            apiMethodJson = json.loads(apiMethod)
            for i in apiMethodJson:
                if(i!='parameters'):
                    count = count+1
                    print(i+' '+apiList)

        print("Total: " + str(count))    
        f.close()
    if(n==3):
        filePath = sys.argv[1]
        if(sys.argv[2]=="--api"):
            f = open(filePath) 
            data = json.load(f)
            count = 0     
            for i in data['paths']:
                count = count+1
                print(i)
            print("Total: " + str(count))
        else:
            print("--api command")
            uses()
    else:
        uses()
except:
    uses()
    
