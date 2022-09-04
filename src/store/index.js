import Vue from "vue";
import Vuex from "vuex";
import requests from "../services/requests";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characterList: [],
    characterData: null,
    charactersComicData: null,
    loading: true,
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

    SET_CHARACTERS_COMICS_DATA(state, character) {
      state.charactersComicData = character;
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

    async fetchCharactersComics({ commit }, payload) {
      commit("SET_LOADING", true);

      return requests
        .fetchComics(payload)
        .then((comics) => {
          commit("SET_CHARACTERS_COMICS_DATA", comics);
          commit("SET_LOADING", false);
        })
        .catch((error) => console.log(error));
    },

    async searchCharacter({ commit }, payload) {
      try {
        if (!payload.name || payload.name === "") return;
        commit("SET_LOADING", true);

        const response = await requests.fetchCharactersList(payload);

        const character = response[0];
        const detailURL = `/details/${character.id}`;

        if (router?.currentRoute?.path !== detailURL) {
          await router.push(detailURL);
        }

        commit("SET_CHARACTER_DATA", character);
        commit("SET_LOADING", false);
      } catch (error) {
        await router.push({ path: "/not-found" });
        commit("SET_LOADING", false);
      }
    },
  },
});
