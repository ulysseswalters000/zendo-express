<template lang="pug">
  div.fixed-header
    <!-- Social Nav Container -->
    div.social-nav
      nav
        ul
            li
              a(href="https://www.facebook.com/zendodigital")
                i(class="fab fa-facebook-square fa-lg")
            li
              a(href="https://www.instagram.com/zendo_digital/")
                i(class="fab fa-instagram fa-lg")

            li
              a(href='https://twitter.com/zendodigital')
                i(class="fab fa-twitter-square fa-lg")
    <!-- Main Nav Container -->
    div.main-nav
      <!-- Brand -->
      a.zendo_logo_small(href="/")
        img(class='zendo_logo_small--img' src="../assets/images/zendo_logo_small.png")
        p.zendo_logo_small--brand-first
          | endo
          span.zendo_logo_small--lighter-font Digital
      <!-- Nav Elements -->
      nav(role='navigation')
            ul.main-nav__first-ul
              li.home-li
                a(href="/" id="home") Services
                ul.drop-menu
                  li 
                    router-link(:to="{name: 'webdesign'}") Web Design
                  li 
                    router-link(:to="{name: 'socialmedia'}") Social Media
                  li 
                    router-link(:to="{name: 'seo'}") SEO
                  li 
                    router-link(:to="{name: 'photoAndVideo'}") Photo and Video
                  li 
                    router-link(:to="{name: 'reputationManagement'}") Reputation Management
                  li 
                    router-link(:to="{name: 'contentAndGraphic'}") Content and Graphics
              li
                router-link(to='/contact') Contact
              li
                router-link(to="/pricing" id="pricing") Pricing
              li
                router-link(to="/blogs") Blog
              li(v-if="currentUser")
                a(@click="logOut") Logout
              li(v-if="currentUser")
                router-link(to="/dashboard") dash
    <!-- Mobile Nav Button -->
    div(
        class="mobile-menu"
        )
      <!-- Menu Icon three lines, changes to x when clicked  -->
      div(
        class="mobile-menu__menu-icon"
        @click="toggleMobileMenu = !toggleMobileMenu; showInnerDropdown = false"
        v-bind:class="{'mobile-menu__menu-icon--close-x': toggleMobileMenu}"
        )
        div.mobile-menu__menu-icon__middle
    <!-- Mobile Nav Menu Content Container -->
    div.mobile-menu__menu-content
      ul(
        class="mobile-menu__menu-content__list-container"
        v-bind:class="{'mobile-menu__menu-content__list-container--is-visible': toggleMobileMenu}"
        )
        li
        <!-- Mobile Branding -->
          a.mobile-brand(href="/")
            img(src="../assets/images/zendo_logo_small.png")
            p
              | endo
              span Digital
        li
          a.prevent(
            class="mobile-menu__menu-content--show-dropdown"
            @click="showInnerDropdown = !showInnerDropdown"
            ) Services
            span(v-if="!showInnerDropdown")
               i(
                 class="fas fa-caret-right"
                 )
            span(v-if="showInnerDropdown")
              i(
                class="fas fa-caret-down"
                )
        ul(
          class="mobile-menu__menu-content--drop-menu"
          v-bind:class="{'show-mobile-dropdown': showInnerDropdown}"
          )
          li 
            router-link(:to="{name: 'webdesign'}") Web Design
          li 
            router-link(:to="{name: 'socialmedia'}") Social Media
          li 
            router-link(:to="{name: 'seo'}") SEO
          li 
            router-link(:to="{name: 'photoAndVideo'}") Photo and Video
          li 
            router-link(:to="{name: 'reputationManagement'}") Reputation Management
          li 
            router-link(:to="{name: 'contentAndGraphic'}") Content and Graphics
        li
          router-link(to='/contact') Contact
        li
          a(href="pricing" id="pricing") Pricing
        li
          a(href="/blogs") Blog
        li(v-if="currentUser")
          a(href="/dashboard") Dash
        li(v-if="currentUser")
          a(@click="logOut") Logout
</template>

<script>
// imports user state from vuex plugin
import { mapState } from 'vuex'
// imports firebase methods from firebaseConfig
const fb = require("../firebaseConfig")
  export default {
    name: 'Navigation',
    data: function () {
      return {
        // toggleable booleans for mobile menu and showInnerDropdown respectively
        // used to bind css classes 
        toggleMobileMenu: false,
        showInnerDropdown: false
      }
    },
    methods: {
      // logs out of firebase, changes user state, programmatically navigates
      // to login screen.
      logOut() {
        fb.auth.signOut().then( () => {
          this.$store.dispatch('clearData')
          this.$router.push('/login')
        })
      }
    },
    // actually maps the user state if logged in
    computed: {
      ...mapState(['currentUser'])
    }
  }
</script>

<style lang="scss">
  // z-index necessary for precedence over other elements
  .fixed-header {
      position: fixed;
      width: 100%;
      z-index: 99;
  }

  .social-nav {
      display: flex;
      justify-content: flex-end;
      background-color: black;
      width: 100%;

      nav {
        ul {

          li {
              list-style: none;
              display: inline;
              padding: 5px 5px;
              overflow: hidden;

              &:last-child {
                  padding-right: 30px;
              }

              i {
                  color: $mainWhite;
              }

              i:hover {
                  color: $mainDarkColor;
              }
          }
        }
      }
  }

  .fas {
    padding-left: 10px;
  }






  .main-nav {
      display: none;
      justify-content: flex-end;
      width: 100%;
      height:60px;
      background-color: $mainDarkColor;
      position: fixed;

      @include atMedium {
          display: flex;
      }


      ul {
          position: relative;
          margin: 0;


          li {
              list-style: none;
              display: inline-block;
              height: 100%;
              width: 90px;
              text-align: center;

              @include atLarge {
                width: 120px;
              }


              ul {

                  li {
                      display: block;
                      background-color:$mainDarkColor;
                  }
              }

              &:hover {
                  background-color: $mainLighterDarkColor;
              }


              a {
                  text-decoration: none;
                  color: $mainDarkerGrey;
                  text-transform: uppercase;
                  width: 100%;
                  height: 100%;
                  display:inline-block;
                  padding: 21px 0px;
              }

              ul {
                  visibility: hidden;
                  opacity: 0;
                  position: absolute;
                  transition: all 0.5s ease;
                  margin-top:1rem;
                  top: 73%;
                  left: 0;
                  display: none;
                  z-index: 1;
                  
                  li {
                    
                    a {
                      font-size: .75rem;
                    }
                  }

              }
          }
      }


      .zendo_logo_small {
          margin-right: auto;
          padding: 5px 10px 0 0;
          
          &:hover {
            background-color: #7cc5d3;
          }

          &--img {
              width:32px;
              height:32px;
              margin-left: 12px;
          }

          &--brand-first {
              font-family: SweetSans-Medium;
              text-transform: uppercase;
              display: inline-block;
              margin-bottom: 50px;
              transform: translateY(-9px);
              font-size:1.5rem;
              color: #000;
            }


          &--lighter-font {
              font-family: SweetSans-Light;
          }
        }
      }

  .home-li:hover > ul{
        visibility: visible;
        opacity: 1;
        display: block;
  }

  .mobile-menu {
    padding: 0;
    position: absolute;
    z-index: 2;
    width: 100%;
    top: 0;
    left: 0;
    transition: background-color .3s ease-out;

    &__menu-content {
        display: flex;
        background-color: black;

      .mobile-brand {
        display: flex;
        text-decoration: none;
        color: #000000;
        text-transform: uppercase;
        align-items: center;
        padding-left: 10px;
        background-color: #eeeeef;
        
        &:hover {
          background-color: #AAAAAF;
        }
        
        img {
          width: 32px;
          height: 32px;
        }
        p {
          span {
            font-family: SweetSans-Light;
          }
        }
      }

        @include atMedium {
                display: none;
                visibility: hidden;
                opacity: 0;
            }

        &__list-container {
            display: none;
            padding: 0;
            margin: 0;
            width: 100%;

            &--is-visible {
                display: block;
                z-index: 2;
                top: 50px;
                left:50px;

                > li {
                    list-style: none;
                    color: $mainWhite;
                    display: block;
                    position: relative;
                    background-color: #000;
                    width: 100%;
                    border-top: 1px $mainWhite solid;
                    font-size: 1.5em;

                      a {
                          padding: 10px 0 10px 10px;;
                          width: 100%;
                          height: 100%;
                          text-decoration: none;
                          display: block;
                          color: $mainWhite;
                      }
                      a:hover {
                        background-color: #eee;
                        color: #aaa;
                      }
                }

                > li:last-child {
                    border-bottom: 1px $mainWhite solid;
                }
            }
        }

        &--drop-menu {
          visibility: hidden;
          opacity: 0;
          transition: all 0.5s ease;
          top:0;
          left: 0;
          display: none;
          list-style: none;

          > li {
            display: flex;
            width: 100%;
            height: 51px;
            justify-content: center;
            flex-direction: column;

              a {
                  display: flex;
                  color: $mainWhite;
                  width: 100%;
                  height: 100%;
                  text-decoration: none;
                  font-size: 1rem;
                  border-top: 1px solid $mainWhite;
                  align-items: center;
                  padding-left: 20px;
              }
              a:hover {
                  background-color: #eee;
                  color: #aaa;
              }
              a:last-child {
                padding-bottom: 0;
              }
            }
          }

       .show-mobile-dropdown {
          visibility: visible;
          opacity: 1;
          display: block;
          margin: 0;
          padding: 0;
       }


    }

    &__menu-icon:hover {
      cursor: pointer;
    }

    &__menu-icon {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 15px;
      left: 15px;
      z-index: 10;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 3px;
        background-color: $mainWhite;
        transform-origin: 0% 0%;
        transition: transform .3s ease-out;
      }

      &__middle {
        position: absolute;
        top: 8px;
        left: 0;
        width: 20px;
        height: 3px;
        background-color: $mainWhite;
        transition: all .3s ease-out;
        transform-origin: 0 50%;
      }

      &::after {
        content: "";
        position: absolute;
        top: 16px;
        left: 0;
        width: 20px;
        height: 3px;
        background-color: $mainWhite;
        transform-origin: 0% 100%;
        transition: transform .3s ease-out;
      }

      &--close-x {
        &::before {
          transform: rotate(45deg) scaleX(1.25);
        }

        .mobile-menu__menu-icon__middle {
          opacity: 0;
          transform: scaleX(0);
        }

        &::after {
          transform: rotate(-45deg) scaleX(1.25) translateY(1px);
        }
      }

      @include atMedium {
        display: none;
      }
    }


  }






</style>
