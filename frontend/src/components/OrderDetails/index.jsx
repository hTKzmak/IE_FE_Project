import Button from '../UI/Button'
import Input from '../UI/Input'
import style from './OrderDetails.module.css'

function OrderDetails() {
    return (
        <div className={style.orderForm}>
            <div className={style.text}>
                <h1>Order details</h1>
                <h2>Items</h2>
                <div className={style.totalPrice}>
                    <h2>Total</h2>
                    <h1>$300</h1>
                </div>
            </div>
            <div className={style.form}>
                <Input stylization={"orderForm"} type={"text"} id={"inputName"} placeholder={"Name"} />
                <Input stylization={"orderForm"} type={"tel"} id={"inputTel"} placeholder={"Phone Number"} />
                <Input stylization={"orderForm"} type={"email"} id={"inputEmail"} placeholder={"Email"} />
                <Button title={"Order"}/>
            </div>
        </div>
    )
}

export default OrderDetails