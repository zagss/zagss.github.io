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
</style>
