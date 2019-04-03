<template lang="pug">
  div
    div.most-recent-blog
      img(
        :src="blogs[0].imgUrl"
        )
      h1.mr-blog-title {{ blogs[0].title }}
      p(
        v-for="(para, index) in blogs[0].body"
        )
        | {{ para }}
      img(
        class="mr-blog-image"
        )
      p.blog-body
    div.flex
      div.container(
        v-for="(blog, index) in blogs"
        @click="singleBlog(id[index])"
        v-if="index >= 1"
        )
        div.overlay
          h2 read more
          button(v-if="currentUser" @click='deleteBlog(id[index])')
            i.fas.fa-times
        img(:src="blog.imgUrl")
        h1 {{ blog.title }}
        p {{ blog.body[0].slice(0,10) + '...' }}

</template>

<script>
import { store } from '../store'
import { mapState } from 'vuex'
const fb = require('../firebaseConfig')

export default {
  name: 'ShowBlogs',
  components: {
  },
  data () {
    return {
      id: [],
      blogs: [],
    }
  },
  methods: {
    singleBlog(id){
      console.log(id);
      this.$router.push(`/blog/${id}`)
    },
    deleteBlog(id) {
      console.log(id);
      let answer = confirm("You are about to delete this. Continue?")
      if (answer){
        fb.blogCollection.doc(id).delete().then( () => {
          console.log("Blog deleted");
          this.$router.push("/blogs")
        }).catch( err => {
          console.log("error deleting document", "=>", err);
        })
      } else {

      }
    }
  },
  created () {
    fb.blogCollection.orderBy('createdOn', 'desc').get().then( blogs => {
      blogs.forEach(blog => {
        this.id.push(blog.id)
        this.blogs.push(blog.data())
      }).catch( err => {
        console.log(err);
      })

    })
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>

<style lang="scss" scoped>
  .most-recent-blog {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 120px;
    background-color: red;
  }
  .hover-blog:hover {
    background-color: #eee;

  }
  .flex {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
  }


  .container {
    width: 80%;
    margin: 0 auto;
    position: relative;

    @include atMedium {
      width: 44%;
    }

    @include atLarge {
      width: 30%;
    }
  }

  .overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    visibility: hidden;
  }

  .container:hover > .overlay {
    background-color: rgba(#333, 0.9);
    color: #ff0000;
    visibility: visible;
  }
</style>
