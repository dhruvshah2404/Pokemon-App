<template>
  <div class="main container">
    <div class="input">
      <input type="text" class='search-input' placeholder="Search ...">
    </div>
    <div class="pokecard" v-for="pokemon in pokemons" :key="pokemon.id">
      <div class="poke-img">
        <img :src="pokemon.image" alt="" />
      </div>
      <div class="name">{{ pokemon.name }}</div>
      <div class="name">{{ pokemon.height }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      pokedex: [],
      loading: false,
      pokemons: [],
    }
  },
  async mounted() {
    this.loading = true
    let link = 'https://pokeapi.co/api/v2/pokemon'
    let response = await this.$axios.$get(link)
    this.pokemons = response.results

    this.pokemons.forEach((elem) => {
      this.$axios.$get(elem.url).then((response) => {
        this.$set(
          elem,
          'image',
          response.sprites.other['official-artwork'].front_default
        )
      })
    })
  },
}
</script>

<style lang='less'>
.container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.main{
  max-width: 500px;
  width: 90%;
}
.search-input{
  margin: 20px 0;
  width: 70%;
  height: 47px;
  border-radius: 30px;
  padding: 0 20px;
  font-size: 18px;
  outline: none;
  border: 1px solid lightgray;
}
.name{
  text-transform: capitalize;
    font-size: 22px;
    width: 100%;
    display: flex;
    justify-content: center;
    /* background: #FF9800; */
    align-items: center;
}

.poke-img{
  width: 200px;
  margin: auto;
}
img{
  width: 200px;
}
.pokecard{
      margin: 20px auto;
    height: 300px;
    width: 230px;
    /* border: 1px solid lightgrey; */
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0px 0px 20px 0px lightgrey;
}

</style>
