'use strict'
const Controller = require('egg').Controller
const axios = require('axios')
var qs = require('qs')

/**
 * 创建订单
 * params amount
 */
const takeOrder = async(amount, cookie) => {
    const params = {
        ksCoin: amount * 10,
        fen: amount * 100,
        userId: '2958110467',
        customize: true,
        kpn: 'KUAISHOU',
        kpf: 'PC_WEB'
    }

    const config = {
        method: 'post',
        url: 'https://pay.ssl.kuaishou.com/payAPI/k/pay/kscoin/deposit/nlogin/kspay/cashier',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json;charset=UTF-8',
            'Cookie': cookie,
            'EagleEye-SessionID': 'bdlqm7wbozLe0qv5epmCyIIc3p6y',
            'EagleEye-TraceID': 'c3a297251662369431135100340ab1',
            'EagleEye-pAppName': 'e6zufio2qe@6aa9d0be6640ab1',
            'Origin': 'https://pay.ssl.kuaishou.com',
            'Pragma': 'no-cache',
            'Referer': 'https://pay.ssl.kuaishou.com/pay',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
            'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"'
        },
        data: JSON.stringify(params)
    }

    const res = await axios(config)
    const { code, merchantId, outOrderNo } = res.data
    if (code == 'SUCCESS') {
        return {
            merchant_id: merchantId,
            out_order_no: outOrderNo
        }
    } else {
        return null
    }
}

/**
 * 获取支付链接
 * merchant_id
 * out_order_no
 */
const getPayUrl = async(params, cookie) => {
    const data = qs.stringify({
        'merchant_id': params.merchant_id,
        'out_order_no': params.out_order_no
    })
    const config = {
        method: 'post',
        url: 'https://www.kuaishoupay.com/pay/order/pc/trade/cashier',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': cookie,
            'Origin': 'https://pay.ssl.kuaishou.com',
            'Pragma': 'no-cache',
            'Referer': 'https://pay.ssl.kuaishou.com/pay',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'cross-site',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
            'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"'
        },
        data
    }
    const res = await axios(config)
    const { code, qrcode_url } = res.data
    if (code == 'SUCCESS') {
        return qrcode_url
    } else {
        return null
    }
}


class KsController extends Controller {
    async index() {
        const { ctx } = this
        const cookie = 'did=web_51ce0996bd697fd12ca9ea364c5160a3; didv=1662339291927; clientid=3; kpn=KUAISHOU; kpf=PC_WEB; _bl_uid=ILlnq7tUoyL1CLw3yxvCxge3pd06; userId=2958110467'
        const { amount } = ctx.request.body
        const params = await takeOrder(amount, cookie)
        const url = await getPayUrl(params, cookie)
        if (url) {
            ctx.body = {
                code: 200,
                message: '获取支付链接成功',
                data: url
            }
        } else {
            ctx.body = {
                code: 500,
                message: '获取失败'
            }
        }
    }
}

module.exports = KsController;