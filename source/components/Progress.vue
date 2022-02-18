<template>
    <div class="wrapper">
      <div class="item" :class="{ undone: !step1 }">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path fill="white" d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z"/></svg>
          </span>
        <div class="label">Goal<br>Definition</div>
      </div>
      <div class="glue" :class="{ undone: !step2 }"></div>
      <div class="item" :class="{ undone: !step2 }">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="white"><rect fill="none" height="24" width="24"/><path fill="white" d="M18,20V8.35L13.65,4h-2.83L16,9.18V20H18z M22,20V6.69L19.31,4h-2.83L20,7.52V20H22z M8,4l-6,6v10h5v-5h2v5h5V10L8,4z M9,13 H7v-2h2V13z"/></svg>
          </span>
        <div class="label">Asset<br>Elicitation</div>
      </div>
      <div class="glue" :class="{ undone: !step3 }"></div>
      <div class="item" :class="{ undone: !step3 }">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="white" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          </span>
        <div class="label">Threat<br>Discovery</div>
      </div>
      <!--div class="glue" :class="{ undone: !step4 }"></div>
      <div class="item" :class="{ undone: !step4 }">
        <span><img src="assets/done.svg"></span>
        <div class="label">Done</div>
      </div-->
    </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    step1: false,
    step2: false,
    step3: false
  }),
  mounted: function () {
    dizmo.publicStorage.subscribeToProperty('goal', (_, val) => {
      this.step1 = !!val
    })
    dizmo.publicStorage.subscribeToProperty('assetmethod', (_, val) => {
      this.step2 = !!val
    })
    dizmo.publicStorage.subscribeToProperty('discoverymethod', (_, val) => {
      this.step3 = !!val
      // this.step4 = !!val
    })
  }
};
</script>

<style lang="scss" scoped>
.item {
  height: 3em;
  width: 3em;
  border-radius: 50%;
  background-color: #7B886B;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 0.2em #7B886B;
  flex-grow: 0;
  flex-shrink: 0;
}
.glue {
  height: 0.5em;
  width: 10em;
  border-bottom: 0.1em solid #7B886B;
  border-top: 0.1em solid #7B886B;
  background: #7B886B;
  flex-grow: 1;
}
.item.undone {
  background:  #2a2a2a;
}
.glue.undone {
  background: none;
}
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3em;
  padding: 3em;
  padding: 0 1rem;
}
.label {
  text-align: center;
  position: absolute;
  top: 5em;
  color: white;
}
</style>
