<template lang="pug">
    div.large-hero
        div.wrapper
          h1.large-hero__title Zendo
            span.large-hero__title--lighter-font Digital
          p.large-hero__subtitle
            |  Your business deserves your attention,
            |  so let our team of experts do the heavy lifting.
            |  We specialize in custom digital marketing solutions for the busy owner.
          p.large-hero__cta-btn
            router-link(class="btn btn--large" :to="{name: 'contact'}") Contact Us
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
  width: 100%;
  text-align: center;

  @include atMedium {
    padding-top: 60px;

  }


  &__title {
    font-weight: 300;
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    color: $mainDarkerGrey;

    &--lighter-font {
      font-family: SweetSans-Thin;
    }

    @include atSmall {
      font-size: 4rem;
    }
  }

  &__subtitle {
    font-size: 1rem;

    @include atSmall {
      font-size: 1.2rem;
    }

  }
}
</style>
