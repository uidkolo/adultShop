
<template>
  <div class="cart">
    <div class="item" v-for="(item, index) of cart" :key="index">
      <img class="img" :src="item.images[0]" alt="">
      <div class="info">
        <h4 class="name">{{item.name}}</h4>
        <div class="price">
          <span class="unit">￥</span>
          <span class="value">{{item.price}}</span>
        </div>
        <div class="bottom">
          <div class="amount">
            <span class="reduce" @click="changeAmount('reduce')">-</span>
            <span class="num">{{item.amount}}</span>
            <span class="add" @click="changeAmount('add')">+</span>
          </div>
          <img class="del" :src="require('@/assets/icon_del.png')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDetail } from "@/product"
export default {
  name: 'VueCart',
  computed: {
    cart(){
      const cartList = this.$store.state.cart || []
      const list = cartList.map(item => {
        const detail = getDetail(item.id)
        return {
          ...item,
          ...detail
        }
      })
      return list
    }
  },
  mounted(){
    console.log(this.cart)
  }
}
</script>

<style scoped lang="scss">
.cart{
  padding: 10px;
  .item{
    padding: 10px;
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-column-gap: 10px;
    background: white;
    border-radius: 4px;
    overflow: hidden;
    .img{
      width: 100%;
      border-radius: 4px;
    }
    .info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .name{
        font-size: 16px;
      }
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
      .bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .amount{
          display: flex;
          align-items: center;
          justify-content: space-between;
          .num{
            border: 1px solid #f6f6f6;
            padding: 0 20px;
            font-size: 12px;
            color: #666;
            margin: 0 10px;
            height: 20px;
            line-height: 20px;
          }
          .reduce, .add {
            height: 20px;
            width: 20px;
            line-height: 20px;
            text-align: center;
            border-radius: 50%;
            background: #f6f6f6;
            font-size: 14px;
            font-weight: bold;
            color: #999;
          }
        }
        .del{
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
</style>