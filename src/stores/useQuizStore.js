import { defineStore } from 'pinia';

export const useQuizStore = defineStore('quiz', {
  state: () => {
    return { score: 0 }
  },
  actions: {
    increment(val = 1) {
      this.score += val
    }
  },
  getters: {

  }
})