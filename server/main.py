from typing import Union
import sqlite3
from fastapi import FastAPI, HTTPException, Response
from fastapi.responses import FileResponse
import os

app = FastAPI()



@app.get("/")
def read_root():
    return {"Welcome": "Datavisualization Webapp"}

@app.get("/hi")
def hi(name:str):
    return {"Hi":name}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.get("/data")
def get_data():
    try:
        conn = sqlite3.connect('data.sqlite')
        c = conn.cursor()
        c.execute('SELECT * FROM members')
        rows = c.fetchall()
        conn.close()
        return {"data": rows}
    except Exception as error:
        raise HTTPException(status_code=500, detail=str(error))
    
@app.get("/jsonfile")
async def read_jsonfile(response: Response):
    file_path = os.path.join(os.getcwd(), "chart.json") # specify the file path
    return FileResponse(file_path, media_type="application/json")