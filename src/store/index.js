import { createStore } from 'vuex'

export default createStore({
  state: {
    loggedIn: true,
  },
  getters: {
    loggedIn: state => state.loggedIn,
  },
  mutations: {
    setLoggedIn(state, loggedIn) {
        state.loggedIn = loggedIn;
    }
  },
  actions: {
    setLoggedIn({ commit }, loggedIn) {
        commit('setLoggedIn', loggedIn);
    }
  },
  modules: {
  }
})
