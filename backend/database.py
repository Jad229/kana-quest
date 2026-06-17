import sqlite3
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, 'kana_quest.db')

def get_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row 
    return conn

def init_db():
    conn = get_connection()
    try:
        conn.execute('''CREATE TABLE IF NOT EXISTS cards (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            question TEXT NOT NULL,
            answer TEXT NOT NULL,
            options TEXT NOT NULL,
            category TEXT NOT NULL
        )''')
        conn.execute('''CREATE TABLE IF NOT EXISTS results (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT NOT NULL DEFAULT (datetime('now')),
            score INTEGER NOT NULL,
            total INTEGER NOT NULL,
            answers TEXT NOT NULL
        )''')
        conn.commit()
    finally:
        conn.close()

if __name__ == '__main__':
    init_db()
    print('Database initialized.')