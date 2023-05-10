<template>
  <ul class="d-flex flex-wrap">
    <li
      class="col-sm-5 col-md-3 mr-sm-3 mr-md-4 mb-sm-3 mb-md-4"
      v-for="(category, index) in categories"
      :key="index"
    >
      <router-link
        class="d-flex flex-column flex-justify-between d-block color-shadow-medium px-3 pt-4 pb-6 rounded-3 overflow-hidden no-underline"
        :to="`/category/${category.id}`"
      >
        <!-- <h4 class="color-fg-muted">X Tasks</h4> -->
        <h3 class="color-fg-default">
          <!-- <OctIcon :name="category.icon" class="mr-2" /> -->
          {{ category.title }}
        </h3>
        <div>
          <span class="text-small color-fg-muted mr-2">X of X</span>
          <span class="Progress d-inline-flex" style="width: 100%">
            <span class="Progress-item color-bg-success-emphasis" style="width: 25%"></span>
          </span>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts" src="./CategoryItem.ts"></script>
<style scoped src="./CategoryItem.css"></style>
