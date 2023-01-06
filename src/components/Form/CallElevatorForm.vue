<template>
    <div class="form-check">
      
      <input class="form-check-input" type="radio" id="exampleRadios1" checked>
        <label class="form-check-label">
          {{ levelId }}
        </label>
      </div>

  </template>
  
  <script>
  
    export default {
      props:{
        levelId: Number,
      },  
      mounted() {
      
      }
    }
  </script>
  
  <style>
  .form-check{
    align-self: center;
  }
  </style>