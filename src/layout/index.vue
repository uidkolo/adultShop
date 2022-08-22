<template>
  <section class="app-main">
    <div class="head">
      <div class="back" v-if="showBack" @click="$router.back()">
        <img class="icon" src="../assets/back.png" alt="">
        <span>返回</span>
      </div>
      <img class="logo" src="../assets/logo.png" alt="">
      <div class="h24">
        <img src="../assets/24h.png" alt="">
      </div>
    </div>
    <div class="box" :class="{ hideNavbar: showNavbar }">
      <nav-bar v-if="showNavbar" />
      <div class="container">
        <transition name="fade-transform" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from '../components/navbar'
export default {
  name: 'VueLayout',
  components: { NavBar },
  computed: {
    pageName(){
      return this.$route.name
    },
    showBack(){
       return ['cart', 'detail'].includes(this.pageName)
    },
    showNavbar(){
      const result = ['cart', 'detail'].includes(this.pageName)
      return !result
    },
  },
}
</script>

<style lang="scss" scoped>
.app-main {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 50px calc(100% - 50px);
  .head{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #222831;
    font-size: 18px;
    color: white;
    line-height: 50px;
    text-align: center;
    position: relative;
    .back{
      height: 50px;
      padding: 0 5px;
      color: #cdcdcd;
      font-size: 14px;
      position: absolute;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        color: white;
        margin-left: 5px;
      }
      .icon{
        height: 16px;
        position: relative;
        bottom: 1px;
      }
    }
    .logo{
      height: 40px;
    }
    .h24{
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 10px;
      img{
        height: 12px;
      }
    }
  }
  .box{
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    .container{
      overflow-y: auto;
    }
  }
  .hideNavbar{
    grid-template-columns: 90px calc(100% - 90px);
  }
}
</style>
