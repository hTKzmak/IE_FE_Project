import BtnBaner from "../UI/btn_banner";
import discountImage from './image/discountForm.png'

import style from "./DiscountForm.module.css"
import Input from "../UI/Input";


function DiscountForm() {
    return (
        <div className={style.discountForm}>
            <h1>5% off on the first order</h1>
            <div className={style.form}>
                <img src={discountImage} alt="discount_image" />
                <div className={style.fillingForm}>
                    <div className={style.inputs}>
                        <Input stylization={"discountForm"} type={"text"} id={"inputName"} placeholder={"Name"} />
                        <Input stylization={"discountForm"} type={"tel"} id={"inputTel"} placeholder={"Phone number"} />
                        <Input stylization={"discountForm"} type={"email"} id={"inputEmail"} placeholder={"Email"} />
                    </div>
                    <BtnBaner title={"Get a discount"} />
                </div>
            </div>
        </div>
    );
}

export default DiscountForm;
