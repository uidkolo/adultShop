
<template>
  <div class="detail">
    <div class="content">
      <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(img, index) in detail.images" :key="index">
            <img class="swiper-img" :src="img" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="info">
        <div class="info-top">
          <div class="price">
            <span class="unit">￥</span>
            <span class="value">{{detail.price}}</span>
          </div>
          <span class="residue">剩余：{{detail.residue}}</span>
        </div>
        <h4 class="name">{{detail.name}}</h4>
        <div class="key">
          <div class="item">刺激度1星</div>
          <div class="item">口爱</div>
          <div class="item">杯子</div>
          <div class="item">持久</div>
        </div>
      </div>
      <div class="service">
        <div class="label">服务</div>
        <div class="item">
          <img class="icon" src="../assets/icon_service.png" alt="">
          <span>正品保证</span>
        </div>
        <div class="item">
          <img class="icon" src="../assets/icon_service.png" alt="">
          <span>安全材质</span>
        </div>
        <div class="item">
          <img class="icon" src="../assets/icon_service.png" alt="">
          <span>品牌信誉</span>
        </div>
      </div>

      <div class="intro">
        <div class="item" v-for="(item, index) of detail.params" :key="index">
          <span class="label">{{item.label}}</span>
          <span class="value">{{item.value}}</span>
        </div>
      </div>

    </div>
    <div class="bottom">
      <div class="btns">
        <div class="btn go">去结算</div>
        <div class="btn join">加入购物车</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDetail } from '@/product'
import { swiper, swiperSlide } from "vue-awesome-swiper"
import "swiper/dist/css/swiper.css"
export default {
  name: 'VueDetail',
  components: {
    swiper,
    swiperSlide
  },
  data(){
    return {
      detail: null,
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    }
  },
  mounted() {
    this.getDetail()
  },
  methods: {
    getDetail(){
      const detail = getDetail(this.$route.query.id)
      this.detail = detail
    }
  }
}
</script>

<style>
.swiper-pagination-bullet-active{
  background: #222831;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
  bottom: 20px
}
</style>
<style scoped lang="scss">
.detail{
  height: 100%;
  width: 100%;
  .content{
    padding-bottom: 70px;
    .swiper-img{
      width: 100%;
      display: block;
    }
    .info{
      background: white;
      margin-top: -10px;
      position: relative;
      z-index: 2;
      border-radius: 10px 10px 0 0;
      padding: 20px;
      .info-top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .price{
          display: flex;
          align-items: flex-end;
          .unit{
            font-size: 16px;
            color: #e84a5f;
            font-weight: bold;
          }
          .value{
            font-size: 20px;
            color: #e84a5f;
            font-weight: bold;
          }
        }
        .residue{
          font-size: 14px;
          color: #666;
        }
      }
      .name{
        margin-top: 10px;
        font-size: 18px;
        text-align: justify;
      }
      .key{
        display: flex;
        align-items: center;
        margin-top: 10px;
        font-size: 14px;
        .item{
          background: #f6f6f6;
          padding: 4px 10px;
          border-radius: 4px;
          &+.item{
            margin-left: 10px;
          }
        }
      }
    }

    .service{
      background: white;
      margin-top: 5px;
      padding: 10px 20px;
      display: flex;
      align-items: center;
      .label{
        font-size: 14px;
        color: #666;
      }
      .item{
        display: flex;
        align-items: center;
        margin-left: 10px;
        font-size: 14px;
        .icon{
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
      }
    }

    .intro{
      background: white;
      margin-top: 5px;
      padding: 10px 20px;
      .item{
        display: flex;
        font-size: 14px;
        &+.item{
          margin-top: 10px;
        }
        .label{
          flex-shrink: 0;
          color: #999;
          width: 100px;
        }
        .value{
          flex-grow: 1;
          color: #333;
        }
      }
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
    padding: 0 10px;
    .btns{
      flex-grow: 1;
      display: flex;
      align-items: center;
      .btn{
        height: 40px;
        line-height: 40px;
        width: 50%;
        text-align: center;
        font-size: 16px;
        color: white;
      }
      .go{
        background: linear-gradient(to right, #ffc706, #fd9b04);
        border-radius: 40px 0 0 40px;
      }
      .join{
        background: linear-gradient(to right, #e84a5f, #c94052);
        border-radius: 0 40px 40px 0;
      }
    }
  }
}
</style>