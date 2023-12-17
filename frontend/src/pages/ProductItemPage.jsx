import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import { fetchProductItem } from "../asyncActions/products"
import Button from "../components/UI/btn_card"

import style from '../components/ProductItemPage/ProductItemPage.module.css'

function ProductItemPage() {

    const BASE_URL = 'http://localhost:3333/'
    const { products } = useSelector(store => store.productList)
    const dispatch = useDispatch()
    const location = useLocation()
    const { id } = useParams()


    const [count, setCount] = useState(1)
    function IncrCount(){
        if(count < 25){
            setCount(count + 1)
        }
    }
    function DecrCount(){
        if(count > 1){
            setCount(count - 1)
        }
    }
    

    useEffect(() => {
        dispatch(fetchProductItem(id))
        document.body.scrollIntoView({ behavior: 'smooth' })
    }, [location.pathname])

    return (
        <div className="content section">
            {products.map(elem =>
                <div className={style.product}>
                    <img src={BASE_URL + elem.image} alt="img_item" className={style.itemImage} />
                    <div className={style.productInfo}>
                        <h1>{elem.title}</h1>
                        <div className={style.price}>
                            <h1>${elem.price}</h1>
                            <h3>{elem.discont_price !== null ? ('$' + elem.discont_price) : ''}</h3>
                        </div>
                        <div className={style.ProductAddToCartButton}>
                            <div className={style.itemCount}>
                                <button onClick={() => IncrCount()}>+</button>
                                <p>{count}</p>
                                <button onClick={() => DecrCount()}>-</button>
                            </div>
                            <Button title={'Add to cart'} />
                        </div>
                        <h1>Description</h1>
                        <p>{elem.description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductItemPage