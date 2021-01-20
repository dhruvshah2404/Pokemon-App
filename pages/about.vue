<template>
  <div class="container pokemon-cont">
    <img :src="pokemon.image" alt="" srcset="" />
    <h1 class="subtitle">{{ pokemon.name }}</h1>
    <div class="types">
      <div
        :class="po.type.name + ' ' + 'type'"
        v-for="po in pokemon.type"
        :key="po.id"
      >
        {{ po.type.name }}
      </div>
    </div>
    <div class="attributes">
      <div>Height: {{ pokemon.height }}</div>
      <div>Weight: {{ pokemon.weight }}</div>
    </div>
    <div class="abilities">
     <div>Abilities: </div>
      <div v-for="ability in pokemon.abilities" :key="ability.id">
        {{ability.ability.name}}
      </div>
    </div>

    <div class="stats">
      <table>
        <tr v-for="stat in pokemon.stats" :key="stat.id">
          <td>{{stat.stat.name}}</td>
          <td>{{stat.base_stat}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name:'about',
  data() {
    return {
      pokemon: {},
      img: '',
      passedData:{},
      url:''
    }
  },
  computed: {
    img() {
      return this.img
    },
  },
  async created() {
    this.passedData = this.$route.params.pokename
    this.url = this.passedData.url
    let response = await this.$axios.$get(this.url)
    this.pokemon = response
    this.$set(
      this.pokemon,
      'image',
      response.sprites.other['official-artwork'].front_default
    )
    this.$set(this.pokemon, 'type', response.types)

    this.$set(
      this.pokemon,
      'abilities',
      response.abilities
    )
    this.$set(
      this.pokemon,
      'stats',
      response.stats
    )
  },
}
</script>
<style lang="less">
.pokemon-cont {
  font-size: 20px;
  width: 90%;
  max-width: 500px;
  text-align: center;
  box-shadow: 0px 0px 20px -5px grey;
  border-radius: 25px;
  margin: 20px auto !important;
  padding: 20px 0;
}
.types ,.attributes,.abilities{
  display: flex;
  justify-content: center;
  margin: 10px 0;
  text-transform: capitalize;
  div{
    margin-right: 10px;
  }
}

.stats{
  table{
    margin: auto;
    border-spacing: 5px 10px;
    td{
      text-transform: capitalize;
    text-align: left;
    border: 1px solid lightgrey;
    padding: 10px 15px;
    border-radius: 40px;

    &:hover{
      background: #c1bdc0;
      color: white;
    }
    }
  }
}

</style>