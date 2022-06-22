<template>
  <div class="container">
      <List />
  </div>
</template>

<script>
import List from '../components/List'
import Pagination from '../components/Pagination.vue'
export default {
  components: { Pagination },
  created() {
    this.$store.dispatch('getall')
  },
}
</script>

<style lang="less">

.container {
  margin: 0 auto;
  align-items: center;
  text-align: center;
  padding-top: 100px;
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
