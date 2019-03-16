import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import Data from '@/pages/featureData/data'
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
      props: {
        article: {
          title: 'Web Design',
          imgUrl: require( '../assets/images/webdesignheader.jpg'),
          svgUrl: require('../assets/images/featureGraphics/coding.svg'),
          paragraphs: Data.webData
        }
      },
      component: () => import(/* webpackChunkName: "webdesign" */ '@/pages/FeatureTemplate.vue')
    },
    {
      path: '/socialmedia',
      name: 'socialmedia',
      props: {
        article: {
          title: 'Social Media Management',
          imgUrl: require( '../assets/images/neverstress.jpg'),
          svgUrl: require('../assets/images/featureGraphics/digital_marketing.svg'),
          paragraphs: Data.socialData
        }
      },
      component: () => import(/* webpackChunkName: "socialMedia" */ '@/pages/FeatureTemplate.vue')
    },
    {
      path: '/seo',
      name: 'seo',
      props: {
        article: {
          title: 'Search Engine Optimization',
          imgUrl: require( '../assets/images/seo.jpg'),
          svgUrl: require('../assets/images/featureGraphics/seo.svg'),
          paragraphs: Data.seoData
        }
      },
      component: () => import(/* webpackChunkName: "SEO" */ '@/pages/FeatureTemplate.vue')
    },
    {
      path: '/photoandvideo',
      name: 'photoAndVideo',
      props: {
        article: {
          title: 'Photography and Videography',
          imgUrl: require( '../assets/images/photoandvideo.jpg'),
          svgUrl: require('../assets/images/featureGraphics/video.svg'),
          paragraphs: Data.photoAndVideoData
        }
      },
      component: () => import(/* webpackChunkName: "SEO" */ '@/pages/FeatureTemplate.vue')
    },
    {
      path: '/reputationmanagement',
      name: 'reputationManagement',
      props: {
        article: {
          title: 'Reputation Management',
          imgUrl: require( '../assets/images/reputationmanagement.jpg'),
          svgUrl: require('../assets/images/featureGraphics/branding.svg'),
          paragraphs: Data.reputationData
        }
      },
      component: () => import(/* webpackChunkName: "SEO" */ '@/pages/FeatureTemplate.vue')
    },
    {
      path: '/contentandgraphic',
      name: 'contentAndGraphic',
      props: {
        article: {
          title: 'Content & Graphic Creation',
          imgUrl: require( '../assets/images/reputationmanagement.jpg'),
          svgUrl: require('../assets/images/featureGraphics/blogging.svg'),
          paragraphs: Data.contentAndGraphicData
        }
      },
      component: () => import(/* webpackChunkName: "SEO" */ '@/pages/FeatureTemplate.vue')
    }
  ]
})
