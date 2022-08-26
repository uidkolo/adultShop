import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Popup, Icon, Toast, Loading, NoticeBar, NavBar, Image as VanImage, Lazyload } from 'vant'

Vue.use(VanImage)
Vue.use(Icon)
Vue.use(Toast)
Vue.use(Popup)
Vue.use(Loading)
Vue.use(NoticeBar)
Vue.use(NavBar)
Vue.use(Lazyload)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')