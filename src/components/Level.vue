<template>
    <div class="block-level">
        <elevator v-for="elevator in elevators" :levelId="levelId" :elevatorId="elevator.id" v-bind:key="levelId.toString() + elevator.id.toString()"></elevator>
        <call-elevator-form :levelId="levelId"></call-elevator-form>
    </div>
</template>


<script>

import Elevator from "./Elevator.vue"
import CallElevatorForm from "./Form/CallElevatorForm.vue"

export default {
    data() {
        return {
            levelId: this.$vnode.key,
        }
    },
    computed:{
        elevators(){
            return this.$store.getters.getElevators
        },
    },
    components: {
        "call-elevator-form": CallElevatorForm,
        "elevator": Elevator,
    },

}
</script>

<style >

.block-level {
    display: flex;
    border-bottom: 1px solid #9FA6B2;
}
</style>