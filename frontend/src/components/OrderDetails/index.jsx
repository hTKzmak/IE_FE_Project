import InputForm from '../UI/InputForm'
import style from './OrderDetails.module.css'

function OrderDetails({setActivate}) {

    return (
        <div className={style.orderForm}>
            <div className={style.text}>
                <h1>Order details</h1>
                <h2>0 Items</h2>
                <div className={style.totalPrice}>
                    <h2>Total</h2>
                    <h1>$300</h1>
                </div>
            </div>
            <div className={style.form}>
                <InputForm title={'Order'} btnStyle={'green'} inputStyle={'orderForm'} setActivate={setActivate}/>
            </div>
        </div>
    )
}

export default OrderDetails