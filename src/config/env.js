import { convertBlogArticle } from '@/common/js/util'

const BASEURL = 'https://api.github.com'
const NAME = 'zagss.github.io'
const OWNER = 'zagss'
const ACCESS_TOKEN = '173519ec91b171f2eb88542c06de364590fff748'

export const GitConfig = {
  BASEURL,
  OWNER,
  NAME,
  ACCESS_TOKEN
}

export const articleRepos = [
  { key: 'blog', name: 'zagss.github.io', resolveArticle: convertBlogArticle }
]
