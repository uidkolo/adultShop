<template>
  <div class="navbar">
    <div class="top">
      <router-link class="item" :class="{active: pageName=='woman'}" to="/woman" key="woman">
        <div class="box">
          <img :src="require('@/assets/icon_01.png')" v-if="pageName=='woman'">
          <img :src="require('@/assets/icon_01_0.png')" v-else>
          <span>女用</span>
        </div>
      </router-link>
      <router-link class="item" :class="{active: pageName=='man'}" to="/man" key="man">
       <div class="box">
          <img :src="require('@/assets/icon_02.png')" v-if="pageName=='man'">
          <img :src="require('@/assets/icon_02_0.png')" v-else>
          <span>男用</span>
       </div>
      </router-link>
      <router-link class="item" :class="{active: pageName=='clothing'}" to="/clothing" key="clothing">
       <div class="box">
          <img :src="require('@/assets/icon_03.png')" v-if="pageName=='clothing'">
          <img :src="require('@/assets/icon_03_0.png')" v-else>
          <span>服饰</span>
       </div>
      </router-link>
      <router-link class="item" :class="{active: pageName=='condom'}" to="/condom" key="condom">
       <div class="box">
        <img :src="require('@/assets/icon_04.png')" v-if="pageName=='condom'">
        <img :src="require('@/assets/icon_04_0.png')" v-else>
        <span>避孕</span>
       </div>
      </router-link>
      <router-link class="item" :class="{active: pageName=='sm'}" to="/sm" key="sm">
        <div class="box">
          <img :src="require('@/assets/icon_05.png')" v-if="pageName=='sm'">
          <img :src="require('@/assets/icon_05_0.png')" v-else>
          <span>SM</span>
        </div>
      </router-link>
      <router-link class="item" :class="{active: pageName=='nurse'}" to="/nurse" key="nurse">
        <div class="box">
          <img :src="require('@/assets/icon_06.png')" v-if="pageName=='nurse'">
          <img :src="require('@/assets/icon_06_0.png')" v-else>
          <span>护理</span>
        </div>     
      </router-link>
    </div>
    <div class="bottom">
      <router-link class="cart" to="/cart" key="cart">
        <div class="number" v-if="cart.length > 0">{{cart.length}}</div>
        <img class="icon" :src="require('@/assets/icon_cart.png')" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    pageName(){
      return this.$route.name
    },
    cart(){
      return this.$store.state.cart || []
    }
  },
  mounted(){
    console.log(this.cart)
  }
}
</script>

<style scoped lang="scss">
.navbar{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  background-image: url('../assets/bg.png');
  background-repeat: no-repeat;
  background-position: bottom center;
  .top{
    display: flex;
    flex-direction: column;
    width: 100%;
    .item{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 15px 0;
      .box{
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      img{
        width: 24px;
        height: 24px;
      }
      span{
        font-size: 14px;
        margin-left: 5px;
      }
      &+.item{
        border-top: 1px solid #f6f6f6;
      }
      &.active{
        span{
          font-weight: bold;
          color: #de95ba;
        }
        .box{
          border-left: 3px solid #de95ba;
        }
      }
    }
  }
  .bottom{
    padding-bottom: 10px;
    .cart{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: relative;
      background: #de95ba;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon{
        width: 30px;
        height: 30px;
      }
      .number{
        position: absolute;
        right: -5px;
        top: -5px;
        background: #e84a5f;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: white;
      }
    }
  }
  
}
</style>
