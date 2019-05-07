import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import createLogger from 'vuex/dist/logger';
import router from './router';


Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [
    createLogger({
      collapsed: false,
    }),
  ],
  state: {
    user: {},
    isAuthenticated: false,
    isError: false,
    error: {},
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },

    login(state, data) {
      state.user = data.user;
      state.isError = false;
      state.isAuthenticated = data.isAuthenticated;
      router.push('/profile');
    },

    loginError(state, error) {
      state.isError = true;
      state.error = error;
    },

    removeError(state) {
      state.isError = false;
      state.error = {};
    },
  },
  actions: {
    login({ commit }, user) {
      axios({
          url: 'https://kbss-authentication-service.herokuapp.com/authentication/signin',
          method: 'POST',
          data: user,
        })
        .then((response) => {
          const userData = response.data;
          commit('login', userData);
        })
        .catch((error) => {
          const errorObj = error.response.data;
          commit('loginError', errorObj);
        });
    },
    signup({ commit }, user) {
      axios({
          url: 'https://kbss-authentication-service.herokuapp.com/authentication/signup',
          method: 'POST',
          data: user,
        })
        .then((response) => {
          const userData = response.data;
          commit('login', userData);
        })
        .catch((error) => {
          const errorObj = error.response.data;
          commit('loginError', errorObj);
        });
    },
  },
  getters: {
    isError: state => state.isError,
    errorMessage: state => state.error.message,
  },
});

export default store;
