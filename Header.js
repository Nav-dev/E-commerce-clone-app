import React from 'react';
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img className="header__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyiG96Mdxosc92L5ncGruHU9EW3yZbRjVloA&usqp=CAU" />
            </Link>
        
        <div className="header__search">
            <input className="header__searchInput" type="text"/>
            <SearchIcon className="header__searchIcon"/>
        </div>
        <div className= "header__nav">
            <div className='header__option'>
            <span className='header__optionLineOne'>Hello Guest</span>
            <span className='header__optionLineTwo'>Sign In</span>
            </div>
            <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
            </div>
            <div className='header__option'>
            <span className='header__optionLineOne'>My</span>
            <span className='header__optionLineTwo'>Blogs</span>
            </div>
            <Link to="/checkout">
            <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">0</span> 
                </div>
            </Link>
            </div>
        </div>
    );
}

export default Header
