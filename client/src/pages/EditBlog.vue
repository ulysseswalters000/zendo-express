<template lang="pug">
  div#edit-blog
    div.padding-top
      div.page-container
        h1.title.margin-bottom {{ title }}
        div.line
        img.featured-image(:src="blog.imgUrl" :alt="getTitle")
        label.own-line(for="upload") Change Main Image: This will delete the other from database
        input.margin-bottom(type='file' @change="handleFiles")
        quillEditor.editor(v-model="content"
          ref="myQuillEditor"
          )
        button.btns.margin-bottom(@click='updateBlog(id)') Update
        button.btns.margin-bottom(@click='singleBlog(id)') View Blog
      
      
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import { quillEditor } from 'vue-quill-editor'
const fb = require('../firebaseConfig');
export default {
  name: 'editBlog',
  components: {
    quillEditor
  },
  data () {
    return {
      id: this.$route.params.id,
      blog: {},
      content: '',
      title: ''
    }
  },
  methods: {
    updateBlog(id) {
      fb.blogCollection.doc(id).update({
        content: this.content,
        imgUrl: this.blog.imgUrl
      })
      .then( () => {
        this.$router.push(`/blog/${id}`)
      })
      .catch( err => {
        console.log(err.message);
      })
    },
    singleBlog(id) {
      this.$router.push(`/blog/${this.id}`)
    },
    handleFiles(e) {
      let file = e.target.files[0]
      let storageRef = fb.storage.ref(`blogImages/${file.name}`)
      storageRef.put(file)
      .then( (snapshot) => {
        storageRef.getDownloadURL().then( url => {
          this.blog.imgUrl = url
        })
      })
      .catch( err => {
        console.log(err.message);
      })
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    },
    getTitle() {
      let title = this.content.match(/>([^>]+)</)[1]
      this.title = title
      return title
    }
  },
  created() {
    fb.blogCollection.doc(this.id).get()
      .then( doc => {
        this.blog = doc.data();
        this.content = this.blog.content;
      })
      .catch( err => {
        console.log(err);
      })
  }
}
</script>

<style lang="scss">
.padding-top {
  padding-top: 120px;
}

.page-container {
  max-width: 1200px;
  margin: 0 auto;
}

.featured-image {
  margin: 30px auto;
}

.editor {
  margin: 0 auto 30px auto;
}

.btns {
  border: none;
  color: yellow;
  background-color: blue;
  padding: 10px; 
  text-transform: uppercase;
  
  &:last-child {
    margin-left: 20px;
  }
  
  &:hover {
    color: blue;
    background-color: yellow;
  }
}

.margin-bottom {
  margin-bottom: 30px;
}

.title {
  font-family: SweetSans-Thin;
  text-transform: uppercase;
  margin-top: 50px;
}

.own-line {
  display: block;
  margin-bottom: 10px;
}




</style>
