import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart: JSON.parse(localStorage.getItem('cart')),
        orderInfo: JSON.parse(localStorage.getItem('orderInfo')),
        payUrl: JSON.parse(localStorage.getItem('payUrl'))
    },
    getters: {},
    mutations: {
        SET_CART(state, productList) {
            state.cart = productList
        },
        SET_ORDER_INFO(state, orderInfo) {
            state.orderInfo = orderInfo
        },
        SET_PAY_URL(state, url) {
            state.payUrl = url
        }
    },
    actions: {
        addCart({ commit }, id) {
            const cartStr = localStorage.getItem('cart')
            let productList = JSON.parse(cartStr) || []
            let ids = []
            for (let item of productList) {
                ids.push(item.id)
                if (item.id == id) item.amount = item.amount + 1
            }
            if (!ids.includes(id)) {
                productList.push({
                    id,
                    amount: 1
                })
            }
            localStorage.setItem('cart', JSON.stringify(productList))
            commit('SET_CART', productList)
        },
        reduceCart({ commit }, id) {
            const cartStr = localStorage.getItem('cart')
            let productList = JSON.parse(cartStr) || []
            let newAmount = 0
            let index = 0
            productList.map((item, ind) => {
                if (item.id == id) {
                    item.amount = item.amount - 1
                    newAmount = item.amount
                    index = ind
                }
            })
            if (newAmount == 0) {
                productList.splice(index, 1)
            }
            localStorage.setItem('cart', JSON.stringify(productList))
            commit('SET_CART', productList)
        },
        removeCart({ commit }, id) {
            const cartStr = localStorage.getItem('cart')
            let productList = JSON.parse(cartStr) || []
            let list = productList.filter(item => item.id != id)
            localStorage.setItem('cart', JSON.stringify(list))
            commit('SET_CART', list)
        },
        clearCart({ commit }) {
            localStorage.setItem('cart', '[]')
            commit('SET_CART', [])
        },
        setOrderInfo({ commit }, orderInfo) {
            localStorage.setItem('orderInfo', JSON.stringify(orderInfo))
            commit('SET_ORDER_INFO', orderInfo)
        },
        delOrderInfo({ commit }) {
            localStorage.setItem('orderInfo', '')
            commit('SET_ORDER_INFO', '')
        },
        setPayUrl({ commit }, url) {
            localStorage.setItem('setPayUrl', JSON.stringify(url))
            commit('SET_PAY_URL', url)
        },
        delPayUrl({ commit }) {
            localStorage.setItem('setPayUrl', '')
            commit('SET_PAY_URL', '')
        }
    },
    modules: {}
})