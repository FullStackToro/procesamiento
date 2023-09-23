from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from lib.check_passw import check_user
from controller.user import User
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import openpyxl
from sqlalchemy import create_engine
import sqlite3

app = FastAPI()

origins = [
    "http://localhost:4200",
    # Agrega aquí otros orígenes permitidos si los tienes
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo de datos para el request del login
class UserLogin(BaseModel):
    username: str
    password: str

@app.get("/")
def root():
    # Para crear un usuario
    data_user = {
    "firstname": "Prueba0",
    "lastname": "Pruebita",
    "username": "Prueba",
    "password_user": "101010101"
    }
    db = User(data_user)
    db.create_user()
    return "Hi, I am FastAPI "

@app.get("/excel")
def excel():
    print(openpyxl.__version__)
    data = pd.read_excel(io = "../vistas/DashBoard.xlsx", sheet_name="BBDD", usecols="B,C,D,W,Y,AA")
    data.rename(columns={'NRO BOLETA':'nro_boleta', 'NRO CLIENTE':'nro_cliente', 
    'FECHA EMISION':'fecha_emision', 'Cosumo (kWh)':'consumo_kWh', 'Potencia (kW)':'potencia_kW', '$ CARGO POTENCIA':'total_a_pagar' }, inplace = True)
    print(data.head())

    
    engine = create_engine("sqlite://", echo=False)

    conn2 = sqlite3.connect("./users.db")

    data.to_sql('medidores', conn2, if_exists='append', index=False)
    

    return "Data from Excel loaded succefull into Database!"

@app.post("/login")
def user(user_login: UserLogin):
    # Obtener los datos del modelo
    username = user_login.username
    password = user_login.password
    verify = check_user(username, password)
    print("######")
    print(verify)
    print("######")
    if verify:
        return {"message": "Login exitoso", "user": verify[1]}
    else:
        raise HTTPException(status_code=401, detail="Credenciales inválidas")
  



