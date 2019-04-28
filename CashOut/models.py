from CashOut import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False)
    password = db.Column(db.String(20), nullable=False)
    venmo_name = db.Column(db.String(20), nullable=False)

class Offer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Cash_amt = db.Column(db.Float(precision=2, asdecimal=True), nullable=False, default=0)
    venmo_amt = db.Column(db.Float(precision=2, asdecimal=True), nullable=False, default=0)
    type = db.Column(db.Boolean)