import React from "react";
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='bg-blue-900 flex items-center justify-between px-20 py-2'>
            <img src={logo} alt="logo" />
            <div>
                <a className="ml-5 text-white text-lg" href="/shop">Shop</a>
                <a className="ml-5 text-white text-lg" href="/order">Order</a>
                <a className="ml-5 text-white text-lg" href="/inventory">Inventory</a>
                <a className="ml-5 text-white text-lg" href="/about">About</a>
            </div>

        </nav>
    )
}

export default Header;