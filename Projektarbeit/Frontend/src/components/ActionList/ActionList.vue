<template>
  <ul class="ActionList">
    <li class="ActionList-item" v-for="(action, index) in actions" :key="index">
      <span class="ActionList-content">
        <router-link class="ActionList-item-label no-underline" :to="action.path">
          <OctIcon :name="action.icon" class="mr-2" />
          {{ action.title }}
        </router-link>
      </span>
    </li>
  </ul>
</template>

<script lang="ts" src="./ActionList.ts"></script>
<style scoped src="./ActionList.css"></style>
