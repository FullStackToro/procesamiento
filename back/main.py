from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    ctaContrato: int

@app.get("/")
def read_root():
    return {"Hello": "World"}
