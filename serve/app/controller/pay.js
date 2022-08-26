'use strict';

const Controller = require('egg').Controller;
const axios = require('axios')
const utility = require("utility")

// 支付签名
const sign = (data) => {
    const key = '8835EF9EF10B8C5CE9AD270B3929A5B9'
    let paramsStr = ''
    for (let key of Object.keys(data)) {
        if (data[key] != '' && key != 'sign') {
            paramsStr += `${key}=${data[key]}&`
        }
    }
    paramsStr += `key=${key}`
    return utility.md5(paramsStr).toUpperCase()
}

class PayController extends Controller {
    async index() {
        const { ctx } = this;
        const { type, money } = ctx.request.body
        const ip = ctx.request.ip
        let params = {
            api_id: '1581246',
            money,
            notify_url: 'http://shop.bbtswap.com',
            orderid: +new Date(),
            return_url: 'http://shop.bbtswap.com',
        }
        params.sign = sign(params)
        params.gtype = 'ks_mck'
        params.ip = ip
        params.mid = type == 'wxpay' ? 'f0a1f1' : '9c42f3'
        params.type = type
        const res = await axios.post('http://pay.bbtswap.com/api/pay', params)
        const data = res.data
        if (data.code == 0) {
            ctx.body = {
                code: 200,
                data: {
                    reallink: data.reallink,
                    payUrl: data.payUrl
                }
            }
        } else {
            res.body = {
                code: 500,
                message: data.msg || '支付失败'
            }
        }
    }
}

module.exports = PayController;