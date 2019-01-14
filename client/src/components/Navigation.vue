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
    
  //-   <div class='mobile-menu'>
  //-     <div class='mobile-menu__menu-icon'>
  //-       <div class="mobile-menu__menu-icon__middle"></div>
  //-     </div>  
  //- 
  //-     <div class='main-nav'>
  //-         <div class='zendo_logo_small'>
  //-           <img class='zendo_logo_small--img' src="/assets/images/zendo_logo_small.png">
  //-           <p class='zendo_logo_small--brand-first'>endo<span class='zendo_logo_small--lighter-font'>Digital</span></p>
  //-         </div>
  //-         <nav role='navigation'>
  //-               <ul class='main-nav__first-ul'>
  //-                 <li class='home-li'>
  //-                   <a href="/" id="home">Home</a>
  //-                   <ul class='drop-menu'>
  //-                     <li class='dropdown-li'><a href="#features" id="features-link">Features</a></li>
  //-                     <li class='dropdown-li'><a href="#teams" id="teams-link">Teams</a></li>
  //-                     <li class='dropdown-li'><a href="#about-us" id="about-us-link">About</a></li>
  //-                   </ul>
  //-                 </li>
  //-                 <li><a href="#contact-form" id="contact-link">Contact</a></li>
  //-                 <li><a href="pricing" id="pricing">Pricing</a></li>
  //-               </ul>
  //-           </nav>
  //-       </div>
  //- 
  //-       <div class='mobile-menu__menu-content'>
  //-         <!--<nav>-->
  //-           <ul class='mobile-menu__menu-content__list-container'>
  //-             <li class='mobile-menu__menu-content--show-dropdown'>Home 
  //-               <span class=''><i class="fas fa-caret-right"></i></span>
  //-               <span class=''><i class="caret-down fas fa-caret-down"></i></span>
  //-             </li>
  //-               <ul class='mobile-menu__menu-content--drop-menu'>
  //-                 <li class='mobile-menu__menu-content--dropdown-li'><a href="#features" id="features-link">Features</a></li>
  //-                 <li class='mobile-menu__menu-content--dropdown-li'><a href="#teams" id="teams-link">Teams</a></li>
  //-                 <li class='mobile-menu__menu-content--dropdown-li'><a href="#about-us" id="about-us-link">About</a></li>
  //-               </ul>
  //-             </li>
  //-             <li><a href="#contact-form" id="contact-link">Contact</a></li>
  //-             <li><a href="pricing" id="pricing">Pricing</a></li>
  //-           </ul>
  //-         <!--</nav>-->
  //-       </div>
  //-     </div>
  //- </div>
</template>

<style>
  .fixed-header {
      position: fixed;
      width: 100%;
      z-index: 99;
  }
  
  .social-nav {
      display: flex;
      justify-content: flex-end;
      background-color: black;
      height: 45px;
      width: 100%;
      /*position: fixed;*/
      
      
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
</style>
