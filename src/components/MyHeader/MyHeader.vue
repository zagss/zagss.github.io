<template>
  <div class="my-header clearfix">
      <div class="navbar-header">
          <button type="button" class="navbar-toggle">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" :to="{ name: 'App' }">Kael Blog</router-link>
      </div>
      <div class="navbar-menu">
          <div class="navbar-collapse">
              <ul class="navbar-nav clearfix">
                  <li><router-link :to="{ name: 'App' }">HOME</router-link></li>
                  <li><router-link :to="{ name: 'App' }">ABOUT</router-link></li>
                  <li><router-link :to="{ name: 'App' }">PORTFOLIO</router-link></li>
                  <li><router-link :to="{ name: 'App' }">TAGS</router-link></li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>

<style lang="scss" scoped>
.my-header {
    height: 60px;
    padding: 0 15px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    a {
        color: #fff;
    }
    .navbar-header, .navbar-nav {
        height: 100%;
        line-height: 60px;
    }
    .navbar-brand {
        font-weight: 800;
        font-size: 18px;
        float: left;
    }
    .navbar-toggle {
        position: relative;
        float: right;
        background-color: transparent;
        border-color: transparent;
        padding: 19px 16px;
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            border: 0;
        }
    }
}
@media (min-width: 768px) {
    .navbar-header {
        float: left;
    }
    .navbar-toggle {
        display: none;
    }
    .navbar-nav {
        float: right;
        li {
            float: left;
            a {
                padding: 20px;
                font-size: 12px;
                font-weight: 800;
                letter-spacing: 1px;
            }
        }
    }
}

@media only screen and (max-width: 767px) {
    .navbar-menu {
        transform: scaleX(0)
    }
    .navbar-collapse {
        position: absolute;
        right: 0;
        background: #fff;
        border-radius: 2px;
        width: 170px;
        transform: scaleY(0);
        height: 0;
    }
}

</style>
