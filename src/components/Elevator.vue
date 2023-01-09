<template>
    <div class="block-elevator mx-2">
        
    <transition :name="nameTransition">
        <div v-bind:style="{ backgroundColor: elevator.color }" class="block-elevator__item"></div>
    </transition>
       
    </div>
</template>

<script>
export default {
    props: {
        elevator: Object,
    },
    computed: {
        nameTransition(){
        
            if(this.elevator.inMotion === true){return this.elevator.state === 1 ? "elevatorUp" : "elevatorDown";}
            else{return "";}
        },
    },

}
</script>

<style>


.block-elevator {
    border-left: 3px solid #9FA6B2;
    border-right: 3px solid #9FA6B2;
}

.block-elevator__item {
    height: 99px;
    width: 50px;
    background-color: white;
}

.elevatorUp-leave-to{
    transition: transform 5s linear;
    transform: translateyY(-99px);
}

.elevatorDown-leave-to{  
    transition: transform 5s linear;
    transform: translateyY(99px);
}
</style>