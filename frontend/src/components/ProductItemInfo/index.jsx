import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"

import style from './ProductItemInfo.module.css'
import { fetchProductItem } from "../../asyncActions/products"
import { addNewItemAction } from "../../store/cartReducer"
import Button from "../UI/Button"
import Amount from "../UI/Amount"

function ProductItemInfo() {

    const BASE_URL = 'http://localhost:3333/'
    const { products } = useSelector(store => store.productList)
    const dispatch = useDispatch()
    const location = useLocation()
    const { id } = useParams()

    const cart = useSelector(store => store.cartList)

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        dispatch(fetchProductItem(id))
        document.body.scrollIntoView({ behavior: 'smooth' })
    }, [location.pathname])

    function countOperation(oper) {
        if (oper === '-') {
            counter > 1 && setCounter(counter - 1)
        }
        else if (oper === '+') {
            setCounter(counter + 1)
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
                                <h2>${elem.price}</h2>
                            )}

                        </div>
                        <div className={style.ProductAddToCartButton}>
                            <div className={style.itemCount}>
                                <Amount id={id} count={counter} operations={countOperation} />
                            </div>
                            <Button onclick={() => dispatch(addNewItemAction({

                                id: elem.id,
                                title: elem.title,
                                price: elem.price,
                                discont_price: (elem.discont_price ? elem.discont_price : null),
                                count: counter,
                                image: elem.image

                            }))} title={cart.find(item => item.id === elem.id) ? 'Added' : 'Add to cart'} disabled={cart.find(item => item.id === elem.id) ? true : false} />
                        </div>
                        <h2>Description</h2>
                        <p>{elem.description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductItemInfo