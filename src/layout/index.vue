<template>
  <section class="app-main">
    <div class="head">
      <div class="name">
        <img class="logo" src="../assets/logo.png" alt="" />
        <span>橘色成人{{shopName}}</span>
      </div>
      <!-- <div class="h24">
        <img src="../assets/24h.png" alt="">
      </div> -->
    </div>
    <div class="notice">
      <van-notice-bar
        left-icon="volume-o"
        text="橘色成人面向全国招商加盟，拥有全国1000多家门店，橘色是中国性健康行业的领航者，股票代码837125，加盟热线400-810-0088"
      />
    </div>
    <div class="box">
      <nav-bar/>
      <div class="container">
        <transition name="tab">
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
import { getLocation } from '@/apis/index'
export default {
  name: 'VueLayout',
  components: { NavBar },
  computed: {
    pageName(){
      return this.$route.name
    },
  },
  data(){
    return {
      shopName: ''
    }
  },
  mounted(){
    this.getLocation()
  },
  methods: {
    async getLocation(){
      let { city } = await getLocation()
      city = city.substr(city.indexOf('区') + 1)
      if (city.split('市').length > 2) {
          city = city.substr(city.indexOf('市') + 1)
      }
      city = city.replace('市', '')
      this.shopName = `（${city}3号店）`
    }
  }
}
</script>

<style lang="scss">
.tab-enter-active, .tab-leave-active {
    transition: all .2s;
}
.tab-enter, .tab-leave-to {
    opacity: 0.6;
}
</style>

<style lang="scss" scoped>
.app-main {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 50px 40px calc(100% - 90px);
  .head{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #222831;
    font-size: 18px;
    color: white;
    line-height: 50px;
    text-align: center;
    position: relative;
    padding: 0 10px;
    .name{
      display: flex;
      align-items: center;
      .logo{
        height: 30px;
        margin-right: 10px;
      }
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
    grid-template-columns: 90px calc(100% - 90px);
    .container{
      overflow-y: auto;
    }
  }
}
</style>
