"use strict";(self["webpackChunkwebview"]=self["webpackChunkwebview"]||[]).push([[657],{52597:function(t,s,i){i.d(s,{Z:function(){return o}});var e=function(){var t=this,s=t._self._c;return s("div",{ref:"product",staticClass:"product-item"},[s("van-image",{attrs:{width:t.width,height:t.height,src:t.product.images[0],"lazy-load":""},on:{click:t.toDetail}}),s("div",{staticClass:"name"},[t._v(t._s(t.product.name))]),s("div",{staticClass:"info"},[s("div",{staticClass:"price"},[s("span",{staticClass:"unit"},[t._v("￥")]),s("span",{staticClass:"value"},[t._v(t._s(t.product.price))])]),s("div",{staticClass:"cart",on:{click:function(s){return t.add(t.product.id)}}},[s("van-icon",{attrs:{name:"shopping-cart-o",size:"20",color:"#ff5b04"}})],1)])],1)},r=[],a={name:"ProductItem",props:{product:Object},data(){return{width:"100%",height:"150px"}},mounted(){this.width=this.$refs.product.offsetWidth,this.height=this.$refs.product.offsetWidth},methods:{add(t){this.$router.push({path:"/order",query:{id:this.product.id}})},toDetail(){this.$router.push({path:"/detail",query:{id:this.product.id}})}}},n=a,u=i(43736),c=(0,u.Z)(n,e,r,!1,null,"3f903a88",null),o=c.exports},92657:function(t,s,i){i.r(s),i.d(s,{default:function(){return h}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"list"},t._l(t.list,(function(t,i){return s("product",{key:i,attrs:{product:t}})})),1)},r=[],a=i(52597),n=i(15527),u={name:"VueWoman",components:{Product:a.Z},data(){return{list:[]}},mounted(){this.getList()},methods:{getList(){const t=(0,n.g)("nurse");this.list=t}}},c=u,o=i(43736),d=(0,o.Z)(c,e,r,!1,null,"f1d039e6",null),h=d.exports}}]);