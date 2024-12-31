from flask import Flask,request,render_template
from models import db,User
from flask_cors import CORS, cross_origin
app =  Flask(__name__)
cors = CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"


db.init_app(app=app)



@app.post('/signup')
@cross_origin()
def create_user(): 
    
    user = db.session.execute(db.select(User).filter_by(username=request.get_json()['username'])).scalar_one_or_none()
    if(user!=None): return {
        'msg':'This username already exists!'
    }

    user = User(username = request.get_json()['username'],password=request.get_json()['password'])
    
    db.session.add(user)
    db.session.commit()
    return {
        'msg':'User Created Succesfully'
    } 

@app.post('/login')
@cross_origin()
def authenticate_user():
    if not request.get_json().get('username'): return {
        'msg':'username is requried'
    }
    if not request.get_json().get('password'): return {
        'msg':'password is required'
    }
    user = db.session.execute(db.select(User).filter_by(username=request.get_json()['username'],password=request.get_json()['password'])).scalar_one_or_none()
    if(user==None): return {
        'msg':'Invalid Username or password'
    }
    return {
        'msg':'Welcome '+user.username
    } 






if __name__ == '__main__':
    app.run(debug=True)  # server start
