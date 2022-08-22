<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0.8;
}
</style>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  border: none;
}
html,body,#app{
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #f6f6f6;
  color: #333;
}

.van-nav-bar__left, .van-nav-bar__right{
  padding: 0 10px;
}
.van-nav-bar__text{
  color: #666;
}
.van-nav-bar .van-icon{
  color: #666;
}

</style>
