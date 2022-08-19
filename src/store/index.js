import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart: JSON.parse(localStorage.getItem('cart'))
    },
    getters: {},
    mutations: {
        SET_CART(state, productList) {
            state.cart = productList
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
        reduceCart({ commit, dispatch }, id) {
            const cartStr = localStorage.getItem('cart')
            let productList = JSON.parse(cartStr) || []
            for (let item of productList) {
                if (item.id == id) {
                    if (item.amount == 0) {
                        dispatch('removeCart', id)
                    } else {
                        item.amount = item.amount - 1
                    }
                }
            }
            localStorage.setItem('cart', JSON.stringify(productList))
            commit('SET_CART', productList)
        },
        removeCart({ commit }, id) {
            const cartStr = localStorage.getItem('cart')
            let productList = JSON.parse(cartStr) || []
            productList = productList.filter(item => item.id != id)
            localStorage.setItem('cart', JSON.stringify(productList))
            commit('SET_CART', productList)
        },
        clearCart({ commit }) {
            localStorage.setItem('cart', '[]')
            commit('SET_CART', [])
        }
    },
    modules: {}
})