<template>
  <div>
    <div>This guide will help you <span class="i">(i)</span>find the right methodology for your audience and <span class="i">(ii)</span> configure the modeling editor.</div>
    <div>What is the goal of this workshop?</div>
    <div>
      <router-link to="/assetdefined">Creating a New Model</router-link>
      This option is best if you have never created a threat model
    </div>
    <div>
      <router-link to="/background">Update an Existing Model</router-link>
      This option is best if you want to revisit an model created with CoReTM or if you have an existing model that you want to integrate into this applciation.
    </div>
    <div>
      <router-link to="/previousmethodology">Diversify an Existing Model</router-link>
      Use this option when you are setting up an additional team or when you want to find additional threats with a new methodology
    </div>
  </div>
</template>

<script>
export default {
  name: 'Entry',
  data: () => ({
  })
}
</script>

<style lang="scss" scoped>
.i {
  font-style: italic;
}
</style>
