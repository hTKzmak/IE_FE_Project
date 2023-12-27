import { useDispatch } from "react-redux";
import { changeCountAction } from "../../../store/cartReducer";
import style from './CountChanger.module.css';

function CountChanger({ id, count, operations }) {

    const countAction = (id, count) => dispatch(changeCountAction({ id, count }));
    const dispatch = useDispatch();

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
            <div className={style.countValue}>{count}</div>
            <button onClick={handleIncr}>+</button>
        </div>
    );
}

export default CountChanger;