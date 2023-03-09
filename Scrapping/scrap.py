import requests
import json
response_API = requests.get('https://covid19.ddc.moph.go.th/api/Vaccinated/weekly-vaccinated-by-provice')
print(response_API.status_code)
data = response_API.text
data = json.loads(data)
print(data)


