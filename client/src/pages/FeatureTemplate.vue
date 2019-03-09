<script>
import Navigation from '@/components/Navigation.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'FeatureTemplate',
  components: {
    Navigation,
    TheFooter
  },
  props: ['article'],
  data () {
    return {
    }
  },
  computed: {
    backgroundImg () {
      return `background-image: url(${this.article.imgUrl})`
    }
  }
}
</script>

<template lang="pug">
  div.feature-template
    Navigation
    div(class="container" :style="backgroundImg")
      img(:src="imgUrl")
      h1.title {{article.title}}
    div.flex-container
      div.left-content
        div.article-heading
          div.line &nbsp;
          h2.articleTitle {{article.title}}
          div.line &nbsp;
        div.copy
          div(v-for="(value, key, index) in article.paragraphs")
            h2(v-if="key == 'subHeading'") {{ value }}
            ul.listed-items(v-else-if="key == 'bullets'")
              li.list-item(v-for="bullet in value") {{ bullet }}
            p(v-else) {{ value }}

      div.right-content
        aside
          div.aside-links
            ul
              li
                div.aside-heading
                  h2 Other Features
              li
                router-link(:to="{name: 'webdesign'}") Web Design
              li
                router-link(:to="{name: 'socialmedia'}") Social Media
              li
                router-link(:to="{name: 'seo'}") SEO
              li
                router-link(:to="{name: 'photoAndVideo'}") Photography &amp; Videography
              li
                router-link(:to="{name: 'reputationManagement'}") Reputation Management
              li
                router-link(:to="{name: 'contentAndGraphic'}") Content &amp; Graphic Creation
    TheFooter
    router-view
</template>

<style lang="scss">
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
    text-transform: uppercase;
    font-size: 3rem;

    @include atMedium {
      font-size: 6rem;
    }

    @include atLarge {
      font-size: 8rem;
    }
  }
}

.flex-container {
  display: block;
  margin-top: 60px;

  @include atLarge {
    display: flex;
  }

  .left-content {
    justify-content: flex-start;
    width: 75%;
    margin: 0 auto;

    @include atLarge {
      width: 64%;
    }

    .article-heading {
      text-align: center;

      .articleTitle {
        display: inline-block;
        text-decoration: underline;
        width: 100%;
      }

      .line {
        display: inline-block;
        width: 50%;
        min-height: 1px;
        max-height: 6px;
        background-color: rgba($mainDarkerGrey, .5px);
        align-self: center;
      }
    }

    .copy {

      p {
        font-size: 1rem;
        text-indent: 2rem;

        @include atMedium {
          font-size: 1.5rem
        }
      }

      p::first-letter {
        font-weight: bold;
      }

      .listed-items {
        font-size: 1rem;

        @include atMedium {
          font-size: 1.5rem;
        }
      }
    }
  }

  .right-content {
    width: 96%;
    margin: 2% auto;

    @include atLarge {
      width: 33%;
    }
    aside {


      .aside-links {
        text-align: center;

        ul {
          width: 100%;
          height: 100%;
          padding: 0;

          li {
            list-style-type: none;
            width: 100%;

            .aside-heading {

              h2 {
                text-align: center;
                height: 100%;
                background-color: #e7e0da;
                padding: 2rem;
                margin: 0;
              }
            }

            a {
              display: block;
              font-size: 1.3rem;
              text-decoration: none;
              height: 100%;
              width: 100%;
              padding: 2rem;
              font-weight: bold;
              color: black;
              background-color: #dadcd6;
            }

            a:hover {
              background-color: #b6b9ad;
            }

            .router-link-exact-active {
              font-size: 1.5rem;
              border-left: 1px solid $mainDarkerGrey;
              border-bottom: 1px solid $mainDarkerGrey;
              border-radius: 0 0 0 25px;
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }
}



</style>
