import { forwardRef } from "react"

const Sales = forwardRef((props, ref) => {

    return (
        <div ref={ref}>
            <h1>Sales</h1>
        </div>
    )
})

export default Sales