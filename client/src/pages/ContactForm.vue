<template lang="pug">
  div
    Navigation
    div(class="contact-form--background-color contact-form  contact-form--bottom-padding page-section")
      div.contact-form__text
        h1  Simplify your business today!
        p Call us at (999) 999-9999 for a free consultation
      div(id="contact-form" class="contact-form-main" data-matching-link="#contact-link")
        div(class="wrapper wrapper--no-padding-until-large")
          h2(class="section-title section-title--contact")
            span.section_title
              strong Contact Us
          form(action="/contact" method="POST")
            div(class="contact_inputs")
                input(
                      type="text"
                      name="name"
                      v-model="contacts.name"
                      placeholder="Name"
                      required="required"
                      )
                input(
                      type="email"
                      name="email"
                      v-model="contacts.email"
                      placeholder="Email"
                      required="required"
                      )
                input(
                      type="tel"
                      name="number"
                      v-model="contacts.number"
                      placeholder="Phone Number"
                      required="required"
                      )
                textarea(
                        class="contact-form--text-area"
                        name="message"
                        v-model="contacts.message"
                        placeholder="Message"
                        required="required"
                        )
                input(
                      v-on:click="createContact()"
                      type="submit"
                      name="button"
                      value="Submit"
                      )
    TheFooter
    router-view
</template>

<script>
import ContactService from '../../ContactService.js'
import Navigation from '@/components/Navigation.vue'
import TheFooter from '@/components/TheFooter.vue'

  export default {
    name: 'ContactForm',
    components: {
      Navigation,
      TheFooter
    },
    data() {
      return ContactService.contactInitialState();
    },
    methods: {
      async createContact() {
        await ContactService.insertContact(this.name, this.email, this.number, this.message);
      }
    }
  }
</script>

<style lang="scss">
  .contact-form-main {
    width: 25rem;
    margin: 5rem auto 0 auto;
    padding: 30px 15px 30px 15px;
    background: #FFF;

      @include atMedium {
        width: 25rem;
        padding: 30px 20px 30px 20px;
        background: #FFF;
        margin: 2.7rem auto 0 auto;

      }

  }

  .contact-form {
    &__text {
      margin-top: 100px;
      color: $mainWhite;
      text-align: center;

      p {
        font-size: 1.3rem;
      }
    }

   input,
   textarea {
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

  input[type="button"],
  input[type="submit"] {
      background-color: #3D3D3D;
      border: 1px solid #3D3D3D;
      display: inline-block;
      cursor: pointer;
      color: #FFFFFF;
      font-family: 'Open Sans Condensed', sans-serif;
      font-size: 14px;
      padding: 8px 18px;
      text-decoration: none;
      text-transform: uppercase;

      &:hover,
      &:hover {
          background-color:$mainDarkerGrey;
          outline: none;
          border: 1px solid $mainDarkerGrey;
      }
  }

  &--background-color {
      background-color: $mainLighterDarkColor;
      padding-bottom: 72px;
  }

  &--bottom-padding {
    @include atMedium {
      padding-bottom: 189px;
    }
  }

  &--text-area {
      resize: none;
      overflow: hidden;
  }
}













</style>
