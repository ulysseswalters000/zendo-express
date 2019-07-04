<template lang="pug">
  <!-- parent div necessary in vue-->
  div
    div
      <!-- Page Heading -->
      div(class="contact-form page-section contact-form-main-margin-bottom")
        div.contact-text
          h1 Contact us today!
          a.call-btn(href="tel:804-601-4644") Call Us
        <!-- Form Container -->
        div(id="contact-form" class="contact-form-main" data-matching-link="#contact-link")
          <!-- Contact Heading -->
          div(class="wrapper wrapper--no-padding-until-large")
            h2(class="section-title section-title--contact")
              span.section_title
                strong Contact Us
            form(@submit.prevent)
              div(class="contact-inputs")
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
                        class="text-area"
                        name="message"
                        v-model="contacts.message"
                        placeholder="Message"
                        )
                  button.submit(@click.prevent="createContact") Submit
            <!-- Shows error below submit button if required fields are not provided -->
            p.error(v-if="error") {{ error }}
            <!-- Shows success message if data sent correctly. -->
            p.success(v-if="success") {{ success }}
</template>

<script>
// Bring in firebase for storing user input.
const fb = require('../firebaseConfig')

  export default {
    name: 'ContactForm',
    data() {
      return {
        // contacts object, uses v-model to store user input.
        contacts: {
          name: '',
          email: '',
          number: '',
          message: ''
        },
        // error stores error message if required inputs are not filled
        error: '',
        // success stores message if info provided correctly.
        success: '',
      }
    },
    methods: {
      // create contact checks if required fields in inputs were supplied.
      // if succeeds, calls firebase contactCollection and adds user data as an object
      // then it resets all fields, clearing everything including error.
      // if user does not supply all fields, displays error message to user
      // and logs to console.
        createContact() {
          if(this.contacts.name && this.contacts.email && this.contacts.number) {
            fb.contactCollection.add({
              createdOn: new Date(),
              name: this.contacts.name,
              email: this.contacts.email,
              number: this.contacts.number,
              message: this.contacts.message
            }).then( ref => {
              this.contacts.name = '';
              this.contacts.email = '';
              this.contacts.number = '';
              this.contacts.message = '';
              this.error = '';
              this.success = 'Thank you for your submission, we will be in touch soon!';
            }).catch ( err => {
              console.log(err);
              this.error = err;
            })
          } else {
            this.success = '';
            this.error = 'Name, Email, and Number are required to submit';
          }
        }
      }
    }
</script>

<style lang="scss">
  // start heading block
  .contact-text {
    margin-top: 100px;
    color: #000;
    text-align: center;

    p {
      font-size: 1.3rem;
    }
  }

  .call-btn {
    text-decoration: none;
    background-color: #0A8000;
    color: #fff;
    padding: 10px 20px;
    font-size: 20px;
    text-transform: uppercase;

    &:hover {
      background-color: #0CA222;
    }
  }

  // start of form block
  .contact-form-main {
    width: 70%;
    margin: 100px auto 60px auto;
    padding: 30px;
    background: #adadad;

      &-margin-bottom {
        margin-bottom: 45px;
      }

      @include atMedium {
        width: 500px;
      }
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
      color: #000;
  }

  .text-area {
      overflow: hidden;

      &:focus {
        background-color: #E8F0FE;
      }
  }

  input::placeholder,
  textarea::placeholder {
    color: #FFF;
  }

  // submit block
  .submit {
      background-color: #3D3D3D;
      border: 1px solid #3D3D3D;
      display: block;
      cursor: pointer;
      color: #FFFFFF;
      font-family: 'Open Sans Condensed', sans-serif;
      font-size: 14px;
      padding: 8px 18px;
      text-decoration: none;
      text-transform: uppercase;
      width: 50%;
      margin: 0 auto;
  }

  .submit:hover {
      background-color:$mainDarkerGrey;
      border: 1px solid $mainDarkerGrey;
  }

  // err message block
  .error {
    background-color: red;
    padding: 10px;
    color: #fff;
    text-align: center;
  }

  // success message block
  .success {
    background-color: #0A8000;
    padding: 10px;
    color: #FFF;
    text-align: center;
  }



</style>
