<template lang="pug">
  div(id="features" class="page-section page-section--blue" data-matching-link="#features-link")
    div.wrapper
      h2(class="section-title" data-aos="zoom-out" data-aos-duration="1500")
        span(class="section-title__icon")
          i(class="fas fa-dolly-flatbed")
        | Our
        strong Services
      div.feature-grid
        div(class="feature-grid__column-1 generic-content-container")
          div(class="feature-item feature-grid__row-1" data-aos="zoom-out" data-aos-duration="1500")
            router-link(:to="{name: 'socialmedia'}")
              h3.feature-item__title
                span(class="section-title__icon")
                  i(class="fas fa-globe")
                  |  Social Media
              p We&rsquo;ll create and manage your social media profiles, generating engaging content, and reach a broader spectrum of clientele for your business.

          div(class="feature-item feature-grid__row-2" data-aos="zoom-out" data-aos-duration="1500")
            router-link(:to="{name: 'seo'}")
              h3.feature-item__title
                span(class="section-title__icon")
                  i(class="fas fa-search-plus")
                  |  SEO
              p Search Engine Optimization is the art of having your site reach the widest group of clients possible. Use our services, and we&rsquo;ll make sure you cast the widest net possible.

          div(class="feature-item feature-grid__row-3" data-aos="zoom-out" data-aos-duration="1500")
            router-link(:to="{name: 'photoAndVideo'}")
              h3.feature-item__title
                span(class="section-title__icon")
                  i(class="fas fa-file-alt")
                  |  Photo/Video Services
              p We live in a visual world.  Great product photography is essential to any business model including e-commerce stores, brick-and-mortars, restaurants, and service-based companies

        div(class="feature-grid__column-2 generic-content-container")
          div(class="feature-item feature-grid__row-1" data-aos="zoom-out" data-aos-duration="1500")
            router-link(:to="{name: 'webdesign'}")
              h3.feature-item__title
                span(class="section-title__icon icon")
                  i(class="fas fa-sitemap")
                  |  Web Design
              p Our team creates stunning, modern websites to propel your business forward. Fully-tailored custom sites to suit your eyes and budget.

          div(class="feature-item feature-grid__row-2" data-aos="zoom-out" data-aos-duration="1500")
            router-link(:to="{name: 'reputationManagement'}")
              h3.feature-item__title
                span(class="section-title__icon")
                  i(class="fas fa-reply-all")
                  |  Reputation Management
              p Your reputation is everything. We specialize in managing every aspect of your online persona. We engage with your customers directly, allowing us to maximize your brand awareness and keep the conversation flowing.

          div(class="feature-item feature-grid__row-3" data-aos="zoom-out" data-aos-duration="1500")
            router-link(:to="{name: 'contentAndGraphic'}")
              h3.feature-item__title
                span(class="section-title__icon")
                  i(class="fas fa-align-left")
                  |  Content Generation
              p Well-branded creative content defines your digital presence, shaping your business identity. Our completely customized content will be tailored to your client base.
</template>

<script>
  export default {
    name: 'Features'
  }
</script>

<style lang="scss">
  .feature-grid {
      display:block;

  @include atMedium {
      display: grid;

      &__column-1 {
        display:contents;
        grid-column-start: 1;
        grid-auto-rows: auto;
      }

      &__column-2 {
        display: contents;
        grid-column-start: 2;
        grid-auto-rows: auto;
      }

      &__row-1 {
        grid-row-start: 1;
      }

      &__row-2 {
        grid-row-start: 2;
      }

      &__row-3 {
        grid-row-start: 3;
      }
    }
  }

  .feature-item {

    a {
      text-decoration: none;
      color: inherit;
      width: 100%;
      height: 100%;
      display: block;
      align-self: center;
      padding: 20px;
    }

    a:hover {
      background-color: $mainWhite;
      color: $mainDarkGrey;
    }

    p {
      text-align: left;
    }


    &__icon {
      display: block;
      margin: 0 auto;

      @include atSmall {
        position: absolute;
        left: 0;
      }
    }

    &__title {
      font-size: 1.6rem;
      font-weight: 300;
      margin-bottom: .8rem;
      margin-top: .7em;
      text-align: center;

      @include atSmall {
        margin-top: 1em;
        font-size: 1.875rem;
        text-align: left;
      }
    }
  }


</style>
