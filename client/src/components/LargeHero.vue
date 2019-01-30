<template lang="pug">
    div.large-hero
        div.wrapper
          div.large-hero__text-content
            h1.large-hero__title Zendo
              span.large-hero__title--lighter-font Digital
            p.large-hero__subtitle
              |  Your business deserves your attention,
              |  so let our team of experts do the heavy lifting.
              |  We specialize in custom digital marketing solutions for the busy owner.
            p.large-hero__cta-btn
              a(class="btn btn--large" href="/contact") Contact Us
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
  height: 350px;
  width: 100%;
  align-items: flex-end;
  justify-content: center;



  &__text-content {
    color: #000;


    @include atMedium {
      padding-top: 60px;
    }
    
  }

  &__title {
    font-weight: 300;
    font-size: 4rem;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    color: $mainDarkerGrey;

    &--lighter-font {
      font-family: SweetSans-Light;
    }

    @include atSmall {
      font-size: 4rem;
    }
  }
}
</style>
