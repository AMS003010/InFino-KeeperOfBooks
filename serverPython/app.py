from flask import Flask,request,jsonify
import pymongo
from pymongo import MongoClient
import os
from datetime import datetime
from flask_cors import CORS 

app= Flask(__name__)
CORS(app)

MONGO_URI = os.environ.get('MONGODB_URI')

cluster = MongoClient(MONGO_URI)
db = cluster['test']
col = db['flask_datas']

@app.route("/Python/api/borrow",methods=['PUT'])
def borrow_book():
    book = request.json['book']
    current_datetime = datetime.now().strftime('%d%m%Y%H%M%S')
    borrower = request.json['borrower']
    find_book = col.find_one({"name":book})
    if find_book:
        if not find_book['borrowed']:
            new_obj = {
                "borrowed":borrower,
                "borrowed_on": current_datetime
            }
            col.update_one({"name":find_book['name']},{'$set':new_obj})
            return {"msg":"book borrowed"}
        else:
            return {"msg":"Its already borrowed"}
    else:
        return {"msg":"No book available"}

@app.route("/Python/api/return",methods=['PUT'])
def return_book():
    book = request.json['book']
    returner = request.json['returnee']
    find_book = col.find_one({"name":book})
    if find_book:
        new_obj = {
            "borrowed":None
        }
        col.update_one({"name":book},{'$set':new_obj})
        return {"msg":"book returned"}
    else:
        return {"msg":"you have not borrowed this book"}

if __name__ == "__main__":
    app.run()