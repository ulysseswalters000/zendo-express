<template lang="pug">
  div.padding-top
    div.contact-container
      div.contact-card(v-for="(contact, index) in contacts")
        h2.contact-info DB ID:
          span {{ id[index] }}
        div.contact-btns-container
          button.contact-button(@click="deleteContact(index)")
            i.fas.fa-times.contact-delete-icon
          a.contact-button(:href="callContact(contact)")
            i.fas.fa-phone.contact-call-icon
        h2.contact-info Name:
          span {{ contact.name }}
        h2.contact-info E-Mail:
          span {{ contact.email }}
        h2.contact-info Tel:
          span {{ contact.number }}
        h2.contact-info Message:
          span {{ contact.message }}

</template>

<script>
const fb = require('../firebaseConfig')

export default {
  name: 'showContacts',
  components: {
  },
  data () {
    return {
      id: [],
      contacts: [],
    }
  },
  methods: {
    deleteContact(index) {
      let answer = confirm("You are about to delete this. Continue?")
      if (answer){
        fb.contactCollection.doc(this.id[index]).delete().then( () => {
          console.log("Document deleted");
          this.$router.push("/contacts")
        }).catch( err => {
          console.log("error deleting document", "=>", err);
        })
      } else {

      }
    },
    callContact(contact) {
      return `tel:${contact.number}`
    }
  },
  created () {
    fb.contactCollection.orderBy('createdOn').get().then( contacts => {
      contacts.forEach( contact => {
        this.id.push(contact.id)
        this.contacts.push(contact.data())
      })
      this.id.reverse()
      this.contacts.reverse()
    })
  }
}
</script>

<style lang="scss">
.padding-top {
  padding-top: 120px;
}

.contact-container {
  max-width: 1200px;
  margin: 30px auto;
}

.contact-card {
  background-color: #ccc;
  text-align: center;
  position: relative;
}

.contact-btns-container {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  flex-direction: column;

  a {
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
  }
}

.contact-button {
  border: none;
  padding: 0;
}


.contact-delete-icon {
  display: block;
  background-color: red;
  color: black;
  border: none;
  width: 100%;
  height: 100%;
  padding: 10px;

  &:hover {
    background-color: #444;
    color: red;
  }
}

.contact-call-icon {
  display: block;
  background-color: yellow;
  color: blue;
  border: none;
  padding: 10px;

  &:hover {
    background-color: blue;
    color: yellow;
  }
}

.contact-info {
  padding-top: 20px;
  font-family: SweetSans-Light;

  span {
    padding-left: 10px;
    font-family: SweetSans-Thin;
  }

  &:last-child {
    padding-bottom: 20px;
  }
}

</style>
