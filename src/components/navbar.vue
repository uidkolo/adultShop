<template>
  <div class="navbar">
    <router-link class="item" to="/woman" key="woman">
      <img :src="require('@/assets/icon_01.png')">
      <span>女用</span>
    </router-link>
    <router-link class="item" to="/man" key="man">
      <img :src="require('@/assets/icon_01.png')">
      <span>男用</span>
    </router-link>
    <router-link class="item" to="/clothing" key="clothing">
      <img :src="require('@/assets/icon_01.png')">
      <span>服饰</span>
    </router-link>
    <router-link class="item" to="/condom" key="condom">
      <img :src="require('@/assets/icon_01.png')">
      <span>避孕</span>
    </router-link>
    <router-link class="item" to="/sm" key="sm">
      <img :src="require('@/assets/icon_01.png')">
      <span>SM</span>
    </router-link>
    <router-link class="item" to="/nurse" key="nurse">
      <img :src="require('@/assets/icon_01.png')">
      <span>护理</span>
    </router-link>
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px 0;
  grid-template-rows: 60px 60px;
  grid-row-gap: 10px;
  background: white;
  border-bottom: 1px solid #f6f6f6;
  .item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
      width: 40px;
      height: 40px;
    }
    span{
      font-size: 14px;
      margin-top: 5px;
    }
  }
}
</style>
