import React, { useEffect } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { getRestaurantMenu } from '../../api/getRestaurantMenu';

const Card = ({ resDetails }) => {
    const { id, name, imgSrc, cuisine, rating, deliveryETA } = resDetails;

    return (
        <Link to={`/restaurants/${id}`} className='res-card'>
            <img src={imgSrc} className='res-img' alt={`${name} image`} />
            <div className='res-details'>
                <div className='res-name'>{name}</div>
                <div className='res-cuisine'>{cuisine}</div>
                <div className='res-rating'>{`${rating} Stars`}</div>
                <div className='res-eta'>{deliveryETA}</div>
            </div>
        </Link>
    )
}

export default Card;