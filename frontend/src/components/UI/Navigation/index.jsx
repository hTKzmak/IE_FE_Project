import { Link } from "react-router-dom"
import style from './Navigation.module.css'

function Navigation({ title, href, ...otherProps }) {
    return (
        <div className={style.navigation} {...otherProps}>
            <Link to={href}>
                {title}
            </Link>
        </div>
    )
}

export default Navigation