from flask import Flask

app = Flask(__name__)

#http://127.0.0.1:80/

@app.route('/api',methods=['GET'])
def index():
    return {
        "channel":"Integza",
        "author":"Joel,Tomatoes"
    }

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')