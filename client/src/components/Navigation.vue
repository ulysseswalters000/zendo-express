<template lang="pug">
  div.fixed-header
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

    div(
        class="mobile-menu"
        v-bind:class="{'mobile-menu--is-expanded': revealMobileNav.toggleSiteHeader}"
        )
      div(
        class="mobile-menu__menu-icon"
        v-on:click="revealMobileNav.toggleMenuContent = !revealMobileNav.toggleMenuContent; revealMobileNav.toggleSiteHeader = !revealMobileNav.toggleSiteHeader; toggleMenuIcon = !toggleMenuIcon"
        v-bind:class="{'mobile-menu__menu-icon--close-x': toggleMenuIcon}"
        )
        div.mobile-menu__menu-icon__middle

    div.main-nav
      div.zendo_logo_small
        img(class='zendo_logo_small--img' src="../assets/images/zendo_logo_small.png")
        p.zendo_logo_small--brand-first
          | endo
          span.zendo_logo_small--lighter-font Digital
      nav(role='navigation')
            ul.main-nav__first-ul
              li.home-li
                a(href="/" id="home") Home
                ul.drop-menu
                  li.dropdown-li
                    router-link(:to="{name: 'webdesign'}" id="features-link") Features
                  li.dropdown-li
                    a(href="/#teams" id="teams-link") Teams
                  li.dropdown-li
                    a(href="/#about-us" id="about-us-link") About
              li
                router-link(to='/contact') Contact
              li
                router-link(to="/pricing" id="pricing") Pricing

    div.mobile-menu__menu-content
      ul(
        class="mobile-menu__menu-content__list-container"
        v-bind:class="{'mobile-menu__menu-content__list-container--is-visible': revealMobileNav.toggleMenuContent}"
        )
        li(
          class="mobile-menu__menu-content--show-dropdown"
          v-on:click="innerMobileNav.showInnerDropdown = !innerMobileNav.showInnerDropdown; innerMobileNav.caretDownIsVisible = !innerMobileNav.caretDownIsVisible; innerMobileNav.caretRightIsHidden = !innerMobileNav.caretRightIsHidden;"
          ) Home
          span
             i(
               class="fas fa-caret-right"
               v-bind:class="{'caret-right--is-hidden': innerMobileNav.caretRightIsHidden}"
               )
          span
            i(
              class="caret-down fas fa-caret-down"
              v-bind:class="{'caret-down--is-visible': innerMobileNav.caretDownIsVisible}"
              )
        ul(
          class="mobile-menu__menu-content--drop-menu"
          v-bind:class="{'show-mobile-dropdown': innerMobileNav.showInnerDropdown}"
          )
          li.mobile-menu__menu-content--dropdown-li
            router-link(:to="{name: 'webdesign'}" id="features-link") Features
          li.mobile-menu__menu-content--dropdown-li
            a(href="/#teams" id="teams-link") Teams
          li(class="mobile-menu__menu-content--dropdown-li")
            a(href="/#about-us" id="about-us-link") About
        li
          router-link(to='/contact') Contact
        li
          a(href="pricing" id="pricing") Pricing
</template>

<script>
  export default {
    name: 'Navigation',
    data: function () {
      return {
        revealMobileNav: {
          toggleMenuIcon: false,
          toggleSiteHeader: false,
          toggleMenuContent: false
        },
        innerMobileNav: {
          showInnerDropdown: false,
          caretRightIsHidden: false,
          caretDownIsVisible: false
        }
      }
    }
  }
</script>

<style lang="scss">
  .fas {
    padding-left: 10px;
  }

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
          padding-left: 0px;
          height: 100%;
          margin: 0;


          li {
              list-style: none;
              display:inline-block;
              height: 100%;
              width: 125px;
              text-align: center;


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
                  height:100%;
                  display:inline-block;
                  padding-top:22px;
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

              }
          }
      }


      .zendo_logo_small {
          margin-right: auto;
          padding-top:5px;

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
    transition: background-color .3s ease-out;

    &__menu-content {
        display: flex;
        background-color: black;



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
                    padding: 10px 0;
                    background-color: #000;
                    width: 100%;
                    border-top: 1px $mainWhite solid;
                    padding-left: 10px;
                    font-size: 1.5em;

                      a {
                          width: 100%;
                          height: 100%;
                          text-decoration: none;
                          display: block;
                          color: $mainWhite;
                      }
                }

                > li:last-child {
                    padding-bottom: 10px;
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
                          font-size: 1rem;
                          text-decoration: none;
                          font-size: 1.5rem;
                          border-top: 1px solid $mainWhite;
                          align-items: center;
                          justify-content: center;
                      }
                      a:hover {
                          background-color: #eee;
                          color: #aaa;
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

    &--is-expanded {
      background-color: rgba($mainDarkGrey, .55);
    }

    &__menu-icon:hover {
      cursor: pointer;
    }

    &__menu-icon {
      width: 20px;
      height: 20px;
      position: absolute;
      top: -37px;
      left: 10px;
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



  .caret-right--is-hidden {
      display: none;
  }

  .caret-down {
      display: none;
  }

  .caret-down--is-visible {
      display: inline;
  }
</style>
