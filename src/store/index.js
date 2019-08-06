import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    numberOfColumns: 0,
    usernames: []
  },
  getters: {
    updateColumnCount(state) {
      return state.numberOfColumns;
    },
    getUserName(state) {
      return state.usernames[state.usernames.length - 1];
    }
  },
  mutations: {
    changeColumnState(state, count) {
      if (count < state.numberOfColumns) state.usernames.pop();
      console.log(state.usernames);
      state.numberOfColumns = parseInt(count);
    },
    updateUserList(state, name) {
      state.usernames.push(name);
    }
  }
});
