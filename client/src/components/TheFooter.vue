<template lang="pug">
  footer.site-footer
    div.wrapper
      p
        span.site-footer__text Copyright &copy; 2018 Zendo Digital. All rights reserved.
        a(class="btn btn--mainDarkColor" href="/contact") Get in Touch
</template>

<script>
  export default {
    name: 'TheFooter'
  }
</script>

<style lang="scss">
  .site-footer {
    background-color: $mainBlueGrey;
    color: #FFF;
    padding: 1rem .5rem;
    text-align: center;
    position: absolute;
    width: 100%;
    border-top: 1px solid black;

    &__text {
      display: block;
      margin-bottom: 1rem;
      font-weight: 200;

      @include atMedium {
        display: inline;
        margin-bottom: 0;
        margin-right: 1.4rem;
      }
    }
  }
</style>
