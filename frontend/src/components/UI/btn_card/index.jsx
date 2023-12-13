import "./Button.module.css"

function Button({title, onclick, ...otherProps}){
    return(
        <button
            {...otherProps}
            onClick={onclick}
        >
            {title}
        </button>
    )
}

export default Button