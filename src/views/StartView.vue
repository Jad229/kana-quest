<script setup></script>
<template>
  <div class="container">
    <h1 class="title">Kana Quest</h1>
    <p class="subtext">Learn Japanese one flashcard at a time!</p>
    <button class="btn start">START!</button>
  </div>
</template>
<style scoped>
.container {
  display: grid;
  gap: 25px;
  justify-items: center;
  align-items: center;
}

.title {
  font-size: 4rem;
}

.subtext {
  font-size: 1.5rem;
}

.btn.start {
  width: 200px;
  height: 50px;
  background-color: palegoldenrod;
  border: none;
  border-radius: 5px;
}
</style>
