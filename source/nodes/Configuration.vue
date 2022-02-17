<template>
  <div>
    <div>Thanks!</div>
    <div v-if="assetMethod">We suggest to use {{ assetMethod }} to model assets and use {{discoveryMethod}} to discover threats</div>
    <div v-else>We suggest to use {{ discoveryMethod }} to discover threats</div>
  </div>
</template>

<script>
export default {
  name: 'assetobjectdefined',
  data: () => ({
    assetMethod: '..',
    discoveryMethod: '..',
  }),
  mounted: function () {
    setTimeout(() => {
      this.assetMethod = dizmo.publicStorage.getProperty('assetmethod'),
      this.discoveryMethod = dizmo.publicStorage.getProperty('discoverymethod')
    }, 500)

    dizmo.publicStorage.subscribeToProperty('assetmethod', (_, val) => {
      this.assetMethod = val
    })
    dizmo.publicStorage.subscribeToProperty('discoverymethod', (_, val) => {
      this.discoveryMethod = val
    })
  }
}
</script>

<style lang="scss" scoped>
.i {
  font-style: italic;
}
</style>
