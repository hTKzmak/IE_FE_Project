import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

import Button from "../UI/btn_card";
import { changeCountAction } from "../../store/cartReducer";

// import style from './Basket.module.css'

function Basket() {

    const dispatch = useDispatch()
    const cartList = useSelector(store => store.cartList)

    const countAction = (id, count) => dispatch(changeCountAction({ id, count }))

    const navigate = useNavigate()

    console.log(cartList)
    console.log(cartList.length)

    if (cartList.length > 0) {
        return (
            <div>
                {cartList.map(elem =>
                    <div key={elem.id}>
                        <h1 style={{ color: 'red' }}>{elem.title}</h1>
                        <h4>${elem.price}</h4>
                        <p>{elem.description}</p>
                        <div style={{ display: 'flex', gap: '10px', height: '30px', alignItems: 'center' }}>
                            <button onClick={() => countAction(elem.id, -1)}>-</button>
                            <p>{elem.count}</p>
                            <button onClick={() => countAction(elem.id, 1)}>+</button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Shopping cart</h1>
                <p>Looks like you have no items in your basket currently.</p>
                <Button title={"Continue Shopping"} onclick={() => navigate('/products')} />
            </div>
        )
    }
}

export default Basket