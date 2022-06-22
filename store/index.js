import Vue from "vue";
import Vuex from "vuex";

export const strict = false


export const state = () => ({
  pokemons:[],
  totalPokemons: 0,
  pagination: {
    count: 0
  },
})
export const mutations = {
  setPokemon(state , list){
    state.pokemons = list.results;
    state.pagination = list
  },
}

export const actions = {
  async getall({commit}){
    let response =  await this.$axios.$get('https://pokeapi.co/api/v2/pokemon?limit=12')
    let data = response;

   commit('setPokemon',data);
  }
}