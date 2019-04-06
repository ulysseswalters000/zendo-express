<template lang="pug">
  div.padding-top

    form(@submit.prevent)
      quillEditor.width(v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        )
      label(for="upload") Upload Main Image
      input(type='file' @change="handleFiles")
      button(@click.prevent="postBlog") Post Blog
    div.preview
      h1 Preview
      img(:src="imgUrl")
      div(v-html="content") {{ content }}
    p {{ body }}
    p {{ bodyItems }}
</template>

<script>
// Quill
  // require styles
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import { quillEditor } from 'vue-quill-editor'

const fb = require('../firebaseConfig')
export default {
  name: 'AddBlog',
  components: {
    quillEditor
  },
  data () {
    return {
      imgUrl: '',
      content: '<p>example content</p>',
      editorOption: { /* quill options */}
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  methods: {
    postBlog() {
      fb.blogCollection.add({
        createdOn: new Date(),
        content: this.content,
        imgUrl: this.imgUrl
      }).then( ref => {
        this.content = '<p>example content</p>'
        this.$router.push('/blogs')
      }).catch( err => {
        console.log(err);
      })
    },
    handleFiles(e) {
      let file = e.target.files[0]
      console.log(file);
      let storageRef = fb.storage.ref(`blogImages/${file.name}`)
      storageRef.put(file).then( (snapshot) => {
        storageRef.getDownloadURL().then( url => {
          this.imgUrl = url
        })
      }).catch( err => {
        console.log(err.message);
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.width {
  max-width: 1200px;
  margin: 0 auto 50px auto;
}
.padding-top {
  padding-top: 120px;
}
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
