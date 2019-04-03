<template lang="pug">
  div
    h1 hi
    h1 hi
    h1 hi
    div.card(v-for="(contact, index) in contacts")
      div.flex
        p {{ id[index] }}
        button.delete(@click="deleteContact(index)")
          i.fas.fa-times
      p {{ contact.name }}
      p {{ contact.email }}
      p {{ contact.number }}
      p {{ contact.message }}
    h1 hi

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
.card {
  background-color: #eee;
  text-align: center;
  max-width: 1200px;
}
.flex {
  display: flex;
  justify-content: center;
}
.delete {
  position: relative;
  background-color: red;
  justify-content: center;

  &:hover {
    background-color: #444;
    border: none;
    outline: none;

    .fas {
      color: red;
    }
  }

}
</style>
