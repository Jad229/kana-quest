<script setup>
import FlashCard from '@/components/FlashCard.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import QuizCard from '@/components/QuizCard.vue'
import { useQuizStore } from '@/stores/useQuizStore.js'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const quizStore = useQuizStore()

const modeLabel = computed(() =>
  quizStore.phase === 'flash' ? 'Flash Cards' : 'Quiz',
)
</script>

<template>
  <div class="page quiz-page">
    <header class="quiz-header">
      <RouterLink class="nav-link" to="/">← Home</RouterLink>
      <div class="quiz-title-block">
        <p class="section-label">{{ modeLabel }}</p>
        <h1 class="quiz-title">
          {{ quizStore.currentIndex + 1 }}
          <span class="quiz-title-sep">/</span>
          {{ quizStore.totalCards }}
        </h1>
      </div>
      <ProgressBar />
    </header>

    <FlashCard v-if="quizStore.phase === 'flash'" />
    <QuizCard v-if="quizStore.phase === 'quiz'" />
  </div>
</template>

<style scoped>
.quiz-page {
  gap: 1.25rem;
}

.quiz-header {
  display: grid;
  gap: 1rem;
}

.quiz-title-block {
  text-align: center;
}

.quiz-title {
  font-size: clamp(1.75rem, 5vw, 2.25rem);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-top: 0.25rem;
}

.quiz-title-sep {
  color: var(--text-muted);
  font-weight: 400;
}
</style>
