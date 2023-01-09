<template>
  <div id="app">

     <elevator-system></elevator-system>

  </div>
</template>

<script>

  import config from './config.js'
  import ElevatorSystem from './components/ElevatorSystem.vue'

  export default {
    name: 'App',
    components: {
      "elevator-system" : ElevatorSystem,
    },
    data() {
      return {
        useConfig: config,
      }
    },
    methods: {

      init(){
        this.creteLevels();
        this.creteElevators();
      },
      creteLevels(){
        const data = {levels: [], mutationName : "setLevels"}
        for(let i = 0; i < this.useConfig.numberOfLevels; i++){
          data.levels.push({
            "id": i + 1
          })
        }
        this.$store.dispatch('setData',data);
      },
      creteElevators(){
        const data = {elevators: [], mutationName : "setElevators"}
        for(let i = 0; i < this.useConfig.numberOfElevators; i++){
          data.elevators.push({
            "id": i + 1,
            "inMotion": false,
            "locationLevel": 1,
            "state": -1, // -1 on the spot; 1 - UP; 0 - DOWN 
            "color": "#"+((1<<24)*Math.random()|0).toString(16),
          })
        }
        this.$store.dispatch('setData',data);
      }
    },
    created(){
      this.init();
    },
    mounted() {
      
    }
  }
</script>

<style>

  #app {
    white-space: nowrap;
    overflow:scroll-x;
    font-family: 'Roboto', sans-serif;
    height: 100%;
    margin: 0;
    padding:0;
    color: black;
  }
</style>