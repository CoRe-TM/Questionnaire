<template>
  <div>
    <div>Which of the following methodologies is already known by the participants?</div>
    <div @click="storeAssetMethodology('PASTA')">
      <router-link to="/background">PASTA</router-link>
    </div>
    <div @click="storeAssetMethodology('hTMM')">
      <router-link to="/background">hTMM</router-link>
    </div>
    <div @click="storeAssetMethodology('OCTAVE')">
      <router-link to="/background">OCTAVE</router-link>
    </div>
    <div @click="storeAssetMethodology('LINDDUN')">
      <router-link to="/background">LINDDUN</router-link>
    </div>
    <div @click="storeAssetMethodology('PASTA')">
      <router-link to="/background">None of the above</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'assetobjectdefined',
  data: () => ({
  }),
  methods: {
    storeAssetMethodology (methodology) {
      dizmo.publicStorage.setProperty('assetmethod', methodology)
    }
  }
}
</script>

<style lang="scss" scoped>
.i {
  font-style: italic;
}
</style>
