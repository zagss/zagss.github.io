import { convertBlogArticle } from '@/common/js/util'

const BASEURL = 'https://api.github.com'
const NAME = 'zagss.github.io'
const OWNER = 'zagss'
const ACCESS_TOKEN = '962010254237814f6944a165d22664dc3d8f13f9'

export const GitConfig = {
  BASEURL,
  OWNER,
  NAME,
  ACCESS_TOKEN
}

export const articleRepos = [
  { key: 'blog', name: 'zagss.github.io', resolveArticle: convertBlogArticle }
]
