<template>
  <div class="article">
      <div v-html="article.body"></div>
  </div>
</template>

<script>
import { getArticleByNumber } from '@/api/fetch'

export default {
  name: 'Article',
  data () {
    return {
      article: {}
    }
  },
  methods: {
    findArticleByNumber () {
      const num = parseInt(this.$route.params.number)
      console.log(num)
      if (this.$store.state.articles.length) {
        return this.$store.state.articles[this.$route.meta.repository.key].find(({ number }) => number === num)
      }
      return null
    },
    async handleLoadArticle () {
      const { params, meta } = this.$route
      const { resolveArticle, name: repoName } = meta.repository
      let res = await getArticleByNumber(repoName, params.number)
      this.article = resolveArticle(res)
    }
  },
  created () {
    const article = this.findArticleByNumber()
    if (article) return (this.article = article)
    this.handleLoadArticle()
  }
}
</script>
