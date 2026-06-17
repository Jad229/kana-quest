<script setup>
import { useQuizStore } from '@/stores/useQuizStore.js'
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const quizStore = useQuizStore()

const hasHistory = computed(() => quizStore.history.length > 0)

function handleStart(mode) {
  quizStore.startQuiz(mode)
  router.push('quiz')
}

function formatDate(dateStr) {
  const date = new Date(dateStr.replace(' ', 'T') + 'Z')
  return date.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

function scorePercent(score, total) {
  if (!total) return 0
  return Math.round((score / total) * 100)
}

function scoreClass(score, total) {
  const pct = scorePercent(score, total)
  if (pct >= 80) return 'score-high'
  if (pct >= 50) return 'score-mid'
  return 'score-low'
}

onMounted(async () => {
  await quizStore.fetchHistory()
})
</script>

<template>
  <div class="page">
    <header class="hero">
      <p class="eyebrow">日本語 · Japanese</p>
      <h1 class="title">Kana Quest</h1>
      <p class="tagline">Learn hiragana and katakana at your own pace.</p>
    </header>

    <section class="mode-section">
      <h2 class="section-label">Choose a mode</h2>
      <div class="mode-grid">
        <button class="mode-card" @click="handleStart('flash')">
          <span class="mode-icon" aria-hidden="true">🃏</span>
          <span class="mode-name">Flash Cards</span>
          <span class="mode-desc">Tap to reveal each answer and study freely.</span>
        </button>
        <button class="mode-card mode-card--accent" @click="handleStart('quiz')">
          <span class="mode-icon" aria-hidden="true">✦</span>
          <span class="mode-name">Quiz</span>
          <span class="mode-desc">Pick the right answer and track your score.</span>
        </button>
      </div>
    </section>

    <section class="history-section panel">
      <h2 class="section-label">Past scores</h2>

      <div v-if="hasHistory" class="history-list">
        <div
          v-for="result in quizStore.history"
          :key="result.id"
          class="history-row"
        >
          <span class="history-date">{{ formatDate(result.date) }}</span>
          <span class="history-score" :class="scoreClass(result.score, result.total)">
            {{ result.score }} / {{ result.total }}
          </span>
          <span class="history-pct">{{ scorePercent(result.score, result.total) }}%</span>
        </div>
      </div>

      <p v-else class="history-empty">
        No quiz results yet — start a quiz to see your scores here.
      </p>
    </section>
  </div>
</template>

<style scoped>
.page {
  gap: 2.5rem;
}

.hero {
  text-align: center;
}

.eyebrow {
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(176, 224, 230, 0.55);
  margin-bottom: 0.5rem;
}

.title {
  font-size: clamp(2.25rem, 6vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.tagline {
  margin-top: 0.6rem;
  font-size: 1rem;
  color: rgba(176, 224, 230, 0.7);
}

.mode-section .section-label,
.history-section .section-label {
  margin-bottom: 0.75rem;
}

.mode-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.mode-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.35rem;
  padding: 1.1rem 1.15rem;
  background: var(--dark-bg-elevated);
  border: 1px solid rgba(176, 224, 230, 0.12);
  border-radius: 12px;
  color: powderblue;
  cursor: pointer;
  text-align: left;
  transition: border-color 0.15s, background 0.15s, transform 0.15s;
}

.mode-card:hover {
  border-color: rgba(176, 224, 230, 0.35);
  background: #2a3f52;
  transform: translateY(-2px);
}

.mode-card:active {
  transform: translateY(0);
}

.mode-card--accent {
  border-color: rgba(238, 232, 170, 0.25);
}

.mode-card--accent:hover {
  border-color: rgba(238, 232, 170, 0.55);
  background: #2e3a3a;
}

.mode-icon {
  font-size: 1.4rem;
  line-height: 1;
}

.mode-name {
  font-size: 1.05rem;
  font-weight: 600;
}

.mode-desc {
  font-size: 0.78rem;
  line-height: 1.4;
  color: rgba(176, 224, 230, 0.55);
}

.history-section {
  padding: 1.25rem 1.35rem;
}

.history-list {
  display: grid;
  gap: 0;
}

.history-row {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 1rem;
  padding: 0.65rem 0;
  border-bottom: 1px solid rgba(176, 224, 230, 0.08);
  font-size: 0.9rem;
}

.history-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.history-row:first-child {
  padding-top: 0;
}

.history-date {
  color: rgba(176, 224, 230, 0.65);
  font-size: 0.82rem;
}

.history-score {
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.history-pct {
  font-size: 0.82rem;
  font-variant-numeric: tabular-nums;
  color: rgba(176, 224, 230, 0.5);
  min-width: 2.5rem;
  text-align: right;
}

.history-empty {
  font-size: 0.88rem;
  color: rgba(176, 224, 230, 0.45);
  line-height: 1.5;
}

@media (max-width: 420px) {
  .mode-grid {
    grid-template-columns: 1fr;
  }

  .history-row {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
  }

  .history-pct {
    grid-column: 2;
    grid-row: 1 / 3;
    align-self: center;
  }
}
</style>
