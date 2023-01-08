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
    callElevator(state,data) {
      const temp = state.elevators.filter(el => el.inMotion === false).map(el => el.locationLevel);
      console.log(temp);
      const callLevelId = data.levelID;
      const numberLevelOfNearestElevator = temp.sort((x, y) => Math.abs(callLevelId - x) - Math.abs(callLevelId - y))[0];
      const changeElevator = state.elevators.find(elevator => elevator.locationLevel == numberLevelOfNearestElevator)
      if(changeElevator){
        const transitTime = Math.abs(callLevelId-changeElevator.locationLevel)
        console.log(transitTime);
        changeElevator.locationLevel = callLevelId;
        changeElevator.inMotion = true;
        setTimeout(() => {      
          changeElevator.inMotion = false;
        }, transitTime*1000); 
      }
    },
    
  },
  actions: {
    setData(context, data) {
      context.commit(data.mutationName, data)
    },
    

  }
})