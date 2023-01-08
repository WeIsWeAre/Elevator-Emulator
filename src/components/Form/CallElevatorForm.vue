<template>
    <div class="form-check">
      
      <input v-on:click="callElevator()" class="form-check-input" type="radio" id="exampleRadios1" checked>
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
      methods:{
        callElevator(){
          const data = {"levelID": this.levelId, mutationName : "callElevator"}
          this.$store.dispatch('setData',data);
        }
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