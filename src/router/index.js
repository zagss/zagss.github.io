import Vue from 'vue'
import Router from 'vue-router'
import { articleRepos } from '@/config/env'

Vue.use(Router)

const Home = () => import('@/components/Home/Home')
const BlogArticles = () => import('@/components/Home/BlogArticles')
const Article = () => import('@/components/Home/Article')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          name: BlogArticles.name,
          component: BlogArticles,
          meta: {
            repository: articleRepos[0]
          }
        },
        {
          path: ':number',
          name: `${articleRepos[0].key}-${Article.name}`,
          component: Article,
          meta: {
            repository: articleRepos[0]
          }
        }
      ]
    }
  ]
})
