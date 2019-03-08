<template lang="pug">
  div#FeaturesPages
    Navigation
    div.container
      h1.title Web Design
    div
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni laboriosam iusto alias quisquam quibusdam quasi recusandae repellendus perspiciatis minima reiciendis.
    TheFooter
    router-view
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'FeaturePages',
  components: {
    Navigation,
    TheFooter
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 70px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  background: url('../assets/images/webdesignheader.jpg');
  background-position: center;
  background-size: cover;

  @include atMedium {
    padding-top: 100px;
  }
}
</style>
