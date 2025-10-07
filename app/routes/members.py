from flask import Blueprint,jsonify,request,send_from_directory
from app.models import Member
from app.db import db
import re
import os
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token

bcrypt=Bcrypt()
#create student bluprint
member_bp=Blueprint("member",__name__)

@member_bp.route("/add",methods=["POST"])
def add_member():
    print("Add user was hit")
    data=request.get_json()

    name=data.get("name")
    email=data.get("email")
    password=data.get("password")

    if not name:
        return jsonify({"error":"Name is required"}),400
    
    if not email:
        return jsonify({"error":"Email is required"}),400

    email_regex = r"^[\w\.-]+@[\w\.-]+\.\w+$"

    if not re.match(email_regex,email):
        return jsonify({"error":"Invalid email address"})
    
    #Existing student
    exists=Member.query.filter_by(email=email).first()

    if exists:
        return jsonify({"error":"Email in use"}),400

    hashed_pasword=bcrypt.generate_password_hash(password).decode("utf-8")    
    
    new_member=Member(name=name,email=email,password=hashed_pasword)
    db.session.add(new_member)
    db.session.commit()

    return jsonify({
        "message":"member added",
        "student":{
            "id":new_member.id,
            "name":new_member.name,
            "email":new_member.email,
            "created_at":new_member.created_at
        }
    }),201

@member_bp.route("/login",methods=["POST"])
def login_member():
    data=request.get_json() 

    
    email=data.get("email")
    password=data.get("password") 

    if not email or not password:
        return jsonify({"error":"Email and password required"}),400
    
    member=Member.query.filter_by(email=email).first()

    if not member:
        return jsonify({"error":"Member not found"}),401
    
    #password=password
    check_pass=bcrypt.check_password_hash(member.password,password)

    if not check_pass:
        return jsonify({"error":"Invalid email or password"}),401
    
    access_token=create_access_token(
         identity=f"{member.id}"       
    )
    
    return jsonify ({"token":access_token})

@member_bp.route("/search/<name>", methods=["GET"])
def search_member(name):
    members= Member.query.filter(Member.name.ilike(f"%{name}%")).all()
    # members = Member.query.filter_by(name=name).all()
    member_list = []

    for member in members:
        member_list.append({
            "id": member.id,
            "name": member.name,
            "email": member.email,
        })

    print(member_list)
    return jsonify({
        "members": member_list,
        "count": len(member_list)
    }), 200
