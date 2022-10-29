import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    loggedIn: false,
    user: {
      id: -1,
      name: '',
      login: '',
    },
    environments: [],
  },
  getters: {
    loggedIn: state => state.loggedIn,
    user: state => state.user,
    environments: state => state.environments.map(env => {
      return {
        title: env.name,
        value: env.id
      }
    }),
    environment: (state) => (id) => state.environments.find(env => env.id === id),
  },
  mutations: {
    loggedIn(state, data) {
        state.loggedIn = true;
        state.user = data;
    },
    setEnvironments(state, data) {
        state.environments = data;
    }
  },
  actions: {
    loggedIn({ commit }, data) {
        commit('loggedIn', data);
    },
    async login({ commit }, { email, password }) {

      let axiosResponse = await axios.post('http://localhost:3000/login', {
        email,
        password
      })

      if (axiosResponse.status === 200) {
          commit('loggedIn', axiosResponse.data);
      }

      return axiosResponse.status === 200;
    },
    async getUserEnvironments({ commit }) {
        let axiosResponse = await axios.get('http://localhost:3000/getUserEnvironments');
        commit('setEnvironments', axiosResponse.data);
        return axiosResponse.data;
    }
  },
  modules: {
  }
})
