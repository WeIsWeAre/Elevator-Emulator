<template>
    <div class="block-elevator mx-2">
       <div v-bind:style="{backgroundColor: color}" class="block-elevator__item"></div> 
    </div>
</template>

<script>
export default {
    props:{
        levelId: Number,
        elevatorId: Number,
    },  
    computed:{
        color(){
            return this.$store.getters.getElevatorColorById(this.levelId,this.elevatorId);
        },
    },
}
</script>

<style >
.block-elevator {
    border-left: 3px solid #9FA6B2;
    border-right: 3px solid #9FA6B2;
}
.block-elevator__item{
    height: 99px;
    width: 50px;
    background-color: white;
}
</style>