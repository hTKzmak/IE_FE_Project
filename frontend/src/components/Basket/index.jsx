import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

import Button from "../UI/Button";
import BasketItem from "./components/BasketItem";

import style from './Basket.module.css'
import OrderDetails from "../OrderDetails";
import NavigationBtn from "../UI/NavigationBtn";
import { orderItemsAction } from "../../store/cartReducer";

function Basket({ setActivate }) {

    const cartList = useSelector(store => store.cartList)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    function orderProductsFromBasket() {
        dispatch(orderItemsAction())
        document.body.scrollIntoView({ behavior: 'smooth' })
    }

    if (cartList.length > 0) {
        return (
            <div className="section">
                <div className="textAndBtn">
                    <h1>Shopping cart</h1>
                    <div className="line"></div>
                    <NavigationBtn title={'Back to the store'} href={'/products'} />
                </div>
                <div className={style.basketInfo}>
                    <div className={style.basketList}>
                        {cartList.map(elem =>
                            <div key={elem.id} >
                                <BasketItem
                                    id={elem.id}
                                    price={elem.price}
                                    discont={elem.discont_price}
                                    image={elem.image}
                                    title={elem.title}
                                    count={elem.count}
                                />
                            </div>
                        )
                        }
                    </div>
                    <OrderDetails setActivate={setActivate} orderProducts={orderProductsFromBasket} />
                </div>
            </div >
        )
    }
    else {
        return (
            <div className="section">
                <div className={style.emptyBasket}>
                    <h1>Shopping cart</h1>
                    <p>Looks like you have no items in your basket currently.</p>
                    <Button title={"Continue Shopping"} onclick={() => navigate('/products')} />
                </div>
            </div>
        )
    }
}

export default Basket