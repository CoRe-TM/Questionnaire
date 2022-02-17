<template>
  <div>
    <div>Which Threat Discovery Methodology was used in the previous iteration?</div>
    <div @click="storeMethod('STRIDE')">
      <router-link to="/configuration">Security Cards</router-link>
    </div>
    <div @click="storeMethod('Security Cards')">
      <router-link to="/configuration">Any Other</router-link>
    </div>
    <div @click="storeMethod('Attack Trees')">
      <router-link to="/configuration">STRIDE</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'assetobjectdefined',
  data: () => ({
  }),
  methods: {
    storeMethod (method) {
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
