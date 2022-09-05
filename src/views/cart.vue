
<template>
  <div class="cart">
    <div class="head">
      <van-nav-bar
        title="购物车"
        left-text="返回"
        left-arrow
        @click-left="$router.replace('/')"
      />
    </div>
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
        <div class="btn" @click="$router.replace('/')">去选购</div>
      </div>
    </div>
    <div class="bottom-box" v-if="cart.length > 0">
      <div class="bottom">
        <div class="total">
          <span class="amount">共<span class="value">{{cart.length}}</span>件商品</span>
          <span class="price">合计：<span class="unit">￥</span><span class="value">{{totalPrice}}</span></span>
        </div>
        <div class="pay" @click="showWay = true">结算</div>
        <van-popup v-model="showWay" round position="bottom" get-container="body">
          <div class="pay-way">
            <div class="title">请选择支付方式</div>
            <div class="way">
              <div class="item" @click="ksPay">
                <img class="icon" src="../assets/pay_wechat.png" alt="">
                <span>微信支付</span>
              </div>
              <div class="item" @click="ksPay">
                <img class="icon" src="../assets/pay_ali.png" alt="">
                <span>支付宝支付</span>
              </div>
              <div class="tip">
                <van-icon name="warning" color="#e73f25" class="icon" />
                <p>因商品特殊性，若遇风控无法支付情况，请更换支付方式后重新支付</p> 
              </div>
            </div>
          </div>
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script>
import { getDetail } from "@/product"
import { pay } from "@/apis/pay"
import { ksPay } from '@/apis/ks'
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
  data(){
    return {
      showWay: false
    }
  },
  methods: {
    changeAmount(type, id){
      if(type == 'add') this.$store.dispatch('addCart', id)
      if(type == 'reduce') this.$store.dispatch('reduceCart', id)
    },
    del(id){
      this.$store.dispatch('removeCart', id)
    },
    async pay(type){
      this.showWay = false
      const loading = this.$toast.loading({
        message: '正在支付',
        forbidClick: true,
        duration: 0
      })
      const res = await pay(type, this.totalPrice)
      loading.clear()
      if(res) {
        const { payUrl } = res
        window.location.href = payUrl
      } else {
        this.$toast.loading({
          message: '支付失败，请重试',
          forbidClick: true
        })
      }
    },
    async ksPay(){
      this.showWay = false
      const loading = this.$toast.loading({
        message: '正在支付',
        forbidClick: true,
        duration: 0
      })
      const url = await ksPay(this.totalPrice)
      loading.clear()
      if(url) {
        window.location.href = url
      } else {
        this.$toast.loading({
          message: '支付失败，请重试',
          forbidClick: true
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.cart{
  height: 100%;
  display: grid;
  grid-template-rows: 46px calc(100% - 104px) 60px;
  .list{
    padding: 10px;
    overflow-y: auto;
  }
  .item{
    padding: 10px;
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-column-gap: 10px;
    background: white;
    border-radius: 4px;
    overflow: hidden;
    &+.item{
      margin-top: 10px;
    }
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
        overflow: hidden;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        box-orient: vertical;
        display: -webkit-box;
        display: box;
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
      margin-bottom: 10px;
    }
    .btn{
      border: 1px solid #666;
      margin-top: 20px;
      padding: 10px 30px;
      border-radius: 4px;
      color: #666;
    }
  }
  .bottom-box{
    height: 60px;
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

<style lang="scss">
.pay-way{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title{
    font-size: 18px;
    padding: 20px 0;
    font-weight: bold;
  }
  .way {
    padding: 0 20px 20px;
    width: 100%;
    .item{
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px 0;
      background: #f6f6f6;
      width: 100%;
      &+.item{
        margin-top: 10px;
      }
      .icon{
        width: 30px;
        margin-right: 10px;
      }
    }
    .tip{
      margin-top: 20px;
      display: flex;
      p{
        font-size: 14px;
        color: #666;
      }
      .icon{
        position: relative; 
        top:2px;
        margin-right: 5px;
      }
    }
  }
}
</style>