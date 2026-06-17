<script setup>
import { useQuizStore } from '@/stores/useQuizStore.js'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const quizStore = useQuizStore()

const scorePercent = computed(() => {
  if (!quizStore.totalCards) return 0
  return Math.round((quizStore.score / quizStore.totalCards) * 100)
})

const scoreClass = computed(() => {
  if (scorePercent.value >= 80) return 'score-high'
  if (scorePercent.value >= 50) return 'score-mid'
  return 'score-low'
})
</script>

<template>
  <div class="page results-page">
    <RouterLink class="nav-link" to="/">← Home</RouterLink>

    <header class="results-hero">
      <p class="section-label">Quiz complete</p>
      <p class="results-score" :class="scoreClass">
        {{ quizStore.score }}<span class="results-score-total"> / {{ quizStore.totalCards }}</span>
      </p>
      <p class="results-pct" :class="scoreClass">{{ scorePercent }}%</p>
    </header>

    <section class="review-section">
      <h2 class="section-label">Review</h2>
      <div class="review-list">
        <div
          v-for="(result, index) in quizStore.results"
          :key="index"
          class="review-card panel"
          :class="result.isCorrect ? 'review-card--correct' : 'review-card--wrong'"
        >
          <p class="review-question">{{ result.question }}</p>
          <div class="review-answers">
            <p class="review-answer">
              <span class="review-label">Your answer</span>
              {{ result.selected }}
            </p>
            <p v-if="!result.isCorrect" class="review-answer review-answer--correct">
              <span class="review-label">Correct</span>
              {{ result.correctAnswer }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.results-page {
  gap: 2rem;
}

.results-hero {
  text-align: center;
  padding: 1.5rem 0 0.5rem;
}

.results-score {
  font-size: clamp(2.5rem, 8vw, 3.5rem);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  line-height: 1.1;
  margin-top: 0.5rem;
}

.results-score-total {
  font-size: 0.55em;
  font-weight: 500;
  opacity: 0.65;
}

.results-pct {
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 0.35rem;
}

.review-section {
  display: grid;
  gap: 0.75rem;
}

.review-list {
  display: grid;
  gap: 0.65rem;
}

.review-card {
  padding: 1rem 1.15rem;
  border-left-width: 3px;
}

.review-card--correct {
  border-left-color: var(--score-high);
}

.review-card--wrong {
  border-left-color: var(--score-low);
}

.review-question {
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 0.65rem;
}

.review-answers {
  display: grid;
  gap: 0.35rem;
}

.review-answer {
  font-size: 0.88rem;
  color: var(--text-soft);
}

.review-answer--correct {
  color: var(--score-high);
}

.review-label {
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.15rem;
}
</style>
