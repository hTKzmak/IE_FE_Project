import style from "./BtnBaner.module.css"

function BtnBaner({title, type, ...otherProps}){
    return(
        <button className={style.btnBanner}
            {...otherProps}
            type={type}
        >
            {title}
        </button>
    )
}

export default BtnBaner