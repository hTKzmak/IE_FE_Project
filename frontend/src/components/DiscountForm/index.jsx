import discountImage from './image/discountForm.png'

import style from "./DiscountForm.module.css"
import InputForm from "../UI/InputForm";


function DiscountForm({setActivate}) {

    return (
        <div className={style.discountForm}>
            <h1>5% off on the first order</h1>
            <div className={style.form}>
                <img src={discountImage} alt="discount_image" />
                <div className={style.fillingForm}>
                    <InputForm title={'Get a discount'} btnStyle={'btnBanner'} inputStyle={"dicountForm"} setActivate={setActivate}/>
                </div>
            </div>
        </div>
    );
}

export default DiscountForm;
