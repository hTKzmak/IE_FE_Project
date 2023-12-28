import { useDispatch, useSelector } from "react-redux"
import { deleteItemAction } from "../../../store/cartReducer"

import { ReactComponent as Delete } from './images/delete.svg'

import style from './BasketItem.module.css'

import { useState } from "react"
import CountChanger from "../../UI/CountChanger"

import { BASE_URL } from '../../../index'

function BasketItem({ id, price, discont, title, image }) {

    // const BASE_URL = 'http://localhost:3333/'

    const dispatch = useDispatch()

    const cart = useSelector(store => store.cartList)

    const cartItem = cart.find(item => item.id === id)

    const [counter, setCounter] = useState(cartItem.count)


    function countUpdate(elem) {
        if (elem === '-') {
            counter > 1 && setCounter(counter - 1)
        }
        else if (elem === '+') {
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
                        <CountChanger
                            id={id}
                            count={counter}
                            operations={countUpdate}
                        />
                    </div>
                    <div className={style.itemPrice}>
                        {discont !== undefined && discont !== null ? (
                            <>
                                <h1>${discont}</h1>
                                <h3 className="discountPrice">${price}</h3>
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