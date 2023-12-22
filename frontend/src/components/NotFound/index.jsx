import { useNavigate } from "react-router-dom";

import cactusImg from './images/cactus.png'
import { ReactComponent as Four } from "./images/4.svg"
import Button from '../UI/btn_card'

import style from './NotFound.module.css'

function NotFound() {

    const navigate = useNavigate();

    return (
        <div className={style.errorPage}>
            <div className={style.errorSign}>
                <Four />
                <img src={cactusImg} alt="cactus" />
                <Four />
            </div>
            <h1>Page Not Found</h1>
            <p>We’re sorry, the page you requested could not be found. <br /> Please go back to the homepage.</p>
            <Button title={"Go Home"} onclick={() => navigate('/')} />
        </div>
    )
}

export default NotFound