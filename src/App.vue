<template>
  <div id="app">

    <div class="elevator-list">
      <elevator v-for="(elevator, index) of numberOfElevators" v-bind:key="index"></elevator>
    </div>

  </div>
</template>

<script>

  import config from './config.js'
  import Elevator from './components/Elevator/Elevator.vue'

  export default {
    name: 'App',
    components: {
      "elevator": Elevator,
    },
    data() {
      return {
        numberOfLevels: 5,
        numberOfElevators: 1
      }
    },
    methods: {

      changeSettings(){
        this.numberOfLevels = config.numberOfLevels;
        this.numberOfElevators = config.numberOfElevators;
      },

    },
    computed: {
    

    },
    created(){
      this.changeSettings();
    },
    mounted() {
 
    }
  }
</script>

<style>


  #app {
    color: #074E5E;
    font-family: 'Roboto', sans-serif;
    min-width: 600px;
  }


</style>