from flask import Flask,jsonify,request
from flask_cors import CORS
from server_actions import addtask,gettasks, deletetask
app = Flask(__name__)
CORS(app)


# tasks = [{'id': 1232344324, 'title' :'buy porotta','date':'2021-07-30' }]

@app.route("/")
def hello_world():
    tasks=[]
    tasks_array = gettasks()
    for task in tasks_array:
        tasks.append({'id': task[0],'title': task[1],'date':task[2]})
    return jsonify(tasks)

@app.route('/add',methods=['POST'])
def add_task():
    resp = request.get_json()
    addtask(resp['id'],resp['title'],resp['date'])
    return 'ok'
@app.route('/delete',methods=['PUT'])
def delete_task():
    resp = request.get_json()
    deletetask(resp)
    return 'ok'

if __name__ =="__main__":
    app.run(debug=True)
