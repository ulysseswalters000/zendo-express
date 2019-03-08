<script>
import Navigation from '@/components/Navigation.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'FeatureTemplate',
  components: {
    Navigation,
    TheFooter
  },
  props: {
    title: {
      type: String,
      required: false,
      default: 'put title here'
    },
    imgUrl: {
      type: String,
      required: false
    },
    content: {
      price: {
        type: String
      }
    }
  },
  computed: {
    style () {
      return `background-image: url(${this.imgUrl})`
    }
  }
}
</script>

<template lang="pug">
  div.feature-template
    Navigation
    div(class="container" :style="style")
      h1.title {{title}}
    div
      h2 Pricing
      p(v-bind:content="content") {{content.price}}
    div.copy
      h2.articleTitle {{title}}
      div.line
    p
      | Stunning website services to expand your brand and sales in the continually
      | competitive online ecosystem.
      | Zendo Digital specializes in designing beautiful websites that will
      | attract new clients to your growing business.
    p
      | If you decide to hire the team of expert designers, Zendo Digital will design
      | and build a custom website for your business at a great price.
    p
      | Zendo's team of web developers focus on using best-practices in the web development
      | process to ensure that your site is delivered: on time, to specification, and within
      | a budget that you specify.
    TheFooter
    router-view
</template>

<style lang="scss" scoped>
.copy {
  display: flex;
  justify-content: space-between;

  & .articleTitle {
    margin: auto;
  }

  & .line {
    width: 73%;
    height: 6px;
    background-color: $mainDarkerGrey;
    align-self: center;
  }
}

.container {
  padding-top: 70px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @include atMedium {
    padding-top: 100px;
  }
  .title {
    color: $mainWhite;
    font-family: SweetSans-Light;
  }
}
</style>
