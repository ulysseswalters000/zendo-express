<template lang="pug">
    div.large-hero
        div.wrapper
          div.large-hero__text-content
            h1.large-hero__title Marketing Solutions for Peace of Mind
              p
                a(class="btn btn--large" href="#contact-form") Contact Us
</template>

<script>
export default {
  name: 'LargeHero',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.large-hero {
  display: flex;
  height: 600px;
  width: 100%;
  padding-top: 60px;
  align-items: flex-end;
  justify-content: center;
//
//
//
//   &__text-content {
//     color: $mainWhite;
//
//
//     @include atMedium {
//       padding-top: 60px;
//     }
//   }
//
//   &__title {
//     font-weight: 300;
//     font-size: 2.4rem;
//     margin: 0;
//
//     @include atSmall {
//       font-size: 4rem;
//     }
//   }
}
</style>
