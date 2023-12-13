import style from "./BtnBaner.module.css"

function BtnBaner({title, ...otherProps}){
    return(
        <button className={style.btnBanner}
            {...otherProps}
        >
            {title}
        </button>
    )
}

export default BtnBaner