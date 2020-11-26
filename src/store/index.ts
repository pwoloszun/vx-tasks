import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {
};

export default new Vuex.Store({
  strict: debug,
  state,
  mutations: {},
  actions: {},
  getters: {
    appInfo: (state) => {
      return null; // TODO
    },

    hasAppInfo: (state, getters) => {
      return false; // TODO
    },
  },
});
