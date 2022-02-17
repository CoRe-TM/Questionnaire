<template>
  <div id="front">
    <router-link to="/entry">Entry</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
  }),
  mounted: function () {
    window.coretmconf = {}
  }
}
</script>

<style lang="scss" scoped>
h1 {
    text-align: center;
}
</style>
