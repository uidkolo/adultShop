import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Popup, Icon, Toast, Loading  } from 'vant'

Vue.use(Icon)
Vue.use(Toast)
Vue.use(Popup)
Vue.use(Loading)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')