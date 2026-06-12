<script setup>
import FlashCard from '@/components/FlashCard.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import { useQuizStore } from '@/stores/useQuizStore.js'

const quizStore = useQuizStore()
</script>

<template>
  <div class="container">
    <div class="header">
      <h1>{{ quizStore.phase }} Mode</h1>
      <ProgressBar />
    </div>
    <FlashCard />
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
</style>
