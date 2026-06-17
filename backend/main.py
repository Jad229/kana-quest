from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
from database import get_connection

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/cards')
def get_cards():
    conn = get_connection()
    rows = conn.execute('SELECT * FROM cards').fetchall()
    conn.close()

    cards = []
    for row in rows:
        cards.append({
            "id": row["id"],
            "question": row["question"],
            "answer": row["answer"],
            "options": json.loads(row["options"]),
            "category": row["category"]
        })
    return cards

@app.get('/results')
def get_results():
    conn = get_connection()
    rows = conn.execute('SELECT * FROM results ORDER BY date DESC').fetchall()
    conn.close()
    
    results = []
    for row in rows:
        results.append({
            "id": row["id"],
            "date": row["date"],
            "score": row["score"],
            "total": row["total"],
            "answers": json.loads(row["answers"])
        })

    return results


@app.post('/results')
def save_result(result: dict):
    conn = get_connection()
    conn.execute('INSERT INTO results (score, total, answers) VALUES (?, ?, ?)', (result['score'], result['total'], json.dumps(result['answers'])))
    conn.commit()
    conn.close()
    return {"message": "Result saved successfully"}