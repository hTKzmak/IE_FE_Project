import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import { fetchAllProducts, fetchAllProductsSale, fetchProductsByCategories } from "../../asyncActions/products"
import ProductItem from "../ProductItem"
import { useEffect } from "react"

import style from './ProductsList.module.css'

function ProductsList({ type }) {

    const BASE_URL = 'http://localhost:3333/'
    const { products } = useSelector(store => store.productList)
    const dispatch = useDispatch()
    const location = useLocation()
    const { id } = useParams()

    // сортировка по отображению товаров со скидкой и по цене
    const productsList = products.filter(elem => elem.isShowSale && elem.isShowPrice)

    useEffect(() => {
        if (type === 'all') {
            dispatch(fetchAllProducts())
        }
        else if (type === 'sale') {
            dispatch(fetchAllProductsSale())
        }
        else if (type === 'categories') {
            dispatch(fetchProductsByCategories(id))
        }
        document.body.scrollIntoView({ behavior: 'smooth' })
    }, [location.pathname, dispatch, id, type])

    return (
        <div className={style.productsList}>
            {productsList.map(elem =>
                <div key={elem.id}>
                    <ProductItem
                        id={elem.id}
                        img={BASE_URL + elem.image}
                        imgBtn={elem.image}
                        title={elem.title}
                        price={elem.price}
                        discount={elem.discont_price}
                    />
                </div>
            )}
        </div>
    )
}

export default ProductsList