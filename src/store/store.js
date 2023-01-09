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
    getElevatorById :(state) => (idLevel,idElevator) => {
      return state.elevators.find(elevator => elevator.locationLevel === idLevel && elevator.id === idElevator)
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
    callElevator(state,data) {
      const temp = state.elevators.filter(el => el.inMotion === false).map(el => el.locationLevel);
      const callLevelId = data.levelID;
      const numberLevelOfNearestElevator = temp.sort((x, y) => Math.abs(callLevelId - x) - Math.abs(callLevelId - y))[0];
      if(callLevelId !== numberLevelOfNearestElevator){
        const changeElevator = state.elevators.find(elevator => elevator.locationLevel == numberLevelOfNearestElevator)
        if(changeElevator){
          changeElevator.transitTime = Math.abs(callLevelId-changeElevator.locationLevel);
          callLevelId >= changeElevator.locationLevel ? changeElevator.state = 0 : changeElevator.state = 1
          changeElevator.inMotion = true;
          setTimeout(() => {      
            changeElevator.inMotion = false, changeElevator.state = -1, changeElevator.locationLevel = callLevelId;
          }, changeElevator.transitTime * 1000); 
        }
      }
    },
    
  },
  actions: {
    setData(context, data) {
      context.commit(data.mutationName, data)
    },
    

  }
})