<template>
  <div>
    <div>This guide will help you <span class="i">(i)</span> find the right methodology for your audience and <span class="i">(ii)</span> configure the modeling editor.</div>
<br>
    <div>What is the goal of this workshop?</div>
<br>
    <div @click="storeGoal('create')">
      <router-link to="/assetdefined">Creating a New Model</router-link>
<br>
      This option is best if you have never created a threat model
    </div>
<br>
    <div @click="storeGoal('update'); storeAssetMethodology('None')">
      <router-link to="/background">Update an Existing Model</router-link>
<br>
      This option is best if you want to revisit an model created with CoReTM or if you have an existing model that you want to integrate into this applciation.
    </div>
<br>
    <div @click="storeGoal('diversify'); storeAssetMethodology('None')">
      <router-link to="/previousmethodology">Diversify an Existing Model</router-link>
<br>
      Use this option when you are setting up an additional team or when you want to find additional threats with a new methodology
    </div>
  </div>
</template>

<script>
export default {
  name: 'Entry',
  data: () => ({
  }),
  methods: {
    storeGoal: function (goal) {
      console.log('store goal ', goal)
      dizmo.publicStorage.setProperty('goal', goal)
    },
    storeAssetMethodology: function (method) {
      console.log('store asset ', method)
      dizmo.publicStorage.setProperty('assetmethod', method)
    }
  }
}
</script>

<style lang="scss" scoped>
.i {
  font-style: italic;
}
</style>
