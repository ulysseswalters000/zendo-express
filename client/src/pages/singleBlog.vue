<template lang="pug">
  div
    div.blog
      div.line
      img.margin-bottom(:src="blog.imgUrl" :alt="getTitle")
      div.line
      div.content.margin-bottom(v-html="blog.content")
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
  params: [],
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

<style lang="scss" scoped>

.blog {
  padding-top: 50px;
  max-width: 1100px;
  margin: 0 auto;

  @include atSmall {
    padding-top: 120px;

  }

  .line {
    width: 100%;
    height: 3px;
    background-color: black;
    border: 1px black solid;
    margin: 20px 0;
  }

  .ql-align-center {
    text-align: center;
  }
}

.content {
  max-width: 80%;
  margin: 0 auto 40px auto;

  /deep/ h1 {
    text-align: center;
  }

  /deep/ p {
    font-size: 1.1rem;

    img {
      float: left;
      width: 50%;
    }
  }

  /deep/ a {
    text-decoration: none;
    color: $mainDarkerColor;
  }
}

</style>
