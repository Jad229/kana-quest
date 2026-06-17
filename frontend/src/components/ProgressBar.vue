<script setup>
import { useQuizStore } from '@/stores/useQuizStore.js'
import { computed } from 'vue'

const quizStore = useQuizStore()

const width = computed(() => `${quizStore.progress}%`)
</script>

<template>
  <div class="progress-bar">
    <div class="progress-fill" />
    <span class="progress-label">{{ quizStore.progress }}%</span>
  </div>
</template>

<style scoped>
.progress-bar {
  position: relative;
  background: rgba(176, 224, 230, 0.08);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  height: 1.35rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: v-bind(width);
  background: linear-gradient(90deg, #5a9e7a, var(--score-high));
  border-radius: 6px;
  transition: width 0.25s ease;
}

.progress-label {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.72rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: powderblue;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}
</style>
