<template>
    <div class="block-level">
        <div v-for="elevator in elevators" v-bind:key="levelId.toString() + elevator.id.toString()">
            <elevator :elevator="elevator" v-if="levelId == elevator.locationLevel"></elevator>
            <none-elevator v-else></none-elevator>
        </div>
        <call-elevator-form :levelId="levelId"></call-elevator-form>
    </div>
</template>


<script>

import Elevator from "./Elevator.vue"
import NoneElevator from "./NoneElevator.vue"
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
        "none-elevator": NoneElevator,
    },

}
</script>

<style >

.block-level {
    display: flex;
    border-bottom: 1px solid #9FA6B2;
}
</style>