import { convertBlogArticle } from '@/common/js/util'

const BASEURL = 'https://api.github.com'
const NAME = 'zagss.github.io'
const OWNER = 'zagss'
const ACCESS_TOKEN = '6932b35db6c22c4aca126cdf95225c2d154633e8'

export const GitConfig = {
  BASEURL,
  OWNER,
  NAME,
  ACCESS_TOKEN
}

export const articleRepos = [
  { key: 'blog', name: 'zagss.github.io', resolveArticle: convertBlogArticle }
]
