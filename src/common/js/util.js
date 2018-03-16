import marked from 'marked'

export const convertBlogArticle = function (article) {
  const articleBody = marked(article.body)
  const summary = articleBody.split(/<!--\s*summary\s*-->/g)[1]
  const splitBanner = articleBody.split(/<!--\s*banner\s*-->/g)
//   const banner = splitBanner[1].match(/http[^"]+/)[0]
//   const thumb = banner.replace(/(750|1024\*1024)$/, '256')
  const body = splitBanner[2]

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const createdAtEn = new Date(article.created_at).toLocaleDateString('en-US', options)

  return Object.assign(article, {
    body,
    summary,
    // thumb,
    // banner,
    createdAt: article.created_at.split('T')[0],
    createdAtEn: createdAtEn
  })
}
