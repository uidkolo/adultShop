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
        price: '118'
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