import { useSelector } from 'react-redux';
import InputForm from '../UI/InputForm'
import style from './OrderDetails.module.css'

function OrderDetails({ setActivate, orderProducts }) {

    // количество товаров и итоговая сумма:
    const basketValue = localStorage.getItem('Basket');
    let basketObj = JSON.parse(basketValue);

    const totalCount = basketObj.reduce((acc, item) => acc + item.count, 0);
    const cart = useSelector(store => store.cartList)
    let totalPrice = basketObj.reduce((acc, item) => acc + ((item.discont_price !== null) ? item.discont_price : item.price), 0);

    return (
        <div className={style.orderForm}>
            <div className={style.text}>
                <h1>Order details</h1>
                <h2>{cart.reduce((total, item) => total + item.count, 0)} Items</h2>
                <div className={style.totalPrice}>
                    <h2>Total</h2>
                    <h1>${(totalPrice * totalCount).toFixed(2)}</h1>
                </div>
            </div>
            <div className={style.form}>
                <InputForm title={'Order'} btnStyle={'orderBtn'} inputStyle={'orderForm'} setActivate={setActivate} orderProducts={orderProducts}/>
            </div>
        </div>
    )
}

export default OrderDetails