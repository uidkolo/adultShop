<template>
  <div class="product-item" ref="product">
      <van-image
        :width="width"
        :height="height"
        :src="product.images[0]"
        lazy-load
        @click="toDetail"
        />
      <div class="name">{{product.name}}</div>
      <div class="info">
          <div class="price">
              <span class="unit">￥</span>
              <span class="value">{{product.price}}</span>
          </div>
          <div class="cart" @click="add(product.id)">
              <van-icon name="shopping-cart-o" size="20" color="#ff5b04" />
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
  data(){
    return {
        width: '100%',
        height: '150px'
    }
  },
  mounted(){
    this.width = this.$refs.product.offsetWidth
    this.height = this.$refs.product.offsetWidth
  },
  methods:{
      add(id){
        this.$store.dispatch('addCart', id)
        this.$toast.success('已加入购物车')
        // this.$router.push({
        //     path: '/order',
        //     query: {
        //         id: this.product.id
        //     }
        // })
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
      height: auto;
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
