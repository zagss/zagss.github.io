import { convertBlogArticle } from '@/common/js/util'

const BASEURL = 'https://api.github.com'
const NAME = 'zagss.github.io'
const OWNER = 'zagss'
const ACCESS_TOKEN = '22a3585c6a45137ce709e92a20d6c66b7388ffa8'

export const GitConfig = {
  BASEURL,
  OWNER,
  NAME,
  ACCESS_TOKEN
}

export const articleRepos = [
  { key: 'blog', name: 'zagss.github.io', resolveArticle: convertBlogArticle }
]
