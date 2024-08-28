import React from 'react';
import './index.css';

const Card = ({ name, imgSrc, cuisine, rating, deliveryETA }) => {
    return (
        <div className='res-card'>
            <img src={imgSrc} className='res-img' alt={`${name} image`} />
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