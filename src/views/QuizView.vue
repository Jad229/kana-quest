<script setup>
import FlashCard from '@/components/FlashCard.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import QuizCard from '@/components/QuizCard.vue'
import { useQuizStore } from '@/stores/useQuizStore.js'
import { RouterLink } from 'vue-router'

const quizStore = useQuizStore()
</script>

<template>
  <div class="container">
    <div class="header">
      <h1>{{ quizStore.phase }} Mode</h1>
      <ProgressBar />
    </div>
    <FlashCard v-if="quizStore.phase === 'flash'" />
    <QuizCard v-if="quizStore.phase === 'quiz'" />
    <router-link class="nav btn" to="/">Home</router-link>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  gap: 20px;
}

h1 {
  text-transform: capitalize;
}

.nav.btn {
  text-decoration: none;
  color: black;
  width: 100px;
  text-align: center;
  background-color: powderblue;
  padding: 1em;
  border-radius: 10px;
}
</style>
