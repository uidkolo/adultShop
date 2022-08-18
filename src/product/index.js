const product = {
    woman: [
        {
            id: '01',
            type: 'woman',
            name: '女用情趣套装豪华套餐',
            images: [
                require('./woman/01/main_01.jpg'),
                require('./woman/01/main_01.jpg'),
                require('./woman/01/main_01.jpg')
            ],
            price: '118'
        }
    ]
}


export const getList = (name) =>{
    return product[name]
}