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
  <div class="flash-card panel">
    <button class="flash-body" @click="flipCard">
      <p class="flash-text">{{ cardText }}</p>
      <span class="flash-hint">{{ showAnswer ? 'Tap to hide' : 'Tap to reveal' }}</span>
    </button>
    <div class="flash-footer">
      <button class="flash-btn" @click="prev">Prev</button>
      <button class="flash-btn flash-btn--primary" @click="next">Next</button>
    </div>
  </div>
</template>

<style scoped>
.flash-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 280px;
}

.flash-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2.5rem 1.5rem;
  background: none;
  border: none;
  border-bottom: 1px solid var(--border-subtle);
  color: powderblue;
  cursor: pointer;
  min-height: 220px;
}

.flash-text {
  font-size: clamp(2rem, 6vw, 2.75rem);
  font-weight: 700;
}

.flash-hint {
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.flash-footer {
  display: flex;
  gap: 0.65rem;
  padding: 1rem 1.15rem;
}

.flash-btn {
  flex: 1;
  padding: 0.75rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: powderblue;
  background: rgba(176, 224, 230, 0.06);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
}

.flash-btn:hover {
  border-color: var(--border-mid);
  background: rgba(176, 224, 230, 0.12);
}

.flash-btn--primary {
  border-color: rgba(238, 232, 170, 0.3);
}

.flash-btn--primary:hover {
  border-color: var(--accent-gold);
  background: rgba(238, 232, 170, 0.08);
}
</style>
