<template lang="pug">
  div.padding-top
    h1.heading-title  Our Most
      span.font-weight  recent Posts
    div.line
    div.most-recent-blog
      button.delete(v-if="currentUser" @click='deleteBlog(id[0])')
        i.fas.fa-times
      button.edit(v-if="currentUser" @click='editBlog(id[0])')
        i.fas.fa-pencil-alt
      div.overlay(v-if="!currentUser" @click="singleBlog(id[0])")
        h2 read more

      img(
        :src="blogs[0].imgUrl"
        )
      h1(v-html="blogs[0].content.match(/>([^>]+)</)[1].slice(0,100) + '...'"
          )
      p.hidden-on-small ...read more
    div.line
    div.flex-showBlogs
      div.container(
        v-for="(blog, index) in blogs"
        v-if="index >= 1"
        )
        button.delete(v-if="currentUser" @click='deleteBlog(id[index])')
          i.fas.fa-times
        button.edit(v-if="currentUser" @click='editBlog(id[index])')
          i.fas.fa-pencil-alt
        div.overlay(v-if="!currentUser" @click="singleBlog(id[index])")
          h2 read more

        img(:src="blog.imgUrl")
        h1.align-left(v-html="blog.content.match(/>([^>]+)</)[1].slice(0,100) + '...'")
        p.hidden-on-small ...read more


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
        fb.blogCollection.doc(id).delete()
          .then( () => {
            console.log("Blog deleted");
            this.$router.push("/blogs")
          })
          .catch( err => {
            console.log("error deleting document", "=>", err);
          })
      } else {

      }
    },
    editBlog(id) {
      this.$router.push(`/blog/edit/${id}`)
    }
  },
  created () {
    fb.blogCollection.orderBy('createdOn', 'desc').get()
      .then( blogs => {
        blogs.forEach(blog => {
          this.id.push(blog.id)
          this.blogs.push(blog.data())
        })
      .catch( err => {
        console.log(err);
      })

    })
    this.blogs.forEach(blog => {
      console.log(blog);
    })
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>

<style lang="scss">
  .padding-top {
    padding-top: 120px;
  }

  .heading-title {
    padding-top: 60px;
    margin-bottom: 60px;
    font-family: SweetSans-Thin;
    text-transform: uppercase;
  }

  .font-weight {
    font-weight: 300;
  }

  .hidden-on-small {
    text-align: center;

    @include atMedium {
      display: none;
    }
  }

  .line {
    border: 6px solid #444;
    max-width: 1200px;
    margin: 0 auto 30px auto;
  }

  .most-recent-blog {
    max-width: 1200px;
    margin: 0 auto 30px auto;
    background-color: #eee;
    position: relative;
    padding: 20px 10px;
  }
  .hover-blog:hover {
    background-color: #eee;

  }
  .flex-showBlogs {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;

  }

  img {
    width: 100%;
    max-height: 627px;
  }

  h1 {
    text-align: center;
  }


  .container {
    width: 80%;
    margin: 30px auto 30px auto;
    position: relative;
    border: 1px solid black;

    @include atMedium {
      width: 44%;
    }

    @include atLarge {
      width: 30%;
      margin: 30px 1%;
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

  .most-recent-blog:hover > .overlay {
    background-color: rgba(#333, 0.9);
    color: #ff0000;
    visibility: visible;
  }

  .align-left {
    text-align: left;
    padding: 0 10px;
  }

  .delete {
    margin-left: 20px;
    padding: 0;
    border: none;
    background-color: red;


    &:hover {
      background-color: #555;
    }

    .fas.fa-times {
      color: black;
      padding: 10px;

      &:hover {
        color: red;
      }
    }
  }

  .edit {
    margin-left: 20px;
    padding: 0;
    border: none;
    background-color: yellow;


    &:hover {
      background-color: blue;
    }

    .fas.fa-pencil-alt {
      color: black;
      padding: 10px;

      &:hover {
        color: yellow;
      }
    }
  }




</style>
