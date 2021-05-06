import Router from 'vue-router'
import Vue from 'vue'

import Main from '@/views/Main'
import Login from '@/views/Login'
import Register from '@/views/Register'
import ArtistList from '@/views/ArtistList'
import ArticleList from '@/views/ArticleList'
import UserList from '@/views/UserList'
import Article from '@/views/Article'
import Artist from '@/views/Artist'

import auth from '@/api/auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      component: Main,
      path: '/',
    },
    {
      component: UserList,
      path: '/users',
    },
    {
      component: Login,
      path: '/login',
    },
    {
      component: Register,
      path: '/register',
    },
    {
      component: ArticleList,
      path: '/articles',
    },
    {
      component: ArtistList,
      path: '/artists',
    },
    {
      component: Artist,
      path: `/artist/:id`,
    },
    {
      component: Article,
      path: `/article/:id`,
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(route => route.meta.auth)) {
    try {
      await auth.get(`/users/${localStorage.getItem('vuejs_user_id')}`)
      return next()
    } catch (e) {
      localStorage.removeItem('vuejs_user_id')
      localStorage.removeItem('vuejs_token')
      return next('/login')
    }
  } else {
    return next()
  }
})

export default router
