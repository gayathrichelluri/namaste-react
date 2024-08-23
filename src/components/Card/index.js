import React from 'react';
import logo from '../../resources/images/logo.png'
import './index.css';

const Card = (props) => {
    return (
        <div className='res-card'>
            <img src={logo} className='res-img' />
            <div className='res-details'>
                <div className='res-name'>Restaurant Name</div>
                <div className='res-cuisine'>Cuisine</div>
                <div className='res-rating'>Rating</div>
                <div className='res-eta'>Delivery ETA</div>
            </div>
        </div>
    )
}

export default Card;