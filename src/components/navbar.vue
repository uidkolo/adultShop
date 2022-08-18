<template>
  <div class="navbar">
    <div class="top">
      <router-link class="item" :class="{active: pageName=='woman'}" to="/woman" key="woman">
        <img :src="require('@/assets/icon_01.png')">
        <span>女用</span>
      </router-link>
      <router-link class="item" :class="{active: pageName=='man'}" to="/man" key="man">
        <img :src="require('@/assets/icon_02.png')">
        <span>男用</span>
      </router-link>
      <router-link class="item" :class="{active: pageName=='clothing'}" to="/clothing" key="clothing">
        <img :src="require('@/assets/icon_03.png')">
        <span>服饰</span>
      </router-link>
      <router-link class="item" :class="{active: pageName=='condom'}" to="/condom" key="condom">
        <img :src="require('@/assets/icon_04.png')">
        <span>避孕</span>
      </router-link>
      <router-link class="item" :class="{active: pageName=='sm'}" to="/sm" key="sm">
        <img :src="require('@/assets/icon_05.png')">
        <span>SM</span>
      </router-link>
      <router-link class="item" :class="{active: pageName=='nurse'}" to="/nurse" key="nurse">
        <img :src="require('@/assets/icon_06.png')">
        <span>护理</span>
      </router-link>
    </div>
    <div class="bottom">
      <div class="cart">
        <div class="number">4</div>
        <img class="icon" :src="require('@/assets/icon_cart.png')" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    pageName(){
      return this.$route.name
    }
  },
  mounted(){
    console.log(this.path)
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
      padding: 15px 0 15px 10px;
      img{
        width: 30px;
        height: 30px;
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

        border-left: 4px solid #de95ba;
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
