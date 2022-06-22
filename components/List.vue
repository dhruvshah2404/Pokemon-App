<template>
  <div class="list-container">
    <div class="input">
      <input
        type="text"
        class="search-input"
        placeholder="Search ..."
        v-on:keyup="search"
        v-model="text"
      />
      <div class="results">
         
        <ul class="list" v-for="poke in filtered" :key="poke.id">
          <li @click="openPokemon(poke.url)">{{ poke.name }}</li>
        </ul>
      </div>
    </div>
    <div class="pokemons-list">
        <v-progress-circular
          v-if="loading"
            indeterminate
            color="primary"
          ></v-progress-circular>
           <div
           v-else
      class="pokecard"
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      @click="openPokemon(pokemon.url)"
    >
      <div class="poke-img">
        <img :src="pokemon.image" alt="" />
      </div>
      <div class="name">{{ pokemon.name }}</div>
      <div
        :class="po.type.name + ' ' + 'type'"
        v-for="po in pokemon.type"
        :key="po.id"
      >
        {{ po.type.name }}
      </div>
    </div>
    </div>
   
    <pagination @next="next" @changePage="changePage" />
  </div>
</template>

<script>
import Pagination from './Pagination.vue'
export default {
  name: 'List',
  components: { Pagination },
  data() {
    return {
      filtered: [],
      loading: false,
      pokemons: [],
      text: '',
      loading: true,
      // active:false
    }
  },
  computed: {
    searched(filtered) {
      if (!this.text) {
        return this.pokemons
      } else {
        return this.filtered
      }
    },
  },
  methods: {
    async changePage(offset) {
      this.loading = true

      let link = `https://pokeapi.co/api/v2/pokemon?limit=12&&offset=${offset}`
      let response = await this.$axios.$get(link)

      this.pokemons = response.results
      this.$store.commit('setPokemon', response)

      this.giveImage(this.pokemons)

      setTimeout(() => {
              this.loading = false

      }, 2000);
    },
    async next() {
      this.loading = true

      let nextLink = this.$store.state.pagination.next
      let response = await this.$axios.$get(nextLink)

      this.pokemons = response.results
      this.$store.commit('setPokemon', response)

      this.giveImage(this.pokemons)
      this.loading = false
    },
    async previous() {
      this.loading = true

      let nextLink = this.$store.state.pagination.previous
      let response = await this.$axios.$get(nextLink)

      this.pokemons = response.results
      this.$store.commit('setPokemon', response)

      this.giveImage(this.pokemons)
      this.loading = false
    },
    openPokemon(url) {
      var last = url.split('/')
      var id = last[6]
      this.$router.push({ name: 'about', query: { id } })
    },
    search() {
      if (this.text.length > 1) {
        let newarray = this.$store.state.pokemons.filter((pokemon) =>
          pokemon.name.includes(this.text.toLowerCase())
        )
        this.filtered = newarray.slice(0, 5)

        return
      } else {
        this.filtered = []
      }
    },
    giveImage(array) {
      array.forEach((elem) => {
        this.$axios.$get(elem.url).then((response) => {
          this.$set(
            elem,
            'image',
            response.sprites.other['official-artwork'].front_default
          )
          this.$set(elem, 'type', response.types)
        })
      })
    },
  },
  async mounted() {
    this.loading = true
    let link = 'https://pokeapi.co/api/v2/pokemon?limit=12'
    let response = await this.$axios.$get(link)
    this.pokemons = response.results
    this.giveImage(this.pokemons)
    setTimeout(() => {
              this.loading = false

      }, 2000);
  },
}
</script>

<style lang='less'>
.container {
}
.pokemons-list {
  // max-width: 500px;
  max-width: 850px;
  min-height: calc(100vh - 252px);
  margin: 0 auto;
  align-items: center;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  // padding-top: 100px;
}
.input {
  width: 100%;
  .search-input {
    margin-top: 20px;
    width: 310px;
    height: 47px;
    border-radius: 30px;
    padding: 0 20px;
    font-size: 18px;
    outline: none;
    border: 2px solid #e2e2e2;
    transition: all 0.25s ease-in-out;

    &:focus {
      border: 2px solid #1976d2;
    }
  }

  .results {
    width: 300px;
    margin: 5px auto;
    box-shadow: 0px 0px 20px -10px #848484;
    border-radius: 15px;

    .list {
      list-style: none;
      padding: 0;
      text-align: left;
    }
    li {
      padding: 10px 20px;
      cursor: pointer;

      &:hover {
        background: aliceblue;
      }
    }
  }
}

.name {
  text-transform: capitalize;
  font-size: 22px;
  width: 100%;
  display: flex;
  justify-content: center;
  /* background: #FF9800; */
  align-items: self-start;
  font-weight: 500;
  color: #35495e;
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
}
.poke-img {
  width: 200px;
  margin: auto;
}
img {
  width: 200px;
}
.pokecard {
  margin: 20px 0;
  height: 300px;
  width: 230px;
  cursor: pointer;
  /* border: 1px solid lightgrey; */
  border-radius: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 0px 0px 20px 0px lightgrey;
}

.normal {
  background: darkgray;
  color: white;
}
.grass {
  background: #87bfc4;
  color: black;
}
.fighting {
  background: #d56723;
}
.flying {
  background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
}
.poison {
  background: #b97fc9;
}
.ground {
  background: #a38c21;
}
.rock {
  background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
}
.bug {
  background: #82a751;
}
.ghost {
  background: #7b62a3;
}
.steel {
  background: #d9e2e5;
}
.fire {
  background: #e27139;
}
.water {
  background: #6d88b0;
}
.electic {
  background: #f1d177;
}
.psychic {
  background-color: #ff6dc2;
}
.ice {
  background: #dbeefb;
}
.dragon {
  background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
}
.dark {
  background: #707070;
}
.unknown {
  background: rgb(90, 67, 205);
}
.fairy {
  background-color: #fdb9e9;
}
.shadow {
  background: rgb(186, 186, 186);
}
</style>
