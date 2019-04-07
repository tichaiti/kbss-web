import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    msg: 'What are you doing here?',
    status: 'happy',
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },

    // Temporary
    processAuthentication(state, user) {
      state.user = user;
    },
  },
  actions: {

  },
});

export default store;
