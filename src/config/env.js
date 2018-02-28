import { convertBlogArticle } from '@/common/js/util'

const BASEURL = 'https://api.github.com'
const NAME = 'zagss.github.io'
const OWNER = 'zagss'
const ACCESS_TOKEN = 'f20d5ff9848c0b60466a' + '6b10a1fb07c5213f2229'

export const GitConfig = {
  BASEURL,
  OWNER,
  NAME,
  ACCESS_TOKEN
}

export const articleRepos = [
  { key: 'blog', name: 'zagss.github.io', resolveArticle: convertBlogArticle }
]
