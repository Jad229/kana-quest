<script setup>
import { useQuizStore } from '@/stores/useQuizStore.js'

const quizStore = useQuizStore()

function checkAnswer(option) {
  quizStore.checkAnswer(option)
  setTimeout(() => quizStore.nextCard(), 500)
}

function getButtonFeedback(option) {
  if (!quizStore.selectedAnswer) return
  if (option === quizStore.currentCard.answer) return 'choice--correct'
  if (option === quizStore.selectedAnswer) return 'choice--wrong'
}
</script>

<template>
  <div class="quiz-card panel">
    <div class="quiz-question">
      {{ quizStore.currentCard.question }}
    </div>
    <div class="quiz-choices">
      <button
        v-for="option in quizStore.currentCard.options"
        :key="option"
        class="choice"
        :class="getButtonFeedback(option)"
        :disabled="!!quizStore.selectedAnswer"
        @click="checkAnswer(option)"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.quiz-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.quiz-question {
  font-size: clamp(2rem, 6vw, 2.75rem);
  font-weight: 700;
  text-align: center;
  padding: 2.5rem 1.5rem;
  border-bottom: 1px solid var(--border-subtle);
}

.quiz-choices {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.65rem;
  padding: 1.15rem;
}

.choice {
  padding: 0.85rem 0.75rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: powderblue;
  background: rgba(176, 224, 230, 0.06);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
}

.choice:hover:not(:disabled) {
  border-color: var(--border-mid);
  background: rgba(176, 224, 230, 0.12);
}

.choice:disabled {
  cursor: default;
}

.choice--correct {
  background: rgba(125, 206, 160, 0.18);
  border-color: var(--score-high);
  color: var(--score-high);
}

.choice--wrong {
  background: rgba(232, 160, 160, 0.15);
  border-color: var(--score-low);
  color: var(--score-low);
}

@media (max-width: 420px) {
  .quiz-choices {
    grid-template-columns: 1fr;
  }
}
</style>
