<script setup>
import { useQuizStore } from '@/stores/useQuizStore.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const quizStore = useQuizStore()

function handleStart(mode) {
  quizStore.startQuiz(mode)
  router.push('quiz')
}
</script>
<template>
  <div class="container">
    <h1 class="title">Kana Quest</h1>
    <p class="subtext">Learn Japanese one flashcard at a time!</p>

    <button @click="handleStart('flash')" class="btn start">Flash Cards</button>
    <p class="subtext">In Flash Card mode click on the question to reveal the answer</p>
    <button @click="handleStart('quiz')" class="btn start">Quiz!</button>
    <p class="subtext">In Quiz mode click on an answer to move forward</p>
  </div>
</template>
<style scoped>
.container {
  display: grid;
  gap: 25px;
  justify-items: center;
  align-items: center;
}

.title {
  font-size: 4rem;
}

.subtext {
  font-size: 1.5rem;
}

.btn.start {
  width: 200px;
  height: 50px;
  background-color: palegoldenrod;
  border: none;
  border-radius: 5px;
}
</style>
