<template>
  <div class="col-sm-3 col-md-4">
    <a
      class="d-flex flex-column flex-justify-between d-block color-shadow-medium px-3 pt-4 pb-6 rounded-3 overflow-hidden no-underline"
      href="#"
    >
      <!-- <h4 class="color-fg-muted">X Tasks</h4> -->
      <h3 class="color-fg-default">Category Name</h3>
      <div>
        <span class="text-small color-fg-muted mr-2">X of X</span>
        <span class="Progress d-inline-flex" style="width: 100%">
          <span class="Progress-item color-bg-success-emphasis" style="width: 25%"></span>
        </span>
      </div>
    </a>
  </div>
</template>

<script lang="ts" src="./CategoryItem.ts"></script>
<style scoped src="./CategoryItem.css"></style>
