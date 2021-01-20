<template>
  <div class="container">
    <div>
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
  font-size: 45px;
  margin: 10px 0;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 40px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  text-align: center;
  text-transform: capitalize;
  margin: 10px 0;
  padding: 0;
}

.links {
  padding-top: 15px;
}
</style>
