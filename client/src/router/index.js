import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "contact" */ '@/pages/ContactForm.vue')
    },
    {
      path: '/pricing',
      name: 'pricing',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "pricing" */ '@/pages/Pricing.vue')
    },
    {
      path: '/webdesign',
      name: 'webdesign',
      props: {title: 'Web Design',
              imgUrl: require( '../assets/images/webdesignheader.jpg'),
              content: {price: 'webdesign'}
            },
      component: () => import(/* webpackChunkName: "webdesign" */ '@/pages/FeatureTemplate.vue')
    },
    {
      path: '/socialmedia',
      name: 'socialmedia',
      props: {title: 'Social Media Management',
              imgUrl: require( '../assets/images/neverstress.jpg'),
              content: {price: 'from router'}
            },
      component: () => import(/* webpackChunkName: "webdesign" */ '@/pages/FeatureTemplate.vue')
    }
  ]
})
