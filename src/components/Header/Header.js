import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Estatery</h1>
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Rent</Link></li>
                    <li><Link to='/'>Buy</Link></li>
                    <li><Link to='/'>Sell</Link></li>
                    <li><Link to='/'>ManagePropery</Link></li>
                </ul>
            </div>
            <div>
                <button>Login</button>
                <button>SignUp</button>
            </div>
        </div>
    );
};

export default Header;