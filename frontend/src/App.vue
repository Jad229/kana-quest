<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
