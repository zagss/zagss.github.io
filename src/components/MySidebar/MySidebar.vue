<template>
  <div class="side-bar">
    <h5><router-link to="/tags">FEATURED TAGS</router-link></h5>
    <div class="tags">
      <router-link class="tag" v-for="(item, index) in tags" :key="index" :to="'/tags/' + item.name">{{item.name}}</router-link>
    </div>
    <h5><router-link to="/about">ABOUT ME</router-link></h5>
    <div class="avatar">
      <img src="https://avatars1.githubusercontent.com/u/20234305?s=460&v=4" alt="">
      <p>写写代码，做做设计，<br> 离开世界之前，一切都是过程</p>
    </div>
    <h5>FRIENDS</h5>
    <div class="friends">
      <a href="https://rzhengr.github.io/" target="_blank">蒸蒸 ^ ^</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'side-bar',
  data () {
    return {
      tags: []
    }
  },
  methods: {
    handleLoadArticles () {
      this.tags = [{name: '知乎'}, {name: 'Android'}, {name: '交互设计'}, {name: '阿里巴巴'}, {name: '前端开发'}]
    }
  },
  created () {
    this.handleLoadArticles()
  }
}
</script>

<style lang="scss" scoped>
@import '~@/common/scss/const.scss';

.side-bar {
    height: 800px;
    padding: 30px 30px 0 15px;
    h5 {
      color: #ccc;
      margin: 10px 0 20px;
      &:not(:first-child) {
        padding-top: 20px;
        border-top: 1px solid #eee;
        width: 80%;
      }
    }
  .tag{
    display: inline-block;
    border: 1px solid $color-text;
    padding: 0 10px;
    line-height: 24px;
    font-size: 12px;
    margin: 0 8px 6px 0;
    border-radius: 100px;
    &:hover {
      border-color: $color-text-hover;
    }
  }
  .avatar {
    img {
      display: block;
      width: 60%;
      margin-bottom: 20px;
      border-radius: 5px;
    }
    p {
      margin-bottom: 20px;
      color: #bfbfbf;
      line-height: 1.7;
    }
  }
  .friends {
    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
