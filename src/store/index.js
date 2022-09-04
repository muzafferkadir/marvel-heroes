import Vue from "vue";
import Vuex from "vuex";
import requests from "../services/requests";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characterList: [],
    characterData: null,
    loading: false,
  },

  getters: {},

  mutations: {
    SET_CHARACTER_LIST(state, characters) {
      state.characterList.push(...characters);
    },

    RESET_CHARACTER_LIST(state) {
      state.characterList = [];
    },

    SET_CHARACTER_DATA(state, character) {
      state.characterData = character;
    },

    SET_LOADING(state, loading) {
      state.loading = loading;
    },
  },

  actions: {
    async fetchCharactersList({ commit }, payload) {
      commit("SET_LOADING", true);

      return requests
        .fetchCharactersList(payload)
        .then((characters) => {
          commit("SET_CHARACTER_LIST", characters);
          commit("SET_LOADING", false);
        })
        .catch((error) => console.log(error));
    },

    async fetchCharacter({ commit }, payload) {
      commit("SET_LOADING", true);

      return requests
        .fetchCharacter(payload)
        .then((character) => {
          commit("RESET_CHARACTER_LIST"); // remove characterList
          commit("SET_CHARACTER_DATA", character);
          commit("SET_LOADING", false);
        })
        .catch((error) => console.log(error));
    },
  },
});
