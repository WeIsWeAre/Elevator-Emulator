import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

window.eventBus = new Vue()

export const store = new Vuex.Store({
  state: {
    elevators: [],
    levels: [],
  },
  getters: {
    getElevatorColorById :(state) => (idLevel,idElevator) => {
      const tmp = state.elevators.find(elevator => elevator.locationLevel === idLevel && elevator.id === idElevator)
      return tmp ? tmp.color : "white";
    },
    getLevels(state){
      return state.levels;
    },
    getElevators(state){
      return state.elevators
    },

  },
  mutations: {
    setElevators(state,data) {
      state.elevators = data.elevators;
    },
    setLevels(state,data) {
      state.levels = data.levels;
    },
    

  },
  actions: {
    setData(context, data) {
      context.commit(data.mutationName, data)
    },

    

  }
})