<template lang="pug">
  div
    form(@submit.prevent)
      label(for="title") Title
      input.block(type="text" id="title" v-model="title")
      label(for="body") Body
      textarea(v-model="body[0]")
      div.flex(v-for="(notUsed, index) in bodyItems")
        textarea(type='text' v-model="body[index+1]")
      label(for="picture") Image Url
      input(type="text" v-model="imgUrl")
      button(@click.prevent="postBlog") Post Blog
    button(@click='addPara') Add para
    p {{ body }}
    p {{ bodyItems }}
</template>

<script>
const fb = require('../firebaseConfig')
export default {
  name: 'AddBlog',
  components: {
  },
  data () {
    return {
      title: '',
      body: [],
      bodyItems: [],
      imgUrl: ''
    }
  },
  methods: {
    addPara() {
      this.bodyItems.push(this.body.length)
    },
    postBlog() {
      fb.blogCollection.add({
        createdOn: new Date(),
        title: this.title,
        body: this.body,
        imgUrl: this.imgUrl
      }).then( ref => {
        this.title = ''
        this.body = []
        this.$router.push('/blogs')
      }).catch( err => {
        console.log(err);
      })
    }
  },
}
</script>

<style lang="scss" scoped>
form {
  padding-top: 120px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
}

.block {
  justify-content: center;
  display: block;
  flex-basis: 100%;
  margin-top: 20px;
}

label {
  flex-basis: 100%;
  text-align: left;
  margin-top: 20px;
}

textarea {
  flex-basis: 100%;
  margin-top: 20px;
}

div.flex {
  flex-basis: 100%;

  textarea {
    width: 100%;
  }
}

button {
  margin-top: 20px;
  flex-basis: 100%;

}

</style>
