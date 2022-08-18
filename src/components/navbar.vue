<template>
  <div class="navbar">
    <div class="top">
      <router-link class="item" to="/woman" key="woman">
        <img :src="require('@/assets/icon_01.png')">
        <span>女用</span>
      </router-link>
      <router-link class="item" to="/man" key="man">
        <img :src="require('@/assets/icon_02.png')">
        <span>男用</span>
      </router-link>
      <router-link class="item" to="/clothing" key="clothing">
        <img :src="require('@/assets/icon_03.png')">
        <span>服饰</span>
      </router-link>
      <router-link class="item" to="/condom" key="condom">
        <img :src="require('@/assets/icon_04.png')">
        <span>避孕</span>
      </router-link>
      <router-link class="item" to="/sm" key="sm">
        <img :src="require('@/assets/icon_05.png')">
        <span>SM</span>
      </router-link>
      <router-link class="item" to="/nurse" key="nurse">
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
  name: 'NavBar'
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
        border-top: 1px solid #f1f1f1;
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
      background: pink;
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
        background: red;
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
