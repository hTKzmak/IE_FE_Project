import "./Header.module.css"
import { ReactComponent as Logo } from "./icons/logo.svg"
import { ReactComponent as Basket } from "./icons/basketEmpty.svg"

import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="iefe-logo">
                <Link to={'/'}>
                    <Logo />
                </Link>
            </div>
            <nav>
                <ul>
                    <Link to={'/'}>
                        <li>Main Page</li>
                    </Link>
                    <Link to={'/categoires'}>
                        <li>Categories</li>
                    </Link>
                    <Link to={'/allproducts'}>
                        <li>All products</li>
                    </Link>
                    <Link to={'/allsales'}>
                        <li>All sales</li>
                    </Link>
                </ul>
            </nav>
            <div className="iefe-cart">
                <Link to={'/basket'}>
                    <Basket />
                </Link>
            </div>
        </header>
    )
}

export default Header