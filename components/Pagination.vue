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

    },
    computed:{
      total(){
        return Math.ceil(this.$store.state.pagination.count / this.items)
      },

    },
    data () {
      return {
        page: 1,
        items: 12
      }
    },
    methods: {
      changePage(page){
        let offset = (page-1) * this.items
        this.$emit("changePage",offset)
      },
      // next(page){
      //   this.$emit("next",page)
      // },
       previous(page){
        this.$emit("previous",page)
      }
    },
  }
</script>

<style lang="less">

</style>