import sqlite3



def addtask(id,title,date):
    con = sqlite3.connect("mydatabase.db")
    mycursor = con.cursor()
    mycursor.execute("INSERT INTO tasks(id,title,date) VALUES (?,?,?);",(id,title,date))
    con.commit()
    con.close()

def gettasks():
    con = sqlite3.connect("mydatabase.db")
    mycursor = con.cursor()
    mycursor.execute("select * from tasks")
    tasks =mycursor.fetchall()
    con.commit()
    con.close()
    return tasks

def deletetask(id):
    con = sqlite3.connect('mydatabase.db')
    mycursor = con.cursor()
    mycursor.execute('DELETE FROM tasks where id = ?;',(id,))
    con.commit()
    con.close()