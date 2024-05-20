import React, { useState } from 'react';
import css from './Header.module.css';
import Logo from '../../assets/logo.png';
import { CgShoppingBag } from "react-icons/cg";
import { BsList } from "react-icons/bs";

const Header = () => {
    const [ShowMenu, setShowMenu] = useState(true);
    const toggleMenu = () => setShowMenu((ShowMenu) => !ShowMenu);

    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={Logo} alt='brand_logo' />
                <span>Mashroom<sup>™</sup></span>
            </div>
            <div className={css.right}>
                <div className={css.bars} onClick={toggleMenu}>
                    <BsList />
                </div>
                <div className={css.menu} style={{ display: ShowMenu ? 'inherit' : 'none' }}>
                    <ul className={css.menu} >
                        <li>Collections</li>
                        <li>Brands</li>
                        <li>New</li>
                        <li>Sales</li>
                        <li>ENG</li>
                    </ul>
                </div>
                <input type='' placeholder='Search' className={css.search} />
                <CgShoppingBag className={css.cart} />
            </div>
        </div>
    )
}

export default Header
