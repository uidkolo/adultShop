const product = {
    woman: [{
        id: '01',
        type: 'woman',
        name: '女用情趣套装豪华套餐',
        images: [
            require('./woman/01/main_01.jpg'),
            require('./woman/01/main_01.jpg'),
            require('./woman/01/main_01.jpg')
        ],
        price: '118',
        residue: 4,
        keys: ['刺激度1星', '口爱', '杯子', '持久'],
        params: [
            { label: '产地', value: '广东' },
            { label: '控制方式', value: '电动' },
            { label: '类型', value: '应交' },
            { label: '静音性能', value: '发音款可以外放，小于40分贝' },
            { label: '尺寸', value: '全场315mm，直径88mm，内胆长度170mm，内胆直径53mm' },
        ]
    }]
}


export const getList = (name) => {
    return product[name]
}

export const getDetail = (id) => {
    let resultArr = []
    for (let key of Object.keys(product)) {
        resultArr = product[key].filter(item => item.id == id)
    }
    return resultArr[0]
}