<template>
  <div class="main container">
    <div class="input">
      <input type="text" class='search-input' placeholder="Search ..." @input="search()" v-model="text">
    </div>
    <div class="pokecard" v-for="pokemon in searched" :key="pokemon.id">
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
      filtered: [] ,
      loading: false,
      pokemons: [],
      text:''
    }
  },
  computed:{
    searched(filtered){
      if(!this.text){
        return this.pokemons
      } else {
        return this.filtered
      }
    }
  },
  methods: {
    search(value){
      let filtered = this.$store.state.pokemons.filter((pokemon)=> 
      pokemon.name.includes(this.text));
      // this.giveImage(filtered);
      this.filtered = filtered
    },
    giveImage(array){
      array.forEach((elem) => {
      this.$axios.$get(elem.url).then((response) => {
        this.$set(
          elem,
          'image',
          response.sprites.other['official-artwork'].front_default
        )
      })
    });
    }
  },
  async mounted() {
    this.loading = true
    let link = 'https://pokeapi.co/api/v2/pokemon'
    let response = await this.$axios.$get(link)
    this.pokemons = response.results;

    this.giveImage(this.pokemons);
  },
}
</script>

<style lang='less'>
.container {
  margin: 0 auto;
  align-items: center;
  text-align: center;
}
.main{
  // max-width: 500px;
  max-width: 850px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.input{
  width: 100%;
.search-input{
  margin: 20px 0;
  width: 300px;
  height: 47px;
  border-radius: 30px;
  padding: 0 20px;
  font-size: 18px;
  outline: none;
  border: 2px solid #e2e2e2;
  transition: all .25s ease-in-out;

  &:focus{
    border:2px solid #1976D2
  }
}
}

.name{
  text-transform: capitalize;
    font-size: 22px;
    width: 100%;
    display: flex;
    justify-content: center;
    /* background: #FF9800; */
    align-items: center;
    font-weight: 500;
    color:#35495e
}

.poke-img{
  width: 200px;
  margin: auto;
}
img{
  width: 200px;
}
.pokecard{
      margin: 20px 0;
    height: 300px;
    width: 230px;
    /* border: 1px solid lightgrey; */
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0px 0px 20px 0px lightgrey;
}

</style>
