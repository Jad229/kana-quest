<script setup>
import { useQuizStore } from '@/stores/useQuizStore.js'
import { computed, ref } from 'vue'

const quizStore = useQuizStore()

function checkAnswer(option) {
  quizStore.checkAnswer(option)

  setTimeout(() => quizStore.nextCard(), 500)
}

function getButtonFeedback(option) {
  if (!quizStore.selectedAnswer) return
  if (option === quizStore.currentCard.answer) return 'correct'
  if (option === quizStore.selectedAnswer) return 'wrong'
}
</script>
<template>
  <div class="quizcard">
    <div class="body">
      {{ quizStore.currentCard.question }}
    </div>
    <div class="footer">
      <button
        class="choice btn"
        :class="getButtonFeedback(option)"
        @click="checkAnswer(option)"
        v-for="option in quizStore.currentCard.options"
        :key="option.id"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>
<style scoped>
.quizcard {
  background-color: var(--dark-bg-elevated);
  width: 500px;
  min-height: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.quizcard .body {
  flex: 3;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding: 2em;
  width: 100%;
  border-bottom: 1px solid black;
}

.quizcard .footer {
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;
  padding: 1em;
  width: 100%;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.85rem;
  color: black;
  background-color: powderblue;
  border: none;
  border-radius: 10px;
  flex: 1;
  min-width: 0;
  max-width: 45%;
  height: 40px;
  padding: 4px 8px;
  text-align: center;
  word-break: break-word;
}

.correct {
  background-color: lightgreen;
}

.wrong {
  background-color: lightcoral;
}
</style>
