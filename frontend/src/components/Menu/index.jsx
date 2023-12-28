import React from 'react';
import style from './Menu.module.css'
import { Link } from 'react-router-dom';

function Menu({ active, setActive }) {
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className={style.menuContent}>
                <div className={style.menuHeader}>Menu</div>
                <ul className={style.list}>
                    <Link to={'/'}>
                        <li className={style.page}>Main Page</li>
                    </Link>
                    <Link to={'/categoires'}>
                        <li className={style.page}>Categories</li>
                    </Link>
                    <Link to={'/products'}>
                        <li className={style.page}>All products</li>
                    </Link>
                    <Link to={'/products/sales'}>
                        <li className={style.page}>All sales</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Menu