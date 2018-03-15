import fetch from './service'
import { GitConfig } from '@/config/env'

// 获取github issues
export const getArticles = (name, page = 1, size = 10) => fetch({
  type: 'get',
  url: `/repos/${GitConfig.OWNER}/${name}/issues`,
  data: {
    page: page,
    per_page: size,
    filter: 'created'
  }
})

// 获取github by number
export const getArticleByNumber = (repo, number) => fetch({
  type: 'get',
  url: `/repos/${GitConfig.OWNER}/${repo}/issues/${number}`
})
