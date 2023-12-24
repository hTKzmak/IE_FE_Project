import { useDispatch } from "react-redux"
import { decrAction, deleteItemAction, incrAction } from "../../../store/cartReducer"

import {ReactComponent as Delete} from './images/delete.svg'

import style from './BasketItem.module.css'

function BasketItem({ id, price, discont, title, image, count }) {

    const dispatch = useDispatch()
    const BASE_URL = 'http://localhost:3333/'

    return (
        <div className={style.cartItem} key={id}>
            <img src={BASE_URL + image} alt="item" width='100px' />
            <div className={style.content}>
                <div className={style.titleAndBtn}>
                    <h4>{title}</h4>
                    <button onClick={() => dispatch(deleteItemAction(id))}><Delete/></button>
                </div>
                <div className={style.countAndPrice}>
                    <div className={style.itemCount}>
                        <button onClick={() => dispatch(decrAction(id))}>-</button>
                        <p className="countValue">{count}</p>
                        <button onClick={() => dispatch(incrAction(id))}>+</button>
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