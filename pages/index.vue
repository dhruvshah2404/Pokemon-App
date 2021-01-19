<template>
  <div class="container">
    <div>
      <h1 class="title">
        Pokemon App
      </h1>
      <h3>wait 2 minutes before searching I'm still working on how to load data fast</h3>
      <List />
    </div>
  </div>
</template>

<script>
import List from '../components/List'
export default {
  mounted() {
    this.$store.dispatch('getall');
  },
}
</script>

<style>
.container {
  margin: 0 auto;
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
