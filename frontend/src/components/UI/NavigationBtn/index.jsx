import { Link } from "react-router-dom"
import style from './Navigation.module.css'

function NavigationBtn({ displaytype, title, href, ...otherProps }) {
    return (
        <Link style={{display: displaytype}} className={style.navigation} {...otherProps} to={href}>
            {title}
        </Link>
    )
}

export default NavigationBtn