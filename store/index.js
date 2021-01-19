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
    
    for (const poke of data) {
      await this.$axios.$get(poke.url).then((response) => {
        Vue.set(
          poke,
          'image',
          response.sprites.other['official-artwork'].front_default
        )
      })
    }

   commit('setPokemon',data);

  }
}