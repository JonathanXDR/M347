<script setup>
import { RouterLink, RouterView } from 'vue-router'
import StudentList from './components/StudentList.vue'
</script>


<template>
  <div id="wrapper">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <RouterLink to="/" class="navbar-brand">TBZ</RouterLink>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <RouterLink to="/student" class="nav-link">Students</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/add" class="nav-link">Add</RouterLink>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <RouterView/>
    </div>
 
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>