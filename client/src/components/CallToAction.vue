<template lang="pug">
  div#cta.page-section(data-matching-link="#about-us-link")
    div.wrapper
      h2(class="headline headline--centered headline--light headline--b-margin-small headline--slightly-larger") 
        | Digital Presence 
        strong made easy.
    


      div(class="cta cta__grid")
        
        //- column 1
        div.cta__grid-column-1
          div.cta__grid--img
            img(src="../assets/images/zendo_logo_small.png")
        
        //- column 2
        div.cta__grid-column-2
          div.cta__grid--right-column
            h2 Zendo Digital
            p We specialize in custom digital marketing solutions for the busy owner, Your business deserves your attention, so let our team of experts do the heavy lifting.
            div.services
              h3 Services:
              ul.cta__grid--inner-grid
                li(class="item-a col-1 row-1")
                  a(href="#") Web Design
                li(class="item-b col-2 row-1")
                  a(href="#") Social Media and Reputation Management
                li(class="item-c col-1 row-2")
                  a(href="#") SEO (search engine optimization)
                li(class="item-d col-2 row-2")
                  a(href="#") Photography and Videography services
                li(class="item-e span-col-row-3")
                  a(href="#") Content Generation and Copywriting
            p A strong digital presence is essential for keeping your brand prominent and relevant. Let Zendo Digital help propel your business to the top with our expertise and knowledge.</p>
</template>

<style lang="scss">
.cta {
    display: block;
    
    &__grid {
        text-align: center;
        
        &--img {
            text-align: center;
            align-self: stretch;
        }
        
        &--inner-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            grid-gap: 1rem;
            
            .span-col-row-3 {
                grid-column: 1 / span 2;
            }
        }
        
        ul {
          padding: 0;
          margin: 0;
          
          li {
              width: 100%;
              height: 100%;
              list-style: none;
              
              a {
                  background-color: grey;
                  display: block;
                  width: 100%;
                  height: 100%;
                  text-decoration: none;
                  padding: 15px 0;
                  color: black;
                  
                  &:hover {
                      background-color: $lightCoral;
                  }
              }
          }
      }
        
    }
    
    @include atMedium {
                
    
        &__grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            margin-top: 120px;
            
            
            
            &-column-1 {
                grid-column-start: 1; 
                padding: 0 32px;
            }
            
            &-column-2 {
                grid-column-start: 2;
                
                h2 {
                    text-align: center;
                }
            }
            
            &--img {
                grid-column-start: 1;
                
                
            }
            
            
            &--right-column{
                color: $mainBlueGrey;
                .services {
                    text-align: center;
                    ul {
                        padding: 0;
                        margin: 0;
                        li {
                            width: 100%;
                            height: 100%;
                            list-style: none;
                            a {
                                display: block;
                                width: 100%;
                                height: 100%;
                                text-decoration: none;
                                padding: 15px 0;
                                color: $mainBlueGrey;
                                
                                &:hover {
                                    background-color: $lightCoral;
                                }
                            }
                        }
                    }
                }
            }
            
            &--inner-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: auto;
                
                .col-1 {
                    grid-column: 1;
                }
                
                .row-1 {
                    grid-row: 1;
                }
                
                .col-2 {
                    grid-column: 2;
                }
                
                .row-2 {
                    grid-row: 2;
                }
                
                .span-col-row-3 {
                    grid-column: 1 / span 2;
                }
            }
        }
    }
}

</style>
