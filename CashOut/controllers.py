from CashOut import app, db
from flask import request, jsonify
from CashOut.models import *

@app.route('/', methods=['GET'])
def home():
    return "HEllo WOrld"

@app.route('/api/offer', methods=['GET'])
def get_offer():
    long = request.args.get('long')
    lat = request.args.get('long')
    range = request.args.get('range')
    list = []
    offers = Offer.query.all()
    for x in offers:

        list.append(x.to_json())
    return jsonify({'offers': list})

@app.route('/api/offer', methods=['POST'])
def post_offer():
    data = request.get_json(force=True)
    print (data)
    newOffer = Offer.add_offer(data['cash_amt'], data['venmo_amt'], data['long'], data['lat'], data['user_id'])
    if newOffer:
        return jsonify({'success': True})
    else:
        return jsonify({'success': False})

