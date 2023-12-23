// import style from "./Input.module.css"

function Input({ stylization, type, id, placeholder, ...otherProps }) {

    return (
        <input className={stylization}
            {...otherProps}
            type={type}
            id={id}
            placeholder={placeholder}
        >
        </input>
    )
}

export default Input