<template>
  <div class="article">
    <div class="intro">
      <div class="container">
        <div class="site-header">
          <div class="tags">
            <a class="tag" href="" title="知乎">知乎</a>
            <a class="tag" href="" title="知乎">前端开发</a>
            <a class="tag" href="" title="知乎">UX Design</a>
          </div>
          <h1>{{ article.title }}</h1>
          <i class="author">Posted by Kael on {{ article.createdAtEn }}</i>
        </div>
      </div>
    </div>
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

<style lang="scss" scoped>
.intro {
  background: url('../../common/img/home-bg.jpg') no-repeat center center;
  background-size: cover;
  .site-header {
    padding: 95px 16% 70px;
    color: #fff;
    text-align: left;
    h1 {
      font-size: 50px;
      font-weight: 700;
    }
    span {
      display: block;
      font-size: 18px;
      font-weight: 300;
      margin: 10px 0 0;
    }
    .tag {
      &:hover {
        border-color: #fff;
        color: #fff;
        background-color: rgba(255, 255, 255, .5)
      }
    }
  }
}
</style>
