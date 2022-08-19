<template>
  <div class="product-item">
      <img class="img" :src="product.images[1]" @click="toDetail">
      <div class="name">{{product.name}}</div>
      <div class="info">
          <div class="price">
              <span class="unit">￥</span>
              <span class="value">{{product.price}}</span>
          </div>
          <div class="cart" @click="add(product.id)">
              <img class="icon" :src="require('@/assets/icon_cart.png')" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
      product: Object
  },
  methods:{
      add(id){
        this.$store.dispatch('addCart', id)
      },
      toDetail(){
          this.$router.push({
              path: '/detail',
              query: {
                  id: this.product.id
              }
          })
      }
  }
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
              color: #e84a5f;
              font-size: 12px;
          }
          .value{
            color: #e84a5f;
            font-size: 18px;
            font-weight: bold;
          }
      }
      .cart{
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #de95ba;
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
