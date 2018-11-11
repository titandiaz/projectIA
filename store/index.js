
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      infoTwits: []
    }),
    mutations: {
      SET_INFO(state, value) {
        state.infoTwits = value
      }
    }
  })
}

export default createStore