<template lang="pug">
  div.clients
    h1.font-thin Our
      strong Clients
    div.images
      div.link-container
        a.link(href="https://cheuphoriarva.com")
          img.img-size(src="../assets/images/clientLogos/Cheuphoria_Logo.jpg")
          div.client-overlay
            h2 Visit Site
      div.link-container
        a.link(href="https://neverenoughbooksva.com")
          img.img-size(src="../assets/images/clientLogos/NEB_round.png")
          div.client-overlay
            h2 Visit Site
      div.link-container
        a.link(href="https://rvaglassrepair.com")
          img.img-size(src="../assets/images/clientLogos/rvaglasslogo-768x379.png")
          div.client-overlay
            h2 Visit Site
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.clients {
    background-color: $mainBlueGrey;
}

.font-thin {
  font-size: 3rem;
  font-family: SweetSans-Light;
  font-weight: 300;
  padding-top: 1rem;
  margin: 0;
  color: $mainWhite;

    strong {
      padding-left: .5rem;
    }
}

.images {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1100px;
    justify-content: space-around;
    padding-top: 20px;
}

.link-container {
    width: 144px;
    position: relative;



}

.client-overlay {
    background-color: rgba($mainDarkerColor, 0.5px);
    width: 100%;
    height: 100%;
    visibility: hidden;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;

    h2 {
      text-align: center;
      margin: 0 auto;
      color: $mainWhite;
    }

}

.link {
  width: 100%;
  height: 100%;
  display: block;

  &:hover > .client-overlay {
    visibility: visible;
    border-radius: 50%;
  }
}

.img-size {
  width: 100%;
  height: 100%;
  border: 1px black solid;
  border-radius: 100%;
}





</style>
