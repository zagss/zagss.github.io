<template>
  <div>
    <div class="intro">
      <div class="site-header">
        <h1>Kael Blog</h1>
        <span>一生想做浪漫极客</span>
      </div>
    </div>
    <div class="container">
      <div class="article-box">
        <ul class="article-list fl">
          <router-link 
            :to="`${article.number}`"
            tag="li"
            class="article-item"
            v-for="article of articles"
            :key="article.id"
            append>
            <h2 class="article-title">{{ article.title }}</h2>
            <div class="article-content nowrap-4" v-html="article.summary"></div>
            <div class="article-meta">
              <i class="author">Posted by Kael</i>
              <div class="mark">
                <i class="fa fa-calendar" aria-hidden="true"></i>
                <span>{{ article.createdAt }}</span>
                <i class="fa fa-commenting" aria-hidden="true"></i>
                <span>{{ article.comments }}</span>
                <i class="fa fa-tag" aria-hidden="true"></i>
                <span v-for="label of article.labels" :key="label.id" :style="{ color: `#${label.color}` }">{{ label.name }}</span>
              </div>
            </div>
          </router-link>
        </ul>
        <my-sidebar></my-sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import MySidebar from '@/components/MySidebar/MySidebar'
import { getArticles } from '@/api/fetch'

export default {
  name: 'Blog-Articles',
  components: {
    MySidebar
  },
  data () {
    return {
      articles: []
    }
  },
  methods: {
    async handleLoadArticles () {
      const { resolveArticle, key: repoKey, name: repoName } = this.$route.meta.repository
      let res = await getArticles(repoName)
      this.articles = [...this.articles, ...res.map(resolveArticle)]
      this.$store.commit('updateSpecifyArticles', { key: repoKey, articles: this.articles })
    }
  },
  created () {
    this.handleLoadArticles()
  }
}
</script>

<style lang="scss" scoped>
@import '~@/common/scss/const.scss';

.intro {
  background: url('../../common/img/home-bg.jpg') no-repeat center center;
  background-size: cover;
  .site-header {
    padding: 95px 0 70px;
    color: #fff;
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
  }
}
.article-box {
    display: flex;
    flex-direction: column;
    text-align: left;
    .article-list {
        flex: 3;
        padding: 0 15px;
        .article-item {
            border-bottom: 1px solid #eee;
            cursor: pointer;
            &:hover {
              color: $color-text-hover
            }
        }
    }
    .side-bar {
        flex: 1
    }
    .article-title {
        font-size: 21px;
        line-height: 1.3;
        margin: 30px 0 8px;
        font-weight: 700
    }
    .article-content {
        height: 90px;
        font-size: 13px;
        color: #a3a3a3;
        line-height: 1.7;
        &:hover {
          color: $color-text-hover
        }
    }
}

.article-meta {
    color: #ccc;
    font-size: 16px;
    margin: 0 0 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    line-height: 1.7;
    .author {
        font-family: Lora,'Times New Roman',serif;
    }
    .mark {
        font-size: 14px;
        i {
            margin: 0 2px 0 12px;
        }
    }
}

@media (min-width: 768px) {
  .intro {
    .site-header {
      padding: 150px 0;
      h1 {
        font-size: 80px;
      }
    }
  }
  .article-box {
    flex-direction: row;
    .article-title {
        font-size: 26px;
        margin-bottom: 10px;
    }
    .article-content {
        font-size: 14px;
    }
    .article-meta {
        font-size: 18px;
    }
  }
}
</style>


