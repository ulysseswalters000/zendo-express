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
      showMobile: false,
      isLargeScreen: true,
      windowWidth: 0
    }
  },
  methods: {
    showFeatureItems () {
      this.showMobile = !this.showMobile;
      return (this.showMobile)
              ? document.getElementById('mobile-dropdown').style.display = 'block'
              : document.getElementById('mobile-dropdown').style.display = 'none'

    }
  },
  computed: {
    backgroundImg () {
      return `background-image: url(${this.article.imgUrl})`
    },
    svgUrl () {
      return `${this.article.svgUrl}`
    }
  },
  watch: {
    windowWidth(newWidth, oldWidth) {
      console.log(newWidth);
      (newWidth >= 1010)
      ? document.getElementById('mobile-dropdown').style.display = 'block'
      : document.getElementById('mobile-dropdown').style.display = 'none'

    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    })
  }
}
</script>

<template lang="pug">
  div(class="feature-template" data-matching-link="#feature")
    Navigation
    div(class="container" :style="backgroundImg")
      img(:src="imgUrl")
      h1.title {{article.title}}
    div
      nav.feature-nav
        div.feature-links
          div.mobile-feature-nav
            h3(@click="showFeatureItems") Other Features
          ul(id="mobile-dropdown" :class="{'show-on-large': isLargeScreen}")
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
        div
          img(:src="svgUrl" class="floated")
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

  .floated {
    float: left;
  }


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

  .mobile-feature-nav {

    @include atLarge {
      display: none;
    }

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

  ul {
    margin: 0px auto;
    list-style: none;
    padding: 0;
    display: none;

    .show-on-large {
      display: block;
    }

    @include atLarge {
      display: block;
    }

    li {
      padding: 0;

    }



    .feature-item {

      @include atLarge {
        display: inline-block;
      }

      .router-link-exact-active {
        border-bottom: 5px solid $mainDarkColor;
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
    text-shadow: 2px 2px $mainDarkGrey;

    @include atMedium {
      font-size: 6rem;
    }

    @include atLarge {
      font-size: 8rem;
    }
  }
}






</style>
