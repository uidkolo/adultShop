<template>
  <section class="app-main">
    <div class="head">
      <img class="logo" src="../assets/logo.png" alt="">
      <div class="h24">
        <img src="../assets/24h.png" alt="">
      </div>
    </div>
    <div class="box">
      <nav-bar />
      <div class="container">
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <router-view />
          </keep-alive>
        </transition>
      </div>
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
  grid-template-rows: 50px calc(100% - 50px);
  .head{
    padding: 0 10px 0 5px;
    display: flex;
    align-items: center;
    background: #222831;
    font-size: 18px;
    color: white;
    line-height: 50px;
    text-align: center;
    .logo{
      height: 40px;
    }
    .h24{
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        height: 20px;
      }
    }
  }
  .box{
    height: 100%;
    display: grid;
    grid-template-columns: 90px calc(100% - 90px);
    .container{
      padding: 5px;
      overflow-y: auto;
    }
  }
}
</style>
