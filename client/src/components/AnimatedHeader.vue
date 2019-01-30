<template lang="pug">
  div.video
    video(muted autoplay loop src="../assets/videos/SnowDay_SnowCoveredTrees.mp4")
</template>

<script>
  export default {
    name: 'AnimatedHeader'
  }
</script>

<style lang="scss">
  .video {
    video {
      width: 100%;
      margin-top: 50px;
    }
  }
</style>
