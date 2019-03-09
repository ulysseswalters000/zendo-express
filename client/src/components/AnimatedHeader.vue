<template lang="pug">
  div.video
    video(muted autoplay loop src="../assets/videos/snowy_day.mp4")
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
      max-height: 100%;
      margin-top: 50px;
    }

    & h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.75rem;
      font-family: SweetSans-Thin;
      color: #000;
      text-shadow: -1px 0 white, 0 1px white, 1px 0  white, 0 -1px white;

      @include atSmall {
        color: $mainDarkerGrey;
      }

      @include atMedium {
        font-size: 2.75rem;
      }

      @include atLarge {
        font-size: 3.75rem;
      }
    }
  }
</style>
