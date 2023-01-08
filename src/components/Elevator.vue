<template>
    <div class="block-elevator mx-2">

        <div v-if="elevator.inMotion === true" v-bind:style="{ backgroundColor: color,borderRadius: '30px' }" class="block-elevator__item"></div>
        <div v-else v-bind:style="{ backgroundColor: color }" class="block-elevator__item"></div>

       
    </div>
</template>

<script>
export default {
    props: {
        levelId: Number,
        elevator: Object,
    },
    computed: {
        color() {
            return this.$store.getters.getElevatorColorById(this.levelId, this.elevator.id);
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
    transition-property: background-color;
    transition-timing-function: linear;
    transition: 1s;
}

.elevator-leave{
    transform: translateY(99px);
}

</style>