<template>
  <div>
    <div>Thanks!</div>
<br>
    <div v-if="assetMethod">
 We suggest to use <i>{{ assetMethod }}</i> to model assets and use <i>{{discoveryMethod}}</i> to discover threats.
<br>
      <div class="action-btns">
        <button>Configure Editor</button>
        <button v-if="assetMethod != 'None'">{{ assetMethod }} Guide</button>
        <button>{{ discoveryMethod }} Guide</button>
      </div>
    </div>
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
.action-btns {
  display: flex;
  flex-direction: column;
}

button {
  margin-top: 5px;
  background: #7B886B;
  color: white;
  text-transform: uppercase;
}
</style>
