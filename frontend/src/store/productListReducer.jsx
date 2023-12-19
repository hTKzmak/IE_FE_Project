const defaultState = {
    categories_name: '',
    products: []
}

const ALL_PRODUCTS = 'ALL_PRODUCTS'
const ALL_PRODUCTS_SALE = 'ALL_PRODUCTS_SALE'
const PRODUCTS_BY_CATEGORY = 'PRODUCTS_BY_CATEGORY'
const PRODUCT_ITEM = 'PRODUCT_ITEM'

const FILTER_BY_SALE = 'FILTER_BY_SALE'
const FILTER_BY_PRICE = 'FILTER_BY_PRICE'
const FILTER_BY_OPTION = 'FILTER_BY_OPTION'

export const productListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ALL_PRODUCTS:
            return {
                // добавляем isShow, isShowSale и isShowPrice в объект с товарами для дальшейших махинаций, связанный с фильтацией
                categories_name: 'All products', products: action.payload.map(elem => {
                    elem.isShow = true
                    elem.isShowSale = true
                    elem.isShowPrice = true
                    elem.discont_price = (elem.discont_price < 10) ? null : elem.discont_price
                    return elem
                })
            }
        case ALL_PRODUCTS_SALE:
            return {
                categories_name: 'Discounted products', products: action.payload.map(elem => {
                    elem.isShow = true
                    elem.isShowSale = true
                    elem.isShowPrice = true
                    return elem
                })
            }
        case PRODUCTS_BY_CATEGORY:
            return {
                categories_name: action.payload.category.title, products: action.payload.data.map(elem => {
                    elem.isShow = true
                    elem.isShowSale = true
                    elem.isShowPrice = true
                    return elem
                })
            }
        case PRODUCT_ITEM:
            return { categories_name: '', products: action.payload }
        case FILTER_BY_SALE:
            return {
                ...state,
                products: state.products.map(elem => {
                    if (action.payload) {
                        if (!elem.discont_price) {
                            elem.isShowSale = false
                        }
                    }
                    else {
                        elem.isShowSale = true
                    }
                    return elem
                })
            }
        case FILTER_BY_PRICE:
            let { max, min } = action.payload

            return {
                ...state,
                products: state.products.map(elem => {

                    elem.isShowPrice = true

                    if (!(elem.price >= min && elem.price <= max)) {
                        elem.isShowPrice = false
                    }

                    return elem
                })
            }
        case FILTER_BY_OPTION:
            if (action.payload.id == 0) {
                return {
                    ...state,
                    products: state.products.map(elem => {
                        elem.isShowPrice = true
                        return elem
                    })
                }
            }
            else if (action.payload.id == 1) {
                return {
                    ...state,
                    products: state.products.map(elem => {
                        if (!(elem.price >= 0 && elem.price <= 10)) {
                            elem.isShowPrice = false
                        }
                        return elem
                    })
                }
            }
            else if (action.payload.id == 2) {
                return {
                    ...state,
                    products: state.products.map(elem => {
                        if (!(elem.price >= 10 && elem.price <= 20)) {
                            elem.isShowPrice = false
                        }
                        return elem
                    })
                }
            }
            else if (action.payload.id == 3) {
                return {
                    ...state,
                    products: state.products.map(elem => {
                        if (!(elem.price >= 20 && elem.price <= 30)) {
                            elem.isShowPrice = false
                        }
                        return elem
                    })
                }
            }
            else if (action.payload.id == 4) {
                return {
                    ...state,
                    products: state.products.map(elem => {
                        if (!(elem.price >= 30 && elem.price <= 50)) {
                            elem.isShowPrice = false
                        }
                        return elem
                    })
                }
            }
        default:
            return state
    }
}

export const allProductsAction = (payload) => ({ type: ALL_PRODUCTS, payload })
export const allProductsSaleAction = (payload) => ({ type: ALL_PRODUCTS_SALE, payload })
export const productsByCategoryAction = (payload) => ({ type: PRODUCTS_BY_CATEGORY, payload })
export const productItemAction = (payload) => ({ type: PRODUCT_ITEM, payload })

export const filterBySaleAction = (payload) => ({ type: FILTER_BY_SALE, payload })
export const filterByPriceAction = (payload) => ({ type: FILTER_BY_PRICE, payload })
export const filterByOptionAction = (payload) => ({ type: FILTER_BY_OPTION, payload })