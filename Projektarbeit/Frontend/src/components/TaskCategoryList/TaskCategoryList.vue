<template>
  <div class="col-sm-12 col-md-8 d-flex flex-column p-3 p-md-6">
    <h1 class="pb-4">What's up, Jonathan!</h1>
    <!-- <h4 class="color-fg-muted">You have X tasks to do today</h4> -->
    <h4 class="pb-3 color-fg-muted">Categories</h4>
    <CategoryItem />

    <h4 class="pt-4 pb-3 color-fg-muted">Today's Tasks</h4>
    <TaskItem />
  </div>
</template>

<script lang="ts" src="./TaskCategoryList.ts"></script>
<style scoped src="./TaskCategoryList.css"></style>
