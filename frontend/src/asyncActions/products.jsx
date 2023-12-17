import { allProductsAction, allProductsSaleAction, productItemAction, productsByCategoryAction } from "../store/productListReducer"

export function fetchAllProducts(){
    return function(dispatch){
        fetch('http://localhost:3333/products/all')
            .then(res => res.json())
            .then(data => dispatch(allProductsAction(data)))
    }
}

export function fetchAllProductsSale(){
    return function(dispatch){
        fetch('http://localhost:3333/products/all')
            .then(res => res.json())
            .then(data => {
                let filtered_data = data.filter(elem => elem.discont_price)
                dispatch(allProductsSaleAction(filtered_data))
            })
    }
}

export function fetchProductsByCategories(id){
    return function(dispatch){
        fetch('http://localhost:3333/categories/'+id)
            .then(res => res.json())
            .then(data => dispatch(productsByCategoryAction(data)))
    }
}

export function fetchProductItem(id) {
    return function (dispatch) {
        fetch('http://localhost:3333/products/' + id)
            .then(res => res.json())
            .then(data => dispatch(productItemAction(data)))
    }
}
