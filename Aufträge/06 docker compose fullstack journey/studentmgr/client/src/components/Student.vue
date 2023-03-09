<template>
    <div v-if="currentStudent" class="edit-form">
      <h4>Student</h4>
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name"
            v-model="currentStudent.name"
          />
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input type="text" class="form-control" id="age"
            v-model="currentStudent.age"
          />
        </div>
      </form>
  
      <button class="badge badge-danger mr-2"
        @click="deleteStudent"
      >
        Delete
      </button>
  
      <button type="submit" class="badge badge-success"
        @click="updateStudent"
      >
        Update
      </button>
      <p>{{ message }}</p>
    </div>
  
    <div v-else>
      <br />
      <p>Please click on a Student...</p>
    </div>
  </template>
  
  <script>
  import StudentDataService from "../services/StudentDataService";
  
  export default {
    name: "student",
    data() {
      return {
        currentStudent: null,
        message: ''
      };
    },
    methods: {
      getStudent(id) {
        StudentDataService.get(id)
          .then(response => {
            this.currentStudent = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      updateStudent() {
        StudentDataService.update(this.currentStudent.id, this.currentStudent)
          .then(response => {
            console.log(response.data);
            this.message = 'The student was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      deleteStudent() {
        StudentDataService.delete(this.currentStudent.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "students" });
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.message = '';
      this.getStudent(this.$route.params.id);
    }
  };
  </script>
  
  <style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>
  