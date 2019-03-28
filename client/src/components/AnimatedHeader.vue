<template lang="pug">
  div.video
    video(muted autoplay loop src="../assets/videos/Spring_new1.mp4")
    h1
      | Custom Digital Marketing Solutions for
      br
      | Peace of Mind

</template>

<script>
  export default {
    name: 'AnimatedHeader'
  }
</script>

<style lang="scss">
  .video {
    position: relative;

    video {
      position: relative;
      width: 100%;
      height: 100%;
      margin-top: -50px;
    }

    & h1 {
      position: absolute;
      top: 90%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: SweetSans-Thin;
      font-size: .9rem;
      color: $mainWhite;
      width: 100%;

      @include atSmall {
        font-size: 1rem;
      }

      @include atMedium {
        font-size: 1.75rem;
        padding-bottom: 10px;
      }

      @include atLarge {
        font-size: 2.35rem;
        padding-bottom: 15px;
      }
    }
  }
</style>
