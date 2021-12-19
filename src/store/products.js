let initialState = {
    products: [
        {
            category: 'ELECTRONICS',
            name: 'MacBook Air 2019',
            description: 'Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster',
            price: '1,099$',

            img: 'https://www.samma3a.com/tech/ar/wp-content/uploads/sites/3/2019/08/%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9-MacBook-Air-2019.jpg',
        },
        {
            category: 'ELECTRONICS',
            name: 'Apple Watch 7',
            description: 'Apple Watch Series 7 features a larger and more advanced display, enhanced durability, faster charging, new aluminum case colors, and watchOS 8',
            price: '399$',
          
            img: 'https://img.youm7.com/ArticleImgs/2021/9/14/141072-%D8%B3%D8%A7%D8%B9%D8%A9-%D8%A3%D8%A8%D9%84-(3).jpg',
        },
        {
            category: 'FOOD',
            name: 'Burger',
            description: 'A JUICY, DELICIOUS BASIC BEEF BURGER',
            price: '5$',

            img: 'https://www.honestburgers.co.uk/wp-content/uploads/2021/11/vegan-christmas-website-infobox.jpg',
        },

        {
            category: 'FOOD',
            name: 'Sea Food',
            description: 'The perfect seafood',
            price: '30$',

            img: 'https://www.muhtwa.com/wp-content/uploads/IMG_1776-2-600x400.jpg',
        },

    ]

}


const ReduceProducts = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ACTIVE":

            let product = state.products.filter(product => {
                return product.category === payload ? product.category : null

            })
            console.log(product);
            return { ...state, product: product };
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

export default ReduceProducts