<template>
  <div class="product-item">
      <img class="img" :src="require('@/assets/product.jpeg')">
      <div class="name">情趣丝袜套装</div>
      <div class="info">
          <div class="price">
              <span class="unit">￥</span>
              <span class="value">118</span>
          </div>
          <div class="cart">
              <img class="icon" :src="require('@/assets/icon_cart.png')" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem'
}
</script>

<style scoped lang="scss">
.product-item{
    background: white;
    border-radius: 4px;
    overflow: hidden;
  .img{
      width: 100%;
      height: 160px;
      display: block;
  }
  .name{
      font-size: 14px;
      color: #333;
      line-height: 30px;
      padding: 0 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
  .info{
      padding: 0 5px 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .price{
          .unit{
              color: pink;
              font-size: 12px;
          }
          .value{
            color: pink;
            font-size: 18px;
            font-weight: bold;
          }
      }
      .cart{
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: pink;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon{
              width: 15px;
              height: 15px;
          }
      }
  }
}
</style>
