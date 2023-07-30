from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from lib.check_passw import check_user
from controller.user import User
from fastapi.middleware.cors import CORSMiddleware

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
    # data_user = {
    # "firstname": "Maria",
    # "lastname": "Roa",
    # "username": "Mari",
    # "password_user": "12345"
    # }
    # db = User(data_user)
    # db.create_user()
    return "Hi, I am FastAPI "

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
  



