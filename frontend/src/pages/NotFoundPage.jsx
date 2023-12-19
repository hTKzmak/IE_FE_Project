import { useNavigate } from "react-router-dom";
import Button from "../components/UI/btn_card";

import cactusImg from '../images/cactus.png'
import { ReactComponent as Four } from "../images/4.svg"

function NotFoundPage() {

    const navigate = useNavigate();

    return (
        <div className="content errorPage">
            <div className="errorSign">
                <Four />
                <img src={cactusImg} alt="cactus" />
                <Four />
            </div>
            <h1>Page Not Found</h1>
            <p>We’re sorry, the page you requested could not be found. <br/> Please go back to the homepage.</p>
            <Button title={"Go Home"} onclick={() => navigate('/')} />
        </div>
    );
}

export default NotFoundPage;
