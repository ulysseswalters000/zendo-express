<template lang="pug">
  div
    div.image
      h1(class="headline--centered headline--lightest-color")
        | Let us help your business reach
      p(class="headline--centered headline--lightest-color")
        strong greater heights.
</template>
<script>
  export default {
    name: 'GreaterHeights'
  }
</script>

<style scoped lang="scss">
.image {
  width:100%;
  height: 60rem;
  background-image: url("../assets/images/Greater-Heights.png");
  background-size: cover;
  background-position: center;
  background-repeat: none;

  & h1 {
      padding-top: 12rem;

    @include atMedium {
      padding-top: 18rem;
    }
  }
  & h1, p {
    font-family: SweetSans-Light;
    font-weight: 300;
    font-size: 3rem;
    margin: 0 auto;
    color: $mainDarkColor;
  }
}




</style>
