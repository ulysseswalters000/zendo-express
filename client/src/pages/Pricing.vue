<template lang="pug">
  div#pricing
    Navigation
    div(class="heading" :style="backgroundImg")
      h1 Digital Marketing Made Easy
      button(@click="contactNav") Contact Us
    div#mobile
      nav.nav-element
        ul
          li
            a(href="#" @click="showIntermediate") Intermediate
          li
            a(href="#" @click="showAdvanced") Advanced
          li
            a(href="#" @click="showExpert") Expert
        div.content
          h2 {{ plan.title.desc }}
          p  {{ plan.title.tagLine }}
          p.price_desc Start for
          h2.price {{ plan.price }}
          p.price_desc /month and up
          router-link(class="cta-button" :to="{ name: 'contact'}") Contact Us
          div.line
          h3 Included
          div.line
          div(class="flex" v-for="feature in plan.features")
            p.half-width {{ feature.name }}
            p(v-if="feature.desc == true" class="half-width padding-left")
              i.fas.fa-check
            p(v-else-if="feature.desc == false" class="half-width padding-left")
              i.fas.fa-times
            p(v-else="feature.desc" class="half-width padding-left") {{ feature.desc }}
          div.line.marg-bot
    div#larger-screen
      h2.brand-first-word Zendo
        span.brand-second-word Digital
      div.full-width-line
      div.l-flex
        div.col-smaller
          h4 Plans
        div.col
          div.content-marg
            h2 {{ this.Data.beginnerPlan.title.desc }}
            p {{ this.Data.beginnerPlan.title.tagLine }}
        div.col
          div.content-marg
            h2 {{ this.Data.intermediatePlan.title.desc }}
            p {{ this.Data.intermediatePlan.title.tagLine }}
        div.col
          div.content-marg
            h2 {{ this.Data.advancedPlan.title.desc }}
            p {{ this.Data.advancedPlan.title.tagLine }}
        div.col
          div.content-marg
            h2 {{ this.Data.expertPlan.title.desc }}
            p {{ this.Data.expertPlan.title.tagLine }}
      div.l-flex
        div.col-smaller
          h4 Pricing
        div.col.padding-top.padding-bottom
          div.content-marg
            p.no-marg Start for
            h1.no-marg.larger-text {{ this.Data.beginnerPlan.price }}
            p.no-marg /month and up
        div.col.padding-top.padding-bottom
          div.content-marg
            p.no-marg Start for
            h1.no-marg.larger-text {{ this.Data.intermediatePlan.price }}
            p.no-marg /month and up
        div.col.padding-top.padding-bottom
          div.content-marg
            p.no-marg Start for
            h1.no-marg.larger-text {{ this.Data.advancedPlan.price }}
            p.no-marg /month and up
        div.col.padding-top.padding-bottom
          div.content-marg
            p.no-marg Start for
            h1.no-marg.larger-text {{ this.Data.expertPlan.price }}
            p.no-marg /month and up
      div.full-width-line
      div.l-flex
        div.col-smaller
          h4 Included
        div.col
          div.content-marg
            h3 {{ this.Data.beginnerPlan.title.desc }}
        div.col
          div.content-marg
            h3 {{ this.Data.intermediatePlan.title.desc }}
        div.col
          div.content-marg
            h3 {{ this.Data.advancedPlan.title.desc }}
        div.col
          div.content-marg
            h3 {{ this.Data.expertPlan.title.desc }}
      div.full-width-line
      div.l-flex
        div.col-smaller
          p(v-for="feature in Data.beginnerPlan.features") {{ feature.name }}
        div.col
          div.content-marg
            div(v-for="feature in this.Data.beginnerPlan.features")
              p(v-if="feature.desc === false")
                i.fas.fa-times
              p(v-else-if="feature.desc === true")
                i.fas.fa-check
              p(v-else) {{feature.desc}}
        div.col
          div.content-marg
            div(v-for="feature in this.Data.intermediatePlan.features")
              p(v-if="feature.desc === false")
                i.fas.fa-times
              p(v-else-if="feature.desc === true")
                i.fas.fa-check
              p(v-else) {{feature.desc}}
        div.col
          div.content-marg
            div(v-for="feature in this.Data.advancedPlan.features")
              p(v-if="feature.desc === false")
                i.fas.fa-times
              p(v-else-if="feature.desc === true")
                i.fas.fa-check
              p(v-else) {{feature.desc}}
        div.col
          div.content-marg
            div(v-for="feature in this.Data.expertPlan.features")
              p(v-if="feature.desc === false")
                i.fas.fa-times
              p(v-else-if="feature.desc === true")
                i.fas.fa-check
              p(v-else) {{feature.desc}}
      div.full-width-line.marg-bot
    TheFooter
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import TheFooter from '@/components/TheFooter.vue'
  export default {
    name: 'Pricing',
    components: {
      Navigation,
      TheFooter
    },
    props: ['Data', 'imgUrl'],
    data () {
      return {
        plan: this.Data.beginnerPlan,
        displayCheckMark: false
      }
    },
    methods: {
      showIntermediate() {
          this.plan = this.Data.intermediatePlan
      },
      showAdvanced() {
          this.plan = this.Data.advancedPlan
      },
      showExpert() {
          this.plan = this.Data.expertPlan
      },
      contactNav() {
        this.$router.push({name: `contact`});
      }
    },
    computed: {
      backgroundImg() {
        return `background-image: url(${this.imgUrl})`
      }
    }
  }
</script>

<style lang="scss">
#larger-screen {
  display: none;


  @include atMedium {
    display: block;
    margin-left: 1rem;
  }
  .brand-first-word {
    margin-top: 120px;
    font-family: Sweetsans-Medium;
    text-transform: uppercase;
  }
  .brand-second-word {
    font-family: SweetSans-Thin;
    text-transform: uppercase;
  }
  .marg-bot {
    margin-bottom: 3rem;
  }
  .full-width-line {
    border: 1px black solid;
    margin-right: 1rem;
  }

  .margin-top {
    margin-top: 2rem;
  }

  .col:nth-child(odd) {
    background-color: #ccd;
  }

  .l-flex {
    display: flex;



    .col-smaller {
      width: 14%;

      p {
        min-height: 55px;
      }
    }

    .padding-top {
      padding-top: 1rem;
    }

    .padding-bottom {
      padding-bottom: 1rem;
    }



    .col {
      width: 20%;
      padding-right: 1rem;

      .no-marg {
        margin: 0;
      }

      .content-marg {
        margin: 0 1rem;

        div {
          min-height: 56px;

          @include atLarge {
            min-height: 55px;
          }
        }
      }


      .larger-text {
        font-size: 3rem;
      }
    }
  }
}
#mobile {

  @include atMedium {
    display: none;
  }
}

  .heading {
    padding-top: 120px;
    height: 600px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    h1 {
      flex-basis: 100%;
      text-align: center;
      color: #eee;
      font-size: 4rem;
      font-family: SweetSans-Thin;

      @include atMedium {
        font-size: 6rem;
      }
    }

    button {
      margin: 0 auto 30px auto;
      padding: 20px;
      border: none;
      background-color: darkseagreen;

      &:hover {
        background-color: #eee;
      }
    }
  }

  .nav-element {

    ul {
      list-style: none;
      padding: 0;
      margin-top: 60px;
      width: 330px;
      margin: 60px auto;
      display: flex;
      border: 1px $mainDarkGrey solid;

      &:first-child {
        border-left: none;
      }
      li {
        border-left: 1px $mainDarkGrey solid;

        a {
          display: block;
          width: 100%;
          height: 100%;
          padding: 20px;
          text-decoration: none;
          color: inherit;
        }

        a:hover {
          background-color: yellow;
        }
      }
    }
  }

  .content {
      margin-left: 1rem;

    .price_desc {
      text-transform: uppercase;
      font-family: SweetSans-Thin;
      margin: 0;
    }

    .price {
      margin: 0;
      font-size: 2rem;
    }

    .cta-button {
      text-decoration: none;
      display: block;
      color: inherit;
      text-align: center;
      width: 9rem;
      height: 100%;
      padding: 20px;
      border: 1px solid $mainDarkGrey;
      margin: 1rem 0;

      &:hover {
        background-color: #eee;
      }
    }

    .line {
      border: 1px solid black;
      margin-right: 1rem;
    }
    .marg-bot {
      margin-bottom: 60px;
    }
    .flex {
      display: flex;

      .padding-left {
        padding-left: 20px;
      }

      .half-width {
        width: 50%;
      }
    }
  }
</style>
