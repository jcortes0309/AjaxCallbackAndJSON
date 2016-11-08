from flask import Flask, jsonify, request
import pg

db = pg.DB(dbname='ajax_exercise_db')

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
    query = request.args.get("search")
    query = "%" + query + "%"
    results = db.query(
        "select * from website where title ilike $1", query).dictresult()
    return jsonify(results)

app.run(debug=True)
