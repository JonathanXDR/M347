<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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
  <header>
    <NavBar />
  </header>
  <main>
    <RouterView />
  </main>
</template>
