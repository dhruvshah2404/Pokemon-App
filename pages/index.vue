<template>
  <div class="container">
    <div>
      <h1 class="title">
        Pokemon App
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    let link = 'https://pokeapi.co/api/v2/pokemon'
    await this.$axios.$get(link)
    .then((resp) => {})
      .then((data) => {
        console.log(data);
      })
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 55px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
