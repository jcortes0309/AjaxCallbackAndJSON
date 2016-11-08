from flask import Flask, jsonify, request
import pg

db = pg.DB(dbname='ajax_exercise_db')
db.debug = True

app = Flask('app')

@app.route('/')
def home():
    # this sends the contents of static/index.html
    return app.send_static_file('index.html')

@app.route('/search')
def search():
    # this sends the contents of static/results.json

    # search = request.args.get("search")
    # print "The value of search is %r" % search
    print request.args
    return app.send_static_file('results.json')

app.run(debug=True)
