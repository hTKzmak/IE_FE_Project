import style from "./Header.module.css"
import { ReactComponent as Logo } from "./icons/logo.svg"
import { ReactComponent as Basket } from "./icons/basketEmpty.svg"
import { ReactComponent as Menu } from "./icons/menu.svg"

import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'

function Header({ active, setActive }) {

    const [totalCount, setTotalCount] = useState(0);
    const cart = useSelector(store => store.cartList)
    const basketLength = cart.length

    // let displayStyle = totalCount < 1 ? "none" : "flex";

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
                    <Link to={'/products'}>
                        <li>All products</li>
                    </Link>
                    <Link to={'/products/sales'}>
                        <li>All sales</li>
                    </Link>
                </ul>
                <button className={style.forMobile} onClick={() => setActive(!active)}><Menu /></button>
            </nav>
            <div className="iefe-cart">
                <Link to={'/basket'}>
                    {basketLength > 0 && <div className="cart">{cart.reduce((total, item) => total + item.count , 0)}</div>}
                    <Basket />
                </Link>
            </div>
        </header>
    )
}

export default Header