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
    }

    & h1 {
      position: absolute;
      top: 87%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: SweetSans-Thin;
      font-size: .7rem;
      color: $mainWhite;
      width: 100%;

      @include atSmall {
        top: 88%;
        font-size: 1rem;
      }

      @include atMedium {
        top: 89%;
        font-size: 1.75rem;
        padding-bottom: 10px;
      }

      @include atLarge {
        top: 90%;
        font-size: 2.35rem;
        padding-bottom: 15px;
      }
    }
  }
</style>
