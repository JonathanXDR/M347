<template>
  <ul class="filter-list">
    <li v-for="(action, index) in actions" :key="index">
      <router-link class="filter-item" :to="action.path">
        <OctIcon :name="action.icon" class="mr-2" />
        {{ action.title }}
        <!-- <span class="count">21</span> -->
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts" src="./FilterList.ts"></script>
<style scoped src="./FilterList.css"></style>
