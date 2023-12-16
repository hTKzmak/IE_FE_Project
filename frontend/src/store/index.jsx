import { productListReducer } from "./productListReducer";
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
    productList: productListReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))