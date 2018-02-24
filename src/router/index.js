import Vue from 'vue'
import Router from 'vue-router'

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
          component: BlogArticles
        },
        {
          path: ':number',
          name: Article.name,
          component: Article
        }
      ]
    }
  ]
})
