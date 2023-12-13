import "./Input.module.css"

function Input({type, id, placeholder, ...otherProps}){
    return(
        <input
            {...otherProps}
            type={type}
            id={id}
            placeholder={placeholder}
        >
        </input>
    )
}

export default Input