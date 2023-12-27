import { useDispatch, useSelector } from "react-redux"
import { decrAction, deleteItemAction, incrAction } from "../../../store/cartReducer"

import { ReactComponent as Delete } from './images/delete.svg'

import style from './BasketItem.module.css'
import Amount from "../../UI/Amount"
import { useState } from "react"

function BasketItem({ id, price, discont, title, image }) {

    const dispatch = useDispatch()
    const BASE_URL = 'http://localhost:3333/'

    const cart = useSelector(store => store.cartList)

    const cartItem = cart.find(item => item.id === id)

    const [counter, setCounter] = useState(cartItem.count)


    function countOperation(oper) {
        if (oper === '-') {
            counter > 1 && setCounter(counter - 1)
        }
        else if (oper === '+') {
            counter < 25 && setCounter(counter + 1)
        }
    }


    return (
        <div className={style.cartItem} key={id}>
            <img src={BASE_URL + image} alt="item" />
            <div className={style.content}>
                <div className={style.titleAndBtn}>
                    <h4>{title}</h4>
                    <button onClick={() => dispatch(deleteItemAction(id))}><Delete /></button>
                </div>
                <div className={style.countAndPrice}>
                    <div className={style.itemCount}>
                    <Amount
                        id={id}
                        count={counter}
                        operations={countOperation}
                    />
                    </div>
                    <div className={style.itemPrice}>
                        {discont !== undefined && discont !== null ? (
                            <>
                                <h1>${discont}</h1>
                                <h3>${price}</h3>
                            </>
                        ) : (
                            <h1>${price}</h1>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketItem