<script setup>
import { useQuizStore } from '@/stores/useQuizStore.js'
import { computed, ref } from 'vue'

const quizStore = useQuizStore()

function checkAnswer(option) {
  quizStore.checkAnswer(option)

  setTimeout(() => quizStore.nextCard(), 2000)
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
  height: 300px;
  border-radius: 10px;
}

.quizcard .body {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding-block: 100px;
  height: 80%;
  width: 100%;
  border-bottom: 1px solid black;
}

.quizcard .footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
}

.btn {
  display: grid;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: black;
  background-color: powderblue;
  border: none;
  border-radius: 10px;
  width: 75px;
  height: 60%;
}

.correct {
  background-color: lightgreen;
}

.wrong {
  background-color: lightcoral;
}
</style>
