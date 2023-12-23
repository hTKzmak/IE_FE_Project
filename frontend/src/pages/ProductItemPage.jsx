import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import { fetchProductItem } from "../asyncActions/products"

import style from './stylesForPages/ProductItemPage.module.css'
import { addNewItemAction } from "../store/cartReducer"
import Button from "../components/UI/Button"

function ProductItemPage() {

    const BASE_URL = 'http://localhost:3333/'
    const { products } = useSelector(store => store.productList)
    const dispatch = useDispatch()
    const location = useLocation()
    const { id } = useParams()


    const [counter, setCounter] = useState(1)

    useEffect(() => {
        dispatch(fetchProductItem(id))
        document.body.scrollIntoView({ behavior: 'smooth' })
    }, [location.pathname])


    function IncrCount() {
        if (counter < 25) {
            setCounter(counter + 1)
        }
    }
    function DecrCount() {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }


    return (
        <div className="content section">
            {products.map(elem =>
                <div className={style.product} key={elem.id}>
                    <img src={BASE_URL + elem.image} alt="img_item" className={style.itemImage} />
                    <div className={style.productInfo}>
                        <div className={style.forMobile}>
                            <img src={BASE_URL + elem.image} alt="img_item" />
                        </div>
                        <h1>{elem.title}</h1>
                        <div className={style.price}>

                            {elem.discont_price !== null ? (
                                <>
                                    <h1>${elem.discont_price}</h1>
                                    <div className={style.salesMedia}>
                                        <h3>${elem.price}</h3>
                                        <div className={style.rebate}>{Math.round((elem.price - elem.discont_price) / elem.price * 100)}%</div>
                                    </div>
                                </>
                            ) : (
                                <h1>${elem.price}</h1>
                            )}

                        </div>
                        <div className={style.ProductAddToCartButton}>
                            <div className={style.itemCount}>
                                <button onClick={() => DecrCount()}>-</button>
                                <p>{counter}</p>
                                <button onClick={() => IncrCount()}>+</button>
                            </div>
                            <Button onclick={() => dispatch(addNewItemAction({ ...elem, count: counter }))} title={'Add to cart'} />
                        </div>
                        <h2>Description</h2>
                        <p>{elem.description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductItemPage