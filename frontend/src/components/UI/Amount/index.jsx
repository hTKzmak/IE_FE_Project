import { useDispatch } from "react-redux"
import { changeCountAction } from "../../../store/cartReducer"
import style from './Amount.module.css'

function Amount({ id, count, operations }) {

    const dispatch = useDispatch()
    const countAction = (id, count) => dispatch(changeCountAction({ id, count }))

    return (
        <div className={style.itemCount}>
            <button onClick={() => {
                operations('-', id)
                countAction(id, -1)
            }}>-</button>

            <p>{count}</p>

            <button onClick={() => {
                operations('+', id)
                countAction(id, 1)
            }}>+</button>
        </div>
    )
}

export default Amount