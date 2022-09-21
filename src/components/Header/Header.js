import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <section class="top-nav">
                <div>
                    <h1>Logo here</h1>
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label class='menu-button-container' for="menu-toggle">
                    <div class='menu-button'></div>
                </label>
                <ul class="menu">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/buy'>Buy</Link></li>
                    <li><Link to='/sell'>Sell</Link></li>
                    <li><Link to='/rent'>Rent</Link></li>
                    <li><Link to='/manageProperty'>ManagePropery</Link></li>
                </ul>
                <ul class="flex">
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>signup</Link></li>
                
                </ul>
            </section>

                <h2>Resize window to collapse menu</h2>
        </div>
    );
};

export default Header;