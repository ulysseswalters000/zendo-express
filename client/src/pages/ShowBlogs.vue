<template lang="pug">
  div
    Navigation
    div.most-recent-blog
      img(:src="blogs[0].image")
      h1.mr-blog-title {{ blogs[0].title }}
      p(v-for="(para, index) in blogs[0].body") {{ para }}
      img(class="mr-blog-image")
      p.blog-body
    div.hover-blog(v-for="(blog, index) in blogs" @click="singleBlog(id[index])")
      h1 {{ blog.title }}
      p(v-for="para in blog.body") {{ para }}
    h1 hello
    TheFooter
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import TheFooter from '@/components/TheFooter.vue'
const fb = require('../firebaseConfig')

export default {
  name: 'ShowBlogs',
  components: {
    Navigation,
    TheFooter
  },
  data () {
    return {
      id: [],
      blogs: []
    }
  },
  methods: {
    singleBlog(id){
      console.log(id);
      this.$router.push(`/blog/${id}`)
    }
  },
  created () {
    fb.blogCollection.orderBy('createdOn').get().then( blogs => {
      blogs.forEach(blog => {
        this.id.push(blog.id)
        this.blogs.push(blog.data())
      })
      this.id.reverse()
      this.blogs.reverse()
    })
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
</style>
