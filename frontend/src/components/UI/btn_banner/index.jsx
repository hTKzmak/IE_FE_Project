import style from "./BtnBaner.module.css"

function BtnBaner({title, type, btnStyle, disabled, ...otherProps}){
    return(
        <button disabled={disabled} className={btnStyle}
            {...otherProps}
            type={type}
        >
            {title}
        </button>
    )
}

export default BtnBaner