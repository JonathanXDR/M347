<script lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar/NavBar.vue'

export default {
  name: 'App',
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

.full-width {
  width: 100%;
}

.full-height {
  height: 100%;
}
</style>
