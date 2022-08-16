<template>
  <section class="app-main">
    <div class="container">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </div>
    <nav-bar />
  </section>
</template>

<script>
import NavBar from '../components/navbar'
export default {
  name: 'VueLayout',
  components: { NavBar }
}
</script>

<style lang="scss" scoped>
.app-main {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: calc(100% - 60px) 60px;
  // background: url("../assets/public/bg.png");
  // background-size: 100% 100%;
}
</style>
