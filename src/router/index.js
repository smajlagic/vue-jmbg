import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    meta: {
      title: 'JMBG | Vue.js',
      metaTags: [
        {
          name: 'description',
          content: 'Analiza jedinstvenog matičnog broja građana'
        },
        {
          property: 'og:description',
          content: 'Analiza jedinstvenog matičnog broja građana'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    meta: {
      title: 'Informacije o JMBG | Vue.js',
      metaTags: [
        {
          name: 'description',
          content: 'Dodatne informacije o analizi jedinstvenog matičnog broja građana'
        },
        {
          property: 'og:description',
          content: 'Dodatne informacije o analizi jedinstvenog matičnog broja građana'
        }
      ]
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  if(!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');
    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  .forEach(tag => document.head.appendChild(tag));

  next();

});

export default router

