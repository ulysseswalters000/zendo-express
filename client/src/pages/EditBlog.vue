<template lang="pug">
  div#edit-blog
    div.padding-top
      img(:src="blog.imgUrl")
      quillEditor.width(v-model="content"
        ref="myQuillEditor"
        )
      button(@click='updateBlog(id)') Update
      
      
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
      content: ''
    }
  },
  methods: {
    updateBlog(id) {
      fb.blogCollection.doc(id).update({content: this.content})
      .then( () => {
        this.$router.push(`/blog/${id}`)
      })
      .catch( err => {
        console.log(err.message);
      })
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
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
</style>
