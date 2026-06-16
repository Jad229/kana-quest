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
    if (currentIndex.value < totalCards.value - 1) {
      currentIndex.value++
      selectedAnswer.value = null
    }
    else
      if (phase.value === 'flash')
        phase.value = 'start'
      else
        phase.value = 'results'
  }

  function prevCard() {
    if (currentIndex.value > 0) {
      currentIndex.value--
      selectedAnswer.value = null
    }
    else {
      phase.value = 'start'
    }
  }

  function checkAnswer(selectedChoice) {
    selectedAnswer.value = selectedChoice
    const isCorrect = selectedAnswer.value === correctAnswer.value

    if (isCorrect) {
      score.value++
    }

    results.value.push({
      question: currentCard.value.question,
      isCorrect,
      selected: selectedAnswer.value,
      correctAnswer: correctAnswer
    })
  }


  // getters
  const currentCard = computed(() => allCards.value[currentIndex.value])
  const correctAnswer = computed(() => currentCard.value.answer)
  const totalCards = computed(() => allCards.value.length)
  const progress = computed(() => Math.round((currentIndex.value / totalCards.value) * 100))

  watch(phase, (newVal) => {
    const path = newVal === 'flash' || newVal === 'quiz' ? 'quiz' : newVal
    router.push({ name: path })
  }, { immediate: true })
  return { score, allCards, phase, currentIndex, selectedAnswer, results, startQuiz, nextCard, prevCard, checkAnswer, currentCard, progress, correctAnswer, totalCards }
})

