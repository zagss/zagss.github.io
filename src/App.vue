<template>
  <div id="app">
    <my-header></my-header>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader/MyHeader'
import MyFooter from '@/components/MyFooter/MyFooter'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style lang="scss">
@import 'common/scss/index.scss';

#app {
  font-family: -apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,"PingFang SC","Hiragino Sans GB",STHeiti,"Microsoft YaHei","Microsoft JhengHei","Source Han Sans SC","Noto Sans CJK SC","Source Han Sans CN","Noto Sans SC","Source Han Sans TC","Noto Sans CJK TC","WenQuanYi Micro Hei",SimSun,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
