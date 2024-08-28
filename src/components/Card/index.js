import React from 'react';
import logo from '../../resources/images/logo.png'
import './index.css';

const Card = ({ name, cuisine, rating, deliveryETA }) => {
    return (
        <div className='res-card'>
            <img src={logo} className='res-img' />
            <div className='res-details'>
                <div className='res-name'>{name}</div>
                <div className='res-cuisine'>{cuisine}</div>
                <div className='res-rating'>{rating}</div>
                <div className='res-eta'>{deliveryETA}</div>
            </div>
        </div>
    )
}

export default Card;