import { forwardRef } from "react"
import './Input.module.css'

const Input = forwardRef((props, ref) => {
    return(
        <input ref={ref} {...props}/>
    )
})

export default Input