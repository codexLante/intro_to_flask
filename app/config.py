import os
from dotenv import load_dotenv 

# loading enviroment variables

load_dotenv()

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL")
    SQLALCHEMY_TRACK_MODIFICATION = True 
    SECRET_KEY = "secret"
    JWT_SECRET_KEY="secretkey"

