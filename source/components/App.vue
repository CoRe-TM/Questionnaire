<template>
  <div id="front">
    <stepper></stepper>
    <!--router-link to="/entry">Entry</router-link-->
    <router-view class="main"></router-view>
  </div>
</template>

<script>
import Progress from './Progress.vue'
export default {
  name: 'App',
  data: () => ({
  }),
  mounted: function () {
  },
  components: {
    stepper: Progress
  }
}
</script>

<style lang="scss" scoped>
#front {
  padding: 1rem;
}
h1 {
    text-align: center;
}

* {
  color: white;
}

.main {
  margin-top: 6rem;
  height: calc(100% - 10rem);
  overflow: auto;
  scrollbar-color: #a6a6a6 rgba(0,0,0,0);
}
a {
  color: inherit;
}
a:before {
  content: '\u2192 '
}
</style>
