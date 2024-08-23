import React from 'react';
import logo from '../../resources/images/logo.png';
import './index.css'

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} />
            <div className='nav-container'>
                <div className='nav-item'>Home</div>
                <div className='nav-item'>About</div>
                <div className='nav-item'>Cart</div>
            </div>
        </div>
    );
}

export default Header;
