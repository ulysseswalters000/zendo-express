<template lang="pug">
  div.video
    video(muted autoplay loop src="../assets/videos/Spring_1080.mp4")
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
      margin-top: 70px;

      @include atSmall {
        margin-top: -5px;
      }

      @include atLarge {
        margin-top: -105px;
      }
    }

    & h1 {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: SweetSans-Thin;
      color: $mainWhite;
      width: 100%;
      display: none;

      @include atSmall {
        top: 88%;
        font-size: 1rem;
        display: block;
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
