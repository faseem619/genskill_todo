import sqlite3


con = sqlite3.connect('mydatabase.db')
mycursor = con.cursor()
mycursor.execute("CREATE TABLE tasks(id INTEGER PRIMARY KEY , \
    title text NOT NULL,\
    date text not null);")
con.commit()
con.close()