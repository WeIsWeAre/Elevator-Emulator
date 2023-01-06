<template>
    <div class="block-elevator-system">
        <level v-for="level in levels" v-bind:key="level.id"> </level>
    </div>
</template>
  
  <script>

  import Level from "./Level.vue"
    export default {
      computed: {
        levels() {
          return this.$store.getters.getLevels;
        },
      },
      components:{
        "level": Level,
      },
    }
  </script>
  
  <style >
  .block-elevator-system{
    margin-left:2px;
    margin-top:2px;
  }
  </style>