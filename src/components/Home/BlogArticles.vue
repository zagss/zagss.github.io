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
          <li class="article-item">
            <h2 class="article-title">饿了么的 PWA 升级实践</h2>
            <p class="article-content nowrap-4">
        最近在一直在为面试做准备，搜了很多大佬记录的面试经验和面试内容，对自己不太熟悉和已经记忆模糊的知识点内容进行复习巩固，争取能够有一个好的状态。这篇文章以我的经验讲述了我是如何从源码的角度了解到 webpack 插件机制，也简单描述了 webpack 编译构建的机制。</p>
            <div class="article-meta">
              <i class="author">Posted by Kael</i>
              <div class="mark">
                <i class="fa fa-calendar" aria-hidden="true"></i>
                <span>2017-03-10</span>
                <i class="fa fa-commenting" aria-hidden="true"></i>
                <span>22</span>
                <i class="fa fa-tag" aria-hidden="true"></i>
                <span>生活</span>
              </div>
            </div>
          </li>
        </ul>
        <my-sidebar></my-sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import MySidebar from '@/components/MySidebar/MySidebar'

export default {
  name: 'Blog-Articles',
  components: {
    MySidebar
  }
}
</script>

<style lang="scss" scoped>
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
        .article-item {
            border-bottom: 1px solid #eee;
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


