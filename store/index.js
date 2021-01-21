import Vue from "vue";
import Vuex from "vuex";

export const strict = false


export const state = () => ({
  pokemons:[]
})
export const mutations = {
  setPokemon(state , list){
    state.pokemons = list
  },
}

export const actions = {
  async getall({commit}){
    let response =  await this.$axios.$get('https://pokeapi.co/api/v2/pokemon?limit=1118')
    let data = response.results;

   commit('setPokemon',data);
  }
}