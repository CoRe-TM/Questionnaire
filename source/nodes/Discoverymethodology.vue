<template>
  <div>
    <div>Which Threat Discovery Methodology is Best Understood by the Participants?</div>
    <div @click="storeMethodology('STRIDE')">
      <router-link to="/configuration">STRIDE</router-link>
    </div>
    <div @click="storeMethodology('Security Cards')">
      <router-link to="/configuration">Security Cards</router-link>
    </div>
    <div @click="storeMethodology('Attack Trees')">
      <router-link to="/configuration">Attack Trees</router-link>
    </div>
    <div @click="storeMethodology('STRIDE')">
      <router-link to="/configuration">None of the above</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'assetobjectdefined',
  data: () => ({
  }),
  methods: {
    storeMethodology (method) {
      dizmo.publicStorage.setProperty('discoverymethod', method)
    }
  }
}
</script>

<style lang="scss" scoped>
.i {
  font-style: italic;
}
</style>
