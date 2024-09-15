import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to='/'>
                <img className='logo' src={logo} />
            </Link>
            <div className='nav-container'>
                <Link to='/' className='nav-item'>Home</Link>
                <Link to='/about' className='nav-item'>About</Link>
                <Link to='/contact' className='nav-item'>Contact</Link>
                <button onClick={toggleAuthBtn}>
                    {authBtn}
                </button>
            </div>
        </div>
    );
}

export default Header;
