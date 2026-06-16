<script setup>
import { useQuizStore } from '@/stores/useQuizStore.js'
import { computed, ref } from 'vue'

const quizStore = useQuizStore()

const width = computed(() => `${quizStore.progress}%`)
</script>
<template>
  <div class="bar">
    <div class="progress"></div>
    <span class="position">{{ quizStore.currentIndex }}/{{ quizStore.totalCards }}</span>
  </div>
</template>
<style scoped>
.bar {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 10px;
  background-color: white;
  width: 100%;
  height: 1.5em;
  border-radius: 8px;
  padding: 1px;
}
.progress {
  background-color: lightgreen;
  border-radius: 10px;
  height: 90%;
  width: v-bind(width);
}
.position {
  position: absolute;
  right: 15px;
  font-weight: bold;
  color: black;
}
</style>
