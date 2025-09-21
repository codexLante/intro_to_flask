
from app.db import db
from datetime import datetime,timezone



def utc_now():
    return datetime.now(timezone.utc)

class Member(db.Model):
    __tablename__="member"

    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(100),nullable=False)
    email=db.Column(db.String(500),nullable=False,unique=True)
    password=db.Column(db.Text,nullable=False)
    created_at=db.Column(db.DateTime(timezone=True),default=utc_now,nullable=False)

    