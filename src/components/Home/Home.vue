<template>
  <div class="main">
    <transition name="fade" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>

</style>


