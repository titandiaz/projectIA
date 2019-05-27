
export const state = () => ({
  infoTwits: []
})

export const mutations = {
  SET_INFO(state, value) {
    state.infoTwits = value
  }
}

export const actions = {
  
}

// const createStore = () => {
//   return new Vuex.Store({
//     state: () => ({
//       infoTwits: []
//     }),
//     mutations: {
//       SET_INFO(state, value) {
//         state.infoTwits = value
//       }
//     }
//   })
// }

// export default createStore