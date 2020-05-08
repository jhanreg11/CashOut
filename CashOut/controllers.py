from CashOut import app, db
from flask import request, jsonify
from CashOut.models import *

@app.route('/health/check')
def health_check():
    return 'I am alive'

@app.route('/sign-up', methods=['POST'])
def post_user():
    data  = request.get_json(force=True)
    user = User.add_user(data['username'], data['password'], data['venmo_name'])
    if user:
        return jsonify({'success': True, 'id': user.id})
    else:
        return jsonify({'success': False})

@app.route('/offer', methods=['GET'])
def get_offer():
    list = []
    offers = Offer.query.all()

    # distance (meters)
    dist = float(request.args['dist'])
    # offer to be compared to
    offer = Offer.query.filter_by(id=request.args['offer_id']).first()
    if dist and offer:
        offers = offer.getNearest(dist=dist)

    for x in offers:
        list.append(x.to_json())
    return jsonify({'offers': list})

@app.route('/offer', methods=['POST'])
def post_offer():
    data = request.get_json(force=True)
    print (data)
    newOffer = Offer.add_offer(data['cash_amt'], data['venmo_amt'], data.get('long'), data.get('lat'), data['user_id'], data['range'])
    if newOffer:
        return jsonify({'success': True})
    else:
        return jsonify({'success': False})
