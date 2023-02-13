<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="total"
      :total-visible="7"
      circle
      @input="changePage"
      @previous="previous"
    ></v-pagination>
  </div>
</template>

<script>
  export default {
    name:"pagination",
    props:{
      currentPage: Number
    },
    computed:{
      total(){
        return Math.ceil(this.$store.state.pagination.count / this.items)
      },
      items(){
        return this.$store.state.limit
      }
    },
    data () {
      return {
        page: 1,
      }
    },
    methods: {
      changePage(page){
        let offset = (page-1) * this.items
        this.$emit("changePage",{ offset : offset, page : page })
      },
      // next(page){
      //   this.$emit("next",page)
      // },
       previous(page){
        this.$emit("previous",page)
      }
    },
    mounted() {
      this.page = parseInt(this.$route.query.page);

    },
  }
</script>

<style lang="less">
.text-center{
  margin: 20px 0;
}
.theme--light.v-pagination .v-pagination__item--active{
  background: mediumpurple;
}

</style>