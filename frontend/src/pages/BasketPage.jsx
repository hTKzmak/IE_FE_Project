import { useState } from "react";
import Basket from "../components/Basket";
import ModalWindow from "../components/ModalWindow";

function BasketPage() {

    const [modalActive, setModalActive] = useState(false)

    return (
        <div className='content section'>
            <ModalWindow activate={modalActive} setActivate={setModalActive} text={<p>Your order has been successfully placed on the website. <br/> A manager will contact you shortly to confirm your order.</p>} />
            <Basket setActivate={setModalActive}/>
        </div>
    );
}

export default BasketPage;
