<template>
  <ul class="ActionList">
    <li class="ActionList-item">
      <span class="ActionList-content">
        <a class="ActionList-item-label no-underline">
          <OctIcon name="bookmark" class="mr-2" />
          Templates
        </a>
      </span>
    </li>
    <li class="ActionList-item ActionList-item--navActive">
      <span class="ActionList-content">
        <a class="ActionList-item-label no-underline">
          <OctIcon name="apps" class="mr-2" />
          Categories
        </a>
      </span>
    </li>
    <li class="ActionList-item">
      <span class="ActionList-content">
        <a class="ActionList-item-label no-underline">
          <OctIcon name="graph" class="mr-2" />
          Analytics
        </a>
      </span>
    </li>
    <li class="ActionList-item">
      <span class="ActionList-content">
        <a class="ActionList-item-label no-underline">
          <OctIcon name="gear" class="mr-2" />
          Settings
        </a>
      </span>
    </li>
  </ul>
</template>

<script lang="ts" src="./ActionList.ts"></script>
<style scoped src="./ActionList.css"></style>
