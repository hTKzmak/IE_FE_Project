import Button from "../UI/Button";
import style from "./Banner.module.css"



function Banner({salesScroll}) {
    return (
        <div className={style.banner}>
            <h1>Amazing Discounts <br/> on Garden Products!</h1>
            <Button title={"Check out"} onclick={salesScroll}/>
        </div>
    );
}

export default Banner;
