<template>
  <div>
    <div>Which Technical Domain describes the Assets?</div>
    <div @click="storeDiscoveryMethodology('ATT&CK')">
      <router-link to="/configuration">Network Security</router-link>
    </div>
    <div @click="storeDiscoveryMethodology('OWASP')">
      <router-link to="/configuration">Web Application Security</router-link>
    </div>
    <div @click="storeDiscoveryMethodology('CAPEC')">
      <router-link to="/configuration">Application Security</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'assetobjectdefined',
  data: () => ({
  }),
  methods: {
    storeDiscoveryMethodology (method) {
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
