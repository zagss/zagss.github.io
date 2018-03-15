import Vue from 'vue'
import Vuex from 'vuex'
import { articleRepos } from '@/config/env'

Vue.use(Vuex)

const articles = {}
articleRepos.forEach(item => {
  articles[item.key] = []
})

export default new Vuex.Store({
  state: {
    articles,
    comments: {}
  },
  mutations: {
    updateSpecifyArticles (state, { key, articles }) {
      state.articles[key] = articles
    },
    updateCommentsByID (state, { id, comments }) {
      state.comments[id] = comments
    }
  }
})
