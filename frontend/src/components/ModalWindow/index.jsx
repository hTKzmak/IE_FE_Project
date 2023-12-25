import { ReactComponent as Close } from "./media/close.svg"
import style from './ModalWindow.module.css'

const ModalWindow = ({ activate, setActivate, text }) => {
    return (
        <div className={activate ? style.modalActive : style.modal} onClick={() => setActivate(false)}>
            <div className={style.modal__content} onClick={(e) => e.stopPropagation()}>
                <div className={style.txtAndBtn}>
                    <h1>Congratulations</h1>
                    <button onClick={() => setActivate(false)}><Close/></button>
                </div>
                {text}
            </div>
        </div>
    )
}

export default ModalWindow