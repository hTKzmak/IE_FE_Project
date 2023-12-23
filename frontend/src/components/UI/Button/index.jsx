import style from "./Button.module.css"

function Button({title, onclick, ...otherProps}){
    return(
        <button className={style.btn}
            {...otherProps}
            onClick={onclick}
        >
            {title}
        </button>
    )
}

export default Button