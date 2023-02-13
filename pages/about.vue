<template>
<div class="container">
  <p class="back-btn" @click="$router.go(-1)">Back</p>
   <div class=" pokemon-cont" v-if="pokemon">
    <img :src="pokemon.image" alt="" srcset="" class="main-img" />
    <h1 class="subtitle">{{ pokemon.name }}</h1>
    <div class="types">
      <div
        :class="po.type.name + ' ' + 'type'"
        v-for="po in pokemon.types"
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

  },
  async beforeMount() {
    
  },
  async mounted(){
   let id = this.$route.query.id;
    let url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    console.log(url);
    await this.$axios.get(url).then(({data})=>{
      let image = data.sprites.other['official-artwork'].front_default;
      this.pokemon = data;
      this.pokemon.image = image;
    })
  },
  async created() {
  
    
  },
}
</script>
<style lang="less">
.container{
  padding-top: 95px;
}
p.back-btn{
  text-align: center;
  width: 100px;
  margin: auto;
  padding: 5px 10px;
  background: mediumpurple;
  color: white;
  border-radius: 10px;
  cursor: pointer;
}
.pokemon-cont {
  font-size: 20px;
  width: 90%;
  max-width: 500px;
  text-align: center;
  box-shadow: 0px 0px 20px -5px grey;
  border-radius: 25px;
  margin: 20px auto !important;
  padding: 20px;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
  .subtitle{
  font-weight: 300;
  font-size: 40px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  text-align: center;
  margin: 10px 0;
  padding: 0;

  @media screen and (max-width: 600px) {
    font-size: 32px;
  }

  &::first-letter{
    text-transform: capitalize;

  }


  }
  img.main-img{
    width: 200px;
  }
}
.type {
  height: fit-content;
  padding: 3px 10px;
  color: white;
  border-radius: 20px;
  font-size: 14px;
  text-transform: capitalize;
  max-width: 100px;
  margin-right: 5px;
  position: initial;
}
.types ,.attributes,.abilities{
  display: flex;
  flex-wrap: wrap;
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