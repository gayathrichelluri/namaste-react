import React, { useState } from 'react';
import logo from '../../resources/images/logo.png';
import './index.css'

const Header = () => {
    const [authBtn, setAuthBtn] = useState('Login');

    const toggleAuthBtn = () => {
        if (authBtn === 'Login')
            setAuthBtn('Logout');
        else
            setAuthBtn('Login');
    }

    return (
        <div className='header'>
            <img className='logo' src={logo} />
            <div className='nav-container'>
                <div className='nav-item'>Home</div>
                <div className='nav-item'>About</div>
                <div className='nav-item'>Cart</div>
                <button onClick={toggleAuthBtn}>
                    {authBtn}
                </button>
            </div>
        </div>
    );
}

export default Header;
