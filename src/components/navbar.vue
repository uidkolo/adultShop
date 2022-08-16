<template>
  <div class="navbar">
    <router-link class="item" to="/woman" key="woman">
      <!-- <img :src="item.icon"> -->
      <span>女用</span>
    </router-link>
    <router-link class="item" to="/man" key="man">
      <!-- <img :src="item.icon"> -->
      <span>男用</span>
    </router-link>
    <router-link class="item" to="/clothing" key="clothing">
      <!-- <img :src="item.icon"> -->
      <span>服饰</span>
    </router-link>
    <router-link class="item" to="/condom" key="condom">
      <!-- <img :src="item.icon"> -->
      <span>避孕</span>
    </router-link>
    <router-link class="item" to="/sm" key="sm">
      <!-- <img :src="item.icon"> -->
      <span>SM</span>
    </router-link>
    <router-link class="item" to="/nurse" key="nurse">
      <!-- <img :src="item.icon"> -->
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
  grid-template-columns: repeat(6, 1fr);
}
</style>
