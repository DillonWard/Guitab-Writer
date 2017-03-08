import flask as myflask
from flask import Flask, request, render_template, url_for, json
import couchdb

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("Index.html")
