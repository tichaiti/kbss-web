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
      // eslint-disable-next-line no-param-reassign
      state.count += 1;
    },
  },
  actions: {

  },
});

export default store;
