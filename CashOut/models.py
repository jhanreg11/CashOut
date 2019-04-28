from CashOut import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False)
    password = db.Column(db.String(20), nullable=False)
    venmo_name = db.Column(db.String(20), nullable=False)
    offers = db.relationship('Offer', backref='user', lazy=True)

    def add_user(username, password, venmo_name):
        new_user = User(username=username, password='default_password', venmo_name=venmo_name)
        db.session.add(new_user)
        db.session.commit()
        return new_user

    def get_json(self):
        return {
            'id': self.id,
            'username': self.username,
            'password': self.password,
            'venmo_name': self.venmo_name,
            'offers': [offer.id for offer in self.offers]
        }

class Offer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    # user through backref

    ### Amounts ###
    cash_amt = db.Column(db.Float(precision=2, asdecimal=True), nullable=False, default=0)
    venmo_amt = db.Column(db.Float(precision=2, asdecimal=True), nullable=False, default=0)

    ### Offer state ###
    # if true offer hasn't been accepted by anyone else
    is_completed = db.Column(db.Boolean, default=False, nullable=False)

    ### Location ###
    long = db.Column(db.Float(precision=4, asdecimal=True))
    lat = db.Column(db.Float(precision=4, asdecimal=True))
    range = db.Column(db.Integer)

    @staticmethod
    def add_offer(cash_amt, venmo_amt, long, lat, user_id, range):
        new_offer = Offer(cash_amt=cash_amt, venmo_amt=venmo_amt, is_completed=False, long=long, lat=lat, range=range, user_id=user_id)
        db.session.add(new_offer)
        db.session.commit()
        return new_offer

    def to_json(self):
        return {
            'id': None if self.id == None else int(self.id),
            'user_id': None if self.user.id == None else int(self.user.id),
            'cash_amt': None if self.cash_amt == None else float(self.cash_amt),
            'venmo_amt': None if self.venmo_amt == None else float(self.venmo_amt),
            'is_completed': None if self.is_completed == None else self.is_completed,
            'range': None if self.range == None else int(self.range),
            'location': {
                'lat': None if self.lat == None else float(self.lat),
                'long': None if self.long == None else float(self.long)
            }
        }

