import { useDispatch } from "react-redux";
import { changeCountAction } from "../../../store/cartReducer";
import style from './Amount.module.css';

function Amount({ id, count, operations }) {
    const dispatch = useDispatch();
    const countAction = (id, count) => dispatch(changeCountAction({ id, count }));

    const handleIncr = () => {
        if (count < 25) {
            operations('+', id);
            countAction(id, 1);
        }
    };

    const handleDecr = () => {
        if (count > 1) {
            operations('-', id);
            countAction(id, -1);
        }
    };

    return (
        <div className={style.itemCount}>
            <button onClick={handleDecr}>-</button>
            <p>{count}</p>
            <button onClick={handleIncr}>+</button>
        </div>
    );
}

export default Amount;