<script setup>
import { useQuizStore } from '@/stores/useQuizStore.js'
import { computed, ref } from 'vue'

const quizStore = useQuizStore()

const width = computed(() => `${quizStore.progress}%`)
</script>
<template>
  <div class="bar">
    <div class="progress"></div>
  </div>
</template>
<style scoped>
.bar {
  display: flex;
  align-items: center;
  margin-top: 10px;
  background-color: white;
  width: 100%;
  height: 20px;
  border-radius: 10px;
}
.progress {
  background-color: lightgreen;
  border-radius: 10px;
  height: 90%;
  width: v-bind(width);
}
</style>
