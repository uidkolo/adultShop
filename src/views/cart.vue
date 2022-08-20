
<template>
  <div class="cart">
    <div class="list">
      <div class="item" v-for="(item, index) of cart" :key="index">
        <img class="img" :src="item.images[0]" alt="">
        <div class="info">
          <h4 class="name">{{item.name}}</h4>
          <div class="price">
            <span class="unit">￥</span>
            <span class="value">{{item.price}}</span>
          </div>
          <div class="item-bottom">
            <div class="amount">
              <span class="reduce" @click="changeAmount('reduce', item.id)">-</span>
              <span class="num">{{item.amount}}</span>
              <span class="add" @click="changeAmount('add', item.id)">+</span>
            </div>
            <img class="del" :src="require('@/assets/icon_del.png')" @click="del(item.id)" />
          </div>
        </div>
      </div>
      <div class="null" v-if="cart.length == 0">
        <img class="icon" src="../assets/null.png" alt="">
        <span>购物车空空如也~~</span>
      </div>
    </div>
    <div class="bottom" v-if="cart.length > 0">
      <div class="total">
        <span class="amount">共<span class="value">{{cart.length}}</span>件商品</span>
        <span class="price">合计：<span class="unit">￥</span><span class="value">{{totalPrice}}</span></span>
      </div>
      <div class="pay" @click="pay">结算</div>
    </div>
  </div>
</template>

<script>
import { getDetail } from "@/product"
import { sign, getUserIP } from '@/utils/utils'
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
    },
    totalPrice(){
      let total = 0
      for(let item of this.cart){
        total += Number(item.price) * item.amount
      }
      return total.toFixed(2)
    }
  },
  mounted(){
    getUserIP((ip) => {
        console.log(ip)
      })
  },
  methods: {
    changeAmount(type, id){
      if(type == 'add') this.$store.dispatch('addCart', id)
      if(type == 'reduce') this.$store.dispatch('reduceCart', id)
    },
    del(id){
      this.$store.dispatch('removeCart', id)
    },
    pay(){
      // const api_id = '4292760'
      // const key = '3083097A905458E34E3BBACAFD93AFBD'
      // const orderid = +new Date()
      // const money = this.totalPrice
      // const notify_url = 'https://www.baidu.com'
      // const return_url = 'https://www.baidu.com'
      // const url = 'https://www.xmhongqu.com/api/pay'
      console.log(sign({
        a: 1,
        b: 2
      }))

    }
  }
}
</script>

<style scoped lang="scss">
.cart{
  height: 100%;
  display: grid;
  padding-bottom: 70px;
  .list{
    padding: 10px;
  }
  .item{
    padding: 10px;
    display: grid;
    grid-template-columns: 100px 1fr;
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
        text-align: justify;
      }
      .price{
          .unit{
              color: #e84a5f;
              font-size: 12px;
          }
          .value{
            color: #e84a5f;
            font-size: 20px;
            font-weight: bold;
          }
      }
      .item-bottom{
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
            font-size: 14px;
            color: #666;
            margin: 0 10px;
            height: 24px;
            line-height: 24px;
          }
          .reduce, .add {
            height: 24px;
            width: 24px;
            line-height: 24px;
            text-align: center;
            border-radius: 50%;
            background: #f6f6f6;
            font-size: 14px;
            font-weight: bold;
            color: #999;
          }
        }
        .del{
          width: 16px;
          height: 16px;
        }
      }
    }
  }
  .null{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    .icon{
      width: 100px;
      margin-bottom: 20px;
    }
  }
  .bottom{
    position: fixed;
    width: 100%;
    height: 60px;
    bottom: 0;
    left: 0;
    z-index: 9;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    .total{
      display: flex;
      align-items: flex-end;
      font-size: 14px;
      color: #666;
      .amount{
        margin-right: 20px;
        .value{
          margin: 0 5px;
          font-weight: bold;
        }
      }
      .price{
        display: flex;
        align-items: flex-end;
        .unit{
          color: #e84a5f;
        }
        .value{
          color: #e84a5f;
          font-weight: bold;
          font-size: 22px;
        }
      }
    }
    .pay{
      flex-grow: 1;
      background: #e84a5f;
      color: white;
      height: 40px;
      margin-left: 20px;
      border-radius: 40px;
      line-height: 40px;
      text-align: center;
    }
  }
}
</style>