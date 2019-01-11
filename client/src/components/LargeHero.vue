<template lang="pug">
  div.large-hero
    div.wrapper
      div.large-hero__text-content
        h1.large-hero__title Marketing Solutions for Peace of Mind
          p
            a(class="btn btn--large" href="#contact-form") Contact Us
      
    
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.large-hero {
  display: flex;
  border-bottom: 10px solid $mainRed;
  background-image: url(../assets/images/ganges_boats.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 800px;
  width: 100%;
  padding-top: 60px;
  align-items: center;
  justify-content: center;

  

  &__text-content {
    /*padding-top: 188px;*/
    width: 100%;
    text-align: center;
    color: #FFF;
    

    @include atMedium {
      padding-top: 60px;
    }
    
  }

  &__title {
    font-weight: 300;
    font-size: 2.4rem;
    margin: 0;

    @include atSmall {
      font-size: 4rem;
    }
  }
}
</style>
