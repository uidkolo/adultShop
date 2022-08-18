<template>
  <section class="app-main">
    <nav-bar />
    <div class="container">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </div>
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
  grid-template-columns: 90px calc(100% - 90px);
  .container{
    padding: 5px;
    overflow-y: auto;
  }
}
</style>
