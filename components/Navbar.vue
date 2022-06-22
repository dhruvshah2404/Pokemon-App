<template>
  <div class="navbar">
    <h1 class="title">Pokemon App</h1>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.navbar{
  text-align: center;
  text-transform: capitalize;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  position: fixed;
  width: 100%;
  backdrop-filter: blur(20px);
  box-shadow: 0px 0px 4px -2px #35495e;
}

.title{
   font-weight: 300;
  font-size: 45px;
  padding: 10px 0;
  color: #35495e;
  letter-spacing: 1px;
}

</style>