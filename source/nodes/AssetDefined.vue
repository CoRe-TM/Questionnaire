<template>
  <div>
    <div>Do you already hold a definition of the assets you wish to model? For example, if you want to model threats for a business process, is that process well-defined?</div>
    <div>
      <router-link to="/assetmethodology">No</router-link>
    </div>
    <div>
      <router-link to="/background">Yes</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'assetobjectdefined',
  data: () => ({
  })
}
</script>

<style lang="scss" scoped>
.i {
  font-style: italic;
}
</style>
