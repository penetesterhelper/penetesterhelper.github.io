import base64

encodeDecode = int(input("Press 0 for Encode or Press 1 For Decode: "))
filePath = input("Enter Path File: ")

myfile = open(filePath, "r")

if(encodeDecode==0):
    print("Encoding Start......................")
    myline = myfile.readline()
    while myline:
        sample_string = myline
        sample_string_bytes = sample_string.encode("ascii")
        base64_bytes = base64.b64encode(sample_string_bytes)
        base64_string = base64_bytes.decode("ascii")
        print(f"{base64_string}")
        myline = myfile.readline()
    
else:
    print("Decoding Start......................")
    myline = myfile.readline()
    while myline:
        base64_string = myline
        base64_bytes = base64_string.encode("ascii")
        sample_string_bytes = base64.b64decode(base64_bytes)
        sample_string = sample_string_bytes.decode("ascii")
        print(f"{sample_string}")  
        myline = myfile.readline()
        
myfile.close()