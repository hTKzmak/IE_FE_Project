import { useNavigate } from "react-router-dom";
import Button from "../components/UI/btn_card";

function BasketPage() {

    const navigate = useNavigate()

    return (
        <div className="content">
            <h1>Shopping cart</h1>
            <p>Looks like you have no items in your basket currently.</p>
            <Button title={"Continue Shopping"} onclick={() => navigate('/products')} />
        </div>
    );
}

export default BasketPage;
