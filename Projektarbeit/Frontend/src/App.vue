<script lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    RouterView,
    NavBar
  }
}
</script>

<template>
  <header class="Header px-3 px-md-4 px-lg-5">
    <NavBar />
  </header>
  <main class="full-width full-height">
    <RouterView />
  </main>
</template>

<style>
.full-width {
  width: 100%;
}

.full-height {
  height: 100%;
}
</style>
