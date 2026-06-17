import json
from database import get_connection
from cards import cards

def seed_cards():
    conn = get_connection()
    try:
        for card in cards:
            conn.execute(
                'INSERT INTO cards (question, answer, options, category) VALUES (?, ?, ?, ?)',
                (card['question'], card['answer'], json.dumps(card['options']), card['category'])
            )
        conn.commit()
    finally:
        conn.close()

if __name__ == '__main__':
    seed_cards()
    print('Cards seeded.')