<template>
    <div class="elevator" v-bind:style="{ backgroundColor: color}">
  

  
    </div>
</template>
  
  <script>
    export default {
      data() {
        return {
            id: this.$vnode.key,
            inMotion: false,
            locationLevel: 1,
            color: 0,
        }
      },
    
      methods: {
        createElevator(){
            this.color = "#"+((1<<24)*Math.random()|0).toString(16); 
        }
      },
      created(){
        this.createElevator();
      },
      mounted() { 
        //console.log(this.id);
      }
    }
  </script>
  
  <style >

    .elevator{
        border: 1px solid #332D2D;
        margin: 5px;
        display: inline-block;
        width: 60px;
        height: 100px;
        background-color: white;
    }

  </style>