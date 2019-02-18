<template lang="pug">
  div
    div.image
      h2(class="headline--centered headline--lightest-color")
        | Let us help your business reach
        strong greater heights.
</template>
<script>
  export default {
    name: 'GreaterHeights'
  }
</script>

<style scoped lang="scss">
div {
  text-align: center;
}
.image {
  width:100%;
  height: 60rem;
  background-image: url("../assets/images/Greater-Heights.png");
  background-size: cover;
  background-position: center;
  background-repeat: none;

  & h2 {
    font-family: SweetSans-Light;
    font-weight: 300;
    font-size: 3rem;
    margin: 0 auto;
    padding-top: 4rem;
    color: $mainDarkColor;

    & strong {
      padding-left: 1rem;
    }
  }
}




</style>
