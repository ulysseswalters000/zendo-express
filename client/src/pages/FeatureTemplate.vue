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
      expandMobile: false,
    }
  },
  methods: {
    showFeatureItems () {
      this.expandMobile = true;
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
    div
      nav.feature-nav
        div.feature-links
          div.mobile-feature-nav
            h3(@click="showFeatureItems") Other Features
          ul
            li.feature-item
              router-link(:to="{name: 'webdesign'}") Web Design
            li.feature-item
                router-link(:to="{name: 'socialmedia'}") Social Media
            li.feature-item
              router-link(:to="{name: 'seo'}") SEO
            li.feature-item
              router-link(:to="{name: 'photoAndVideo'}") Photography &amp; Videography
            li.feature-item
              router-link(:to="{name: 'reputationManagement'}") Reputation Management
            li.feature-item
              router-link(:to="{name: 'contentAndGraphic'}") Content &amp; Graphic Creation
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

    TheFooter
    router-view
</template>

<style lang="scss">
.copy {
  max-width: 376px;
  margin: 0 auto;

  @include atSmall {
    max-width: 500px;
  }

  @include atMedium {
    max-width: 700px;
    font-size: 1.25rem;
  }

  @include atLarge {
    max-width: 900px;
  }

  p {
    text-indent: 4rem;
  }
}
.article-heading {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;

  @include atMedium {
    max-width: 700px;
    font-size: 1.25rem;
  }

  @include atLarge {
    max-width: 900px;
  }
  :first-child {
    margin-top: 60px;
  }

  .line {
    background-color: rgba($mainDarkerGrey, 0.5px);
    height: 8px;
  }
}

.feature-links {
  display: block;
  background-color: #000;

  @include atLarge {
    display: flex;
  }

  ul {
    margin: 0px auto;
    list-style: none;
    padding: 0;

    li {
      padding: 0;

      @include atLarge {
        display: inline-block;
      }
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////
    .mobile-feature-nav {

      h3 {
        text-align: center;
        margin: 0 auto;
        padding: 20px;
        font-size: 1rem;
        color: $mainWhite;
        width: 100%;
        height: 100%;
      }
    }

    .feature-item {
      display: none;

      @include atLarge {
        display: inline-block;
      }

      a {
        flex: 1 1 0;
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: $mainWhite;
        padding: 20px;
      }

      a:hover {
        background-color: #eee;
        color: $mainDarkGrey;
      }
    }
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





</style>
