<template>
  <ul v-for="(task, index) in tasks" :key="index">
    <li class="Box p mb-2">
      <router-link
        class="Box-row d-flex flex-items-center no-underline color-fg-default"
        :to="`/task/${task.id}`"
      >
        <input type="checkbox" class="mr-3" :checked="!task.done" />
        <div class="flex-auto">
          <strong>{{ task.title }}</strong>
          <div class="text-small color-fg-subtle">{{ task.description }}</div>
        </div>
        <button type="button" class="btn btn-primary" name="button">View</button>
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts" src="./TaskItem.ts"></script>
<style scoped src="./TaskItem.css"></style>
