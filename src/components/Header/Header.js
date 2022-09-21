import React from 'react';
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
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                    <li>Four</li>
                    <li>Five</li>
                </ul>
                <ul class="flex">
                    <li>Login</li>
                    <li>signup</li>
                
                </ul>
            </section>

                <h2>Resize window to collapse menu</h2>
        </div>
    );
};

export default Header;