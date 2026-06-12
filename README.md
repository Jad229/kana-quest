# Kana Quest 🎴

A Japanese vocabulary and alphabet flashcard quiz app built with Vue 3 and Pinia. Study hiragana, katakana, vocabulary, and greetings — then test yourself in quiz mode with multiple choice questions and instant feedback.

---

## Features

- **Flashcard mode** — flip through cards at your own pace, reveal the answer with a click
- **Quiz mode** — multiple choice questions with instant red/green button feedback
- **Progress bar** — tracks how far through the deck you are
- **Results screen** — see your final score and a full breakdown of every question
- **25 pre-loaded Japanese questions** across four categories: Hiragana, Katakana, Vocabulary, and Greetings

---

## Tech Stack

| Layer            | Technology              |
| ---------------- | ----------------------- |
| Framework        | Vue 3 (Composition API) |
| State Management | Pinia                   |
| Routing          | Vue Router              |
| Build Tool       | Vite                    |
| Language         | JavaScript              |

---

## Project Structure

```
src/
├── components/
│   ├── FlashCard.vue       # Flip card for study mode
│   ├── QuizCard.vue        # Multiple choice card for quiz mode
│   └── ProgressBar.vue     # Reactive progress indicator
├── views/
│   ├── StartView.vue       # Landing screen with mode selection
│   ├── QuizView.vue        # Main quiz/flashcard screen
│   └── ResultsView.vue     # Final score and question breakdown
├── stores/
│   └── useQuizStore.js     # Pinia store — all state and actions
├── data/
│   └── cards.js            # Japanese question dataset
├── router/
│   └── index.js            # Vue Router configuration
└── main.js
```

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Clone the repo
git clone https://github.com/yourusername/kana-quest.git
cd kana-quest

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open your browser at `http://localhost:5173`

---

## How to Use

1. Open the app and choose **Flashcard** mode to study or **Quiz** mode to test yourself
2. In flashcard mode, click the card to flip it and reveal the answer — use Prev/Next to navigate
3. In quiz mode, select one of the four answer choices — buttons turn green or red immediately
4. Finish all 25 cards to see your results screen with a full breakdown
5. Hit **Home** to restart

---

## Question Categories

| Category   | What's tested                                 |
| ---------- | --------------------------------------------- |
| Hiragana   | Romaji readings for basic hiragana characters |
| Katakana   | Romaji readings for basic katakana characters |
| Vocabulary | English meanings of common kanji words        |
| Greetings  | English meanings of everyday Japanese phrases |

---

## What I Learned Building This

- Component-based architecture — splitting UI into reusable, single-responsibility components
- Pinia state management — centralizing app state so multiple views share the same data
- Vue 3 Composition API — using `ref`, `computed`, and `watch` to build reactive logic
- Vue Router — navigating between views and syncing route with app phase
- Derived state vs stored state — knowing when to use `computed` instead of a new `ref`

---

## Roadmap

- [ ] Category filter on start screen — choose which deck to study
- [ ] 60-second countdown timer per question
- [ ] High score persistence with localStorage
- [ ] Python backend with a proper database
- [ ] Expand deck with more vocabulary and kanji

---
