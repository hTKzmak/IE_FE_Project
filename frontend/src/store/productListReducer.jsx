const defaultState = {
    categories_name: '',
    products: []
}

const ALL_PRODUCTS = 'ALL_PRODUCTS'
const ALL_PRODUCTS_SALE = 'ALL_PRODUCTS_SALE'
const PRODUCTS_BY_CATEGORY = 'PRODUCTS_BY_CATEGORY'
const PRODUCT_ITEM = 'PRODUCT_ITEM'

export const productListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ALL_PRODUCTS:
            return { categories_name: 'All products', products: action.payload }
        case ALL_PRODUCTS_SALE:
            return { categories_name: 'Discounted products', products: action.payload }
        case PRODUCTS_BY_CATEGORY:
            return { categories_name: action.payload.category.title, products: action.payload.data }
        case PRODUCT_ITEM:
            return { categories_name: '', products: action.payload }
        default:
            return state
    }
}

export const allProductsAction = (payload) => ({ type: ALL_PRODUCTS, payload })
export const allProductsSaleAction = (payload) => ({ type: ALL_PRODUCTS_SALE, payload })
export const productsByCategoryAction = (payload) => ({ type: PRODUCTS_BY_CATEGORY, payload })
export const productItemAction = (payload) => ({type: PRODUCT_ITEM, payload})