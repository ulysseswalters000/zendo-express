<template lang="pug">
  div(id="cta" class="page-section" data-matching-link="#about-us-link")
    div.wrapper
      div(class="cta cta__grid")

        //- column 1
        div.cta__grid-column-1
          div.cta__grid--img
            img(src="../assets/images/zendo_logo_small.png")

        //- column 2
        div.cta__grid-column-2
          div.cta__grid--right-column
            div.services
              h3 Services:
              ul.cta__grid--inner-grid
                li(class="item-a col-1 row-1")
                  router-link(to="/webdesign/#feature") Web Design
                li(class="item-b col-2 row-1")
                  router-link(:to="{name: 'socialmedia'}") Social Media
                li(class="item-c col-1 row-2")
                  router-link(:to="{name: 'seo'}") SEO (Search Engine Optimization)
                li(class="item-d col-2 row-2")
                  router-link(:to="{name: 'photoAndVideo'}") Photography &amp; Videography
                li(class="item-e col-1 row-3")
                  router-link(:to="{name: 'reputationManagement'}") Reputation Management
                li(class="item-f col-2 row-3")
                  router-link(:to="{name: 'contentAndGraphic'}") Content &amp; Graphic Creation
      p.cta__end-p
        | A strong digital presence is essential for keeping your brand prominent and relevant.
        | Let Zendo Digital help propel your business to the top with our expertise and knowledge.
</template>

<script>
  export default {
    name: 'CallToAction'
  }
</script>

<style lang="scss">
.cta {
    display: block;

    &__end-p {
      color: $mainDarkerGrey;
      font-size: 1.6rem;
      margin: 80px 0 0 0;
    }

    &__grid {
        text-align: center;
        font-size: 1.3rem;

        &--img {
          text-align: center;
          align-items: center;
          height: 90%;
        }

        &--inner-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: auto;
            grid-gap: 1rem;

            @include atMedium {
              grid-template-columns: repeat(2, 1fr);
            }

            .span-col-row-3 {
                grid-column: 1 / span 2;
            }
        }

        ul {
          padding: 0;
          margin: 0;
          color: $mainWhite;

          li {
              width: 100%;
              height: 100%;
              list-style: none;

              a {
                  background-color: $mainDarkerColor;
                  display: flex;
                  width: 100%;
                  height: 100%;
                  text-decoration: none;
                  padding: 15px 10px;
                  color: $mainWhite;
                  justify-content: center;
                  align-items: center;


                  &:hover {
                      color: $mainWhite;
                      background-color: $mainLighterDarkColor;
                  }
              }
          }
        }
    }

    @include atMedium {

        &__grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            margin-top: 30px;
            grid-auto-rows: 1fr;

            &-column-1 {
                grid-column-start: 1;
                padding: 0 32px;
            }

            &-column-2 {
                grid-column-start: 2;

                h2 {
                    text-align: center;
                }
            }

            &--img {
                grid-column-start: 1;
            }

            &--right-column{
                color: #000;
                font-size: 1.2rem;

                .services {
                    text-align: center;

                    h3 {
                        color: $mainDarkerGrey;
                    }

                    ul {
                        padding: 0;
                        margin: 0;

                        li {
                            width: 100%;
                            height: 100%;
                            list-style: none;

                            a {
                                display: flex;
                                width: 100%;
                                height: 100%;
                                text-decoration: none;
                                padding: 15px 0;
                                color: $mainWhite;
                                align-items: center;
                                justify-content: center;

                                &:hover {
                                    background-color: $mainLighterDarkColor;
                                }
                            }
                        }
                    }
                }
            }

            &--inner-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: auto;

                .col-1 {
                    grid-column: 1;
                }

                .row-1 {
                    grid-row: 1;
                }

                .col-2 {
                    grid-column: 2;
                }

                .row-2 {
                    grid-row: 2;
                }

                .span-col-row-3 {
                    grid-column: 1 / span 2;
                }
            }
        }
    }
}

</style>
