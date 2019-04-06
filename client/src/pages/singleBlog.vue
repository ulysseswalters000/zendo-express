<template lang="pug">
  div
    div.blog
      h1.title.margin-bottom {{ title }}
      div.line
      img.margin-bottom(:src="blog.imgUrl" :alt="getTitle")
      div.margin-bottom(v-html="blog.content")
      button.btns.margin-bottom(v-if="currentUser" @click.prevent="editBlog(id)") Edit
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

import { mapState } from 'vuex'

const fb = require('../firebaseConfig')

export default {
  name: 'singleBlog',
  components: {
  },
  data () {
    return {
      id: this.$route.params.id,
      blog: {},
      title: ''
    }
  },
  methods: {
    editBlog(id) {
      this.$router.push(`/blog/edit/${id}`)
    }
  },
  computed: {
    getTitle() {
      let title = this.blog.content.match(/>([^>]+)</)[1]
      this.title = title
      return title
    },
    ...mapState(['currentUser'])
  },
  created () {
    fb.blogCollection.doc(this.id).get().then( doc => {
      this.blog = doc.data();
    }).catch( err => {
      console.log(err);
    })
  }
}
</script>

<style lang="scss">

.blog {
  padding-top: 120px;
  max-width: 1200px;
  margin: 0 auto;

  .ql-align-center {
    text-align: center;
  }
}



</style>
