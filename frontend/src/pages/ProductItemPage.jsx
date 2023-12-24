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
    const cartList = useSelector(store => store.cartList)
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


    // // Чтение значения из localStorage
    // const basketValue = localStorage.getItem('basket');

    // // Преобразование JSON-строки в объект JavaScript
    // const basketObj = JSON.parse(basketValue);

    // let matchingItem;
    // if (basketObj && basketObj.Basket && basketObj.Basket.length > 0){
    //     matchingItem = basketObj.Basket.find(item => item.id);
    // }
    // else{
    //     console.log('false')
    // }

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
                                <button onClick={() => DecrCount(elem.id)}>-</button>
                                <p>{counter}</p>
                                <button onClick={() => IncrCount(elem.id)}>+</button>
                            </div>
                            {/* <Button disabled={matchingItem.id == elem.id} onclick={() => dispatch(addNewItemAction({ ...elem, count: counter }))} title={(matchingItem.id == elem.id) ? 'Added' : 'Add to cart'} /> */}
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