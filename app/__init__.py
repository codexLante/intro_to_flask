
from flask import  Flask
from .config import Config
from .db import db,migrate
from .models import *
from app.routes import student_bp,member_bp
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager


bcrypt = Bcrypt()
jwt = JWTManager()

def create_app():
   app=Flask(__name__)
   app.config.from_object(Config)
   


 #initialize db

   db.init_app(app)
   migrate.init_app(app,db)
   bcrypt.init_app(app)
   jwt.init_app(app)

   app.register_blueprint(student_bp,url_prefix="/student")
   app.register_blueprint(member_bp,url_prefix="/member")


   return app