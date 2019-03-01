<template lang="pug">
  div
    div.image
      h1(class="headline--centered headline--lightest-color")
        | Let us help your business reach
        br
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
    padding-top: 10rem;
    font-family: SweetSans-Light;
    font-weight: 300;
    font-size: 3rem;
    margin: 0 auto;
    color: $mainDarkColor;

    @include atMedium {
      padding-top: 15rem;
    }
  }
}




</style>
