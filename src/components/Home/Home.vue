<template>
  <div class="main">
    <transition name="fade" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
      <keep-alive :include="keepAliveComps">
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      keepAliveComps: ['Blog-Articles']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
