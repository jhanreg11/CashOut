from CashOut import app, db
from flask import render_template, redirect, url_for
from CashOut.models import Offer

@app.route('/')
def home():
    return "HEllo WOrld"


@app.route('/API/v1.0/get_offers', methods=['GET'])
def get_offers():
    offers = Offer.query.all()
    jsonList = []
    for x in offers:
        jsonList.append({'id': x.id, 'cash_amt': x.cash_amt})
    return jsonList