<script setup>
import { useQuizStore } from '@/stores/useQuizStore.js'
import { computed, ref } from 'vue'

const quizStore = useQuizStore()
const showAnswer = ref(false)

const cardText = computed(() =>
  showAnswer.value ? quizStore.currentCard.answer : quizStore.currentCard.question,
)

function flipCard() {
  showAnswer.value = !showAnswer.value
}

function next() {
  quizStore.nextCard()
  showAnswer.value = false
}

function prev() {
  quizStore.prevCard()
  showAnswer.value = false
}
</script>
<template>
  <div class="flashcard">
    <div @click="flipCard" class="body">
      <p>{{ cardText }}</p>
    </div>
    <div class="footer">
      <button @click="prev" class="btn">Prev</button>
      <button @click="next" class="btn">Next</button>
    </div>
  </div>
</template>
<style scoped>
.flashcard {
  background-color: var(--dark-bg-elevated);
  width: 500px;
  height: 300px;
  border-radius: 10px;
}

.flashcard .body {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding-block: 100px;
  height: 80%;
  width: 100%;
  border-bottom: 1px solid black;
}

.flashcard .footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
}

.btn {
  background-color: powderblue;
  border: none;
  border-radius: 10px;
  width: 75px;
  height: 60%;
}
</style>
