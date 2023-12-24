import style from "./Button.module.css"

function Button({ title, onclick, type, disabled, ...otherProps }) {
    return (
        <button
        className={style.btn}
            type={type}
            disabled={disabled}
            {...otherProps}
            onClick={onclick}
        >
            {title}
        </button>
    )
}

export default Button