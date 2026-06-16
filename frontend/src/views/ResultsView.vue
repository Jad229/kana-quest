<script setup>
import { useQuizStore } from '@/stores/useQuizStore.js'
import { RouterLink } from 'vue-router'

const quizStore = useQuizStore()

function getQuestionFeedback(isCorrect) {
  if (isCorrect) return 'correct'
  else return 'wrong'
}
</script>
<template>
  <div class="container">
    <router-link class="nav btn" to="/">Home</router-link>
    <h1>RESULTS</h1>
    <h2>SCORE: {{ quizStore.score }}/{{ quizStore.totalCards }}</h2>
    <div class="questions-container">
      <div
        :class="getQuestionFeedback(result.isCorrect)"
        class="question"
        v-for="result in quizStore.results"
      >
        <h1>{{ result.question }}</h1>
        <p>selected answer: {{ result.selected }}</p>
        <p>correct answer: {{ result.correctAnswer }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  padding: 5em;
  text-align: center;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 1em;
}

.questions-container {
  display: grid;
  gap: 1em;
  text-align: left;
}
.question {
  color: black;
  background-color: aliceblue;
  padding: 2em;
}

.correct {
  background-color: lightgreen;
}

.wrong {
  background-color: lightcoral;
}

.nav.btn {
  text-decoration: none;
  color: aliceblue;
  background-color: var(--dark-bg-elevated);
  padding: 1em;
}
</style>
