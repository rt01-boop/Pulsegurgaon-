from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

ARTICLES_FILE = "backend/articles.json"
ADS_FILE = "ads.json"

def load_articles():
    with open(ARTICLES_FILE) as f:
        return json.load(f)

def save_articles(data):
    with open(ARTICLES_FILE,"w") as f:
        json.dump(data,f,indent=2)

@app.route("/")
def home():
    return "PulseGurgaon backend running"

@app.route("/news")
def news():
    return jsonify(load_articles())

@app.route("/search")
def search():
    q = request.args.get("q","").lower()
    results=[]
    for a in load_articles():
        if q in a["title_en"].lower():
            results.append(a)
    return jsonify(results)

@app.route("/admin/login",methods=["POST"])
def login():
    data=request.json
    if data["password"]=="pulsegurgaon123":
        return {"success":True}
    return {"success":False}

@app.route("/admin/add",methods=["POST"])
def add():
    articles=load_articles()
    articles.append(request.json)
    save_articles(articles)
    return {"status":"added"}

import os

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)