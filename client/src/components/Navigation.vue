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
    
    div.mobile-menu
      div.mobile-menu__menu-icon
        div.mobile-menu__menu-icon__middle
      
    div.main-nav
      div.zendo_logo_small
        img(class='zendo_logo_small--img' src="../assets/images/zendo_logo_small.png")
        p.zendo_logo_small--brand-first
          | endo
          span.zendo_logo_small--lighter-font
          | Digital
      nav(role='navigation')
            ul.main-nav__first-ul
              li.home-li
                a(href="/" id="home") Home
                ul.drop-menu
                  li.dropdown-li
                    a(href="#features" id="features-link") Feature
                  li.dropdown-li
                    a(href="#teams" id="teams-link") Teams
                  li.dropdown-li
                    a(href="#about-us" id="about-us-link") About
              li
                a(href="#contact-form" id="contact-link") Contact
              li
                a(href="pricing" id="pricing") Pricing
  
      div.mobile-menu__menu-content
        ul.mobile-menu__menu-content__list-container
          li.mobile-menu__menu-content--show-dropdown
            span
              i(class="fas fa-caret-right")
            span 
              i(class="caret-down fas fa-caret-down")
            ul.mobile-menu__menu-content--drop-menu
              li.mobile-menu__menu-content--dropdown-li
                a(href="#features" id="features-link") Features
              li.mobile-menu__menu-content--dropdown-li
                a(href="#teams" id="teams-link") Teams
              li(class="mobile-menu__menu-content--dropdown-li")
                a(href="#about-us" id="about-us-link") About
          li
            a(href="#contact-form" id="contact-link") Contact
          li
            a(href="pricing" id="pricing") Pricing
</template>

<style lang="scss">
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
                  padding-right: 20px;    
              }
        
              i {
                  color: #fff;
              }
        
              i:hover {
                  color: $coral;
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
      background-color: #ff7f50;
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
                      background-color:#ff7f50;
                  }
              }
              
              &:hover {
                  background-color: #ffb296;
              }
              
              
              a {
                  text-decoration: none;
                  color: #fff;
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
                  top:73%;
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
              
             
              
              &--lighter-font {
                  font-family: SweetSans-Light;
              }
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
            /*position: relative;*/
            
            &--is-visible {
                display: block;
                z-index: 2;
                /*width: 100%;*/
                top: 50px;
                left:50px;
            
                > li {
                    list-style: none;
                    color: #fff;
                    display: block;
                    position: relative;
                    padding: 10px 0;
                    background-color: #000;
                    width: 100%;
                    border-top: 1px white solid;
                    padding-left: 10px;
                    font-size: 1.5em;
    
                      a {
                          width: 100%;
                          height: 100%;
                          text-decoration: none;
                          display: block;
                          color: #fff;
                      }
                }
                
                > li:last-child {
                    padding-bottom: 10px;
                    border-bottom: 1px white solid;
                }
            }
        }
        
        &--drop-menu {
                visibility: hidden;
                  opacity: 0;
                  /*position: relative;*/
                  transition: all 0.5s ease;
                  top:0;
                  left: 0;
                  display: none;
                  /*z-index: 20;*/
                  list-style: none;
                  
                  > li {
                    display: flex;
                    width: 100%;
                    height: 35px;
                    justify-content: center;
                    flex-direction: column;
                    
                      a {
                          display: block;
                          color: #fff;
                          width: 100%;
                          height: 100%;
                          font-size: 1rem;
                          padding: 10px 0 0 10px;
                          text-decoration: none;
                      }
                      a:hover {
                          background-color: $coral;
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
      background-color: rgba($mainBlueGrey, .55);
    }
    
    &__menu-icon:hover {
      cursor: pointer;
    }
    
    &__menu-icon {
      width: 20px;
      height: 20px;
      position: absolute;
      top: -30px;
      left: 10px;
      z-index: 10;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 3px;
        background-color: #FFF;
        transform-origin: 0% 0%;
        transition: transform .3s ease-out;
      }

      &__middle {
        position: absolute;
        top: 8px;
        left: 0;
        width: 20px;
        height: 3px;
        background-color: #FFF;
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
        background-color: #FFF;
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
