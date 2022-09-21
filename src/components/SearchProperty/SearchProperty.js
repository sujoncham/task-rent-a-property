import React from 'react';
import './SearchProperty.css';

const SearchProperty = () => {
    return (
        <div>
            <div className='search-container'>
                <h1>Search Properties to Rent</h1>
                <div>
                    <input type="text" className='search-field' name="" id="" />
                    <span>dd</span>
                    <button className='btnSearch'>Search</button>
                </div>
            </div>
            <div className='search-bar'>
                <div className='search-item'>
                    <span>Location</span>
                </div>
                <div className='search-item'>
                    <span>When</span>
                </div>
                <div className='search-item'>
                    <span>Price</span>
                </div>
                <div className='search-item'>
                    <span>Property type</span>
                </div>
                <div className='search-item'>
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default SearchProperty;