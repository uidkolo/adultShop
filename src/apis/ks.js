import request from '../utils/request'

/**
 * 发起支付
 * params amount 金额
 */
export const getPayUrl = async(amount) => {
    const { data } = await request({
        url: `api/ksPay`,
        method: 'post',
        data: {
            amount
        }
    })
    return data
}