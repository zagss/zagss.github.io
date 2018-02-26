import fetch from './service'
import { GitConfig } from '@/config/env'

// 获取github issues
export const getArticles = (name) => fetch({
  type: 'get',
  url: `/repos/${GitConfig.OWNER}/${name}/issues`,
  data: {
    page: 1,
    per_page: 5,
    filter: 'created'
  }
})

// 获取github by number
export const getArticleByNumber = (repo, number) => fetch({
  type: 'get',
  url: `/repos/${GitConfig.OWNER}/${repo}/issues/${number}`
})
