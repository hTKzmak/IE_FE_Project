import InputForm from '../UI/InputForm'
import style from './OrderDetails.module.css'

function OrderDetails({ setActivate }) {

    // количество товаров и итоговая сумма:
    const basketValue = localStorage.getItem('basket');
    const basketObj = JSON.parse(basketValue);
    const totalCount = basketObj.Basket.reduce((acc, item) => acc + item.count, 0);
    const totalPrice = basketObj.Basket.reduce((acc, item) => acc + ((item.discont_price !== null) ? item.discont_price : item.price), 0);
    

    return (
        <div className={style.orderForm}>
            <div className={style.text}>
                <h1>Order details</h1>
                <h2>{totalCount} Items</h2>
                <div className={style.totalPrice}>
                    <h2>Total</h2>
                    <h1>${Math.round(totalPrice * totalCount)}</h1>
                </div>
            </div>
            <div className={style.form}>
                <InputForm title={'Order'} btnStyle={'green'} inputStyle={'orderForm'} setActivate={setActivate} />
            </div>
        </div>
    )
}

export default OrderDetails