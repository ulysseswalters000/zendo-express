<template lang="pug">
  div(class="contact-form--background-color contact-form page-section page-section--no-b-padding-until-large")
    div(id="contact-form" class="contact-form-main" data-matching-link="#contact-link")
      div(class="wrapper wrapper--no-padding-until-large")
        h2(class="section-title section-title--contact")
          span.section_title
            strong Contact Us
        form(action="/contact" method="POST")
          div(class="contact_inputs")
              input(type="text" name="name" placeholder="Name" required="required")
              input(type="email" name="email" placeholder="Email" required="required")
              input(type="tel" name="number" placeholder="Phone Number" required="required")
              textarea(class="text-area" name="message" placeholder="Message" required="required")
              input(type="submit" name="button" value="Submit")
</template>

<style lang="scss">
  .contact-form-main {
    width: 100%;
    padding: 10px;
    background: #FFF;
      
      @include atMedium {
        width: 500px;
        padding: 30px;
        background: #FFF;
        margin: 50px auto;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);

      }

  }

  .contact-form--background-color {
      background-color: $mainBlueGrey;
       padding-bottom: 72px;
  }

  .contact-form input[type="text"],
  .contact-form input[type="date"],
  .contact-form input[type="datetime"],
  .contact-form input[type="email"],
  .contact-form input[type="number"],
  .contact-form input[type="search"],
  .contact-form input[type="time"],
  .contact-form input[type="url"],
  .contact-form input[type="password"],
  .contact-form input[type="tel"],
  .contact-form textarea,
  .contact-form select {
      box-sizing: border-box;
      outline: none;
      display: block;
      width: 100%;
      padding: 0 7px;
      border: none;
      border-bottom: 1px solid #ddd;
      background: transparent;
      margin-bottom: 10px;
      font: 16px Arial, Helvetica, sans-serif;
      height: 45px;
      color: #1f1f1f;
  }

  .text-area {
      resize: none;
      overflow: hidden;
  }

  .contact-form input[type="button"], 
  .contact-form input[type="submit"]{
      box-shadow: inset 0px 1px 0px 0px #4D4D4D;
      background-color: #4D4D4D;
      border: 1px solid #4D4D4D;
      display: inline-block;
      cursor: pointer;
      color: #FFFFFF;
      font-family: 'Open Sans Condensed', sans-serif;
      font-size: 14px;
      padding: 8px 18px;
      text-decoration: none;
      text-transform: uppercase;
  }

  .contact-form input[type="button"]:hover, 
  .contact-form input[type="submit"]:hover {
      background:linear-gradient(to bottom, #121212 5%, #232323 100%);
      background-color:#34CACA;
      outline: none;
      border: none;
  }
</style>
