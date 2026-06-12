import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { cards } from '@/data/cards.js';
import { useRouter } from 'vue-router';



export const useQuizStore = defineStore('quiz', () => {
  const router = useRouter();

  // state
  const score = ref(0)
  const allCards = ref(cards)
  const phase = ref('start') // start | flash | quiz | results
  const currentIndex = ref(0)
  const selectedAnswer = ref(null)
  const results = ref([])

  // actions

  function startQuiz(mode) {
    score.value = 0
    selectedAnswer.value = null
    currentIndex.value = 0
    results.value = []
    phase.value = mode
  }

  function nextCard() {
    if (currentIndex.value < allCards.value.length - 1)
      currentIndex.value++
    else
      if (phase.value === 'flash')
        phase.value = 'start'
      else
        phase.value = 'results'
  }
  function prevCard() {
    if (currentIndex.value > 0)
      currentIndex.value--
    else {
      phase.value = 'start'
    }
  }

  // getters
  const currentCard = computed(() => allCards.value[currentIndex.value])
  const progress = computed(() => Math.round((currentIndex.value / allCards.value.length) * 100))

  watch(phase, (newVal) => {
    const path = newVal === 'flash' || newVal === 'quiz' ? 'quiz' : newVal
    router.push({ name: path })
  }, { immediate: true })
  return { score, allCards, phase, currentIndex, selectedAnswer, results, startQuiz, nextCard, prevCard, currentCard, progress }
})

