<template lang="pug">
  div#pricing
    Navigation
    div(class="pricing")
      div.page-section
        div.wrapper
          div.grid
            div(class="pricing_column grid--column-1")
              h1.pricing__price
                | $250
                span.pricing__price--sub-script /month
              h2.pricing__title Beginner
              hr.pricing__hr
              div.pricing__content
                h3 Features
                p.pricing__p
                | Social Media Management
                br
                span 1 Channel
                p.pricing__p
                | Custom Graphic Creation
                br
                span 1/Month
                p.pricing__p
                | Strategy Development Meetings
                br
                span 1/Month
                p.pricing__p
                | Search Engine Optimization
                br
                | (SEO)
                p Account Monitoring & Management
                p Social Account Setup
                p Optimized Posting Schedule
                p Reputation Management
                p Client/Follower Engagement
                p Content Generation
                p Industry Research & Development
                p Keyword Optimization Strategy
                p Performance & Metrics Reports
                p Website Monitoring & Management
                p Spam Monitoring

            div(class="pricing_column grid--column-2")
              h1.pricing__price
                | $500
                span.pricing__price--sub-script /month
              h2.pricing__title Intermediate
              hr.pricing__hr
              div.pricing__content
                h3 Beginner Features
                i(class="fas fa-plus i--color")
                p.pricing__p
                | Social Media Management
                br
                span 2 Channels
                p.pricing__p
                | Custom Graphic Creation
                br
                span 2/Month
                p.pricing__p
                | Email Campaign Management
                br
                span 1/Month
                p.pricing__p
                | Strategy Development Meetings
                br
                span 2/Month
                p.pricing__p
                  | SEO
                  br
                  i(class="fas fa-asterisk")

            div(class="pricing_column grid--column-3")
              h1.pricing__price
                | $750
                span.pricing__price--sub-script /month
              h2.pricing__title Advanced
              hr.pricing__hr
              div.pricing__content
                h3 Intermediate Features
                i(class="fas fa-plus i--color")
                p.pricing__p
                | Social Media Management
                br
                span 3 Channels
                p.pricing__p
                  | Custom Graphic Creation
                  br
                  span 3/Month
                p.pricing__p
                  | Email Campaign Management
                  br
                  span 2/Month
                p.pricing__p
                  | Strategy Development Meetings
                  br
                  span 3/Month
                p.pricing__p
                | SEO
                br
                i(class="fas fa-asterisk")
                i(class="fas fa-asterisk")

            div(class="pricing_column grid--column-4")
              h1.pricing__price $1000
                span.pricing__price--sub-script /month
              h2.pricing__title Expert
              hr.pricing__hr
              div.pricing__content
                h3 Advanced Features
                i(class="fas fa-plus i--color")
                p.pricing__p
                | Social Media Management
                br
                span 5 Channels
                p.pricing__p
                  | Custom Graphic Creation
                  br
                  span 4/Month
                p.pricing__p
                  | Email Campaign Management
                  br
                  span 4/Month
                p.pricing__p
                  | Strategy Development Meetings
                  br
                  span 4/Month
                p.pricing__p
                | SEO
                br
                i(class="fas fa-asterisk")
                i(class="fas fa-asterisk")
                i(class="fas fa-asterisk")
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
    }
  }
</script>

<style lang="scss">
  .pricing {
      background-color: $mainDarkColor;

      @include atMedium {
          text-align: center;
          background-image: url(../assets/images/ganges_bath_time.jpg);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
      }

      &__price {
          font-family: SweetSans-Medium;
          color: $mainDarkColor;
          font-size: 3rem;

          &--sub-script {
              font-size: 25%;
          }
      }

      &__title {

      }

      &__p {
         font-family: Roboto;
         margi-bottom: 20px;
      }

      &__hr {
          margin-bottom: 20px;
      }

      & .i--color {
          color: $mainLighterDarkColor;
          font-size: 5rem;
          margin: 3rem 0;
      }
  }
</style>
