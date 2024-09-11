import React from 'react';
import './index.css';

const CardSkeleton = () => {
    return (
        <div className='card'>
            <div className='card-img shimmer' />
            <div className='card-details'>
                <div className='card-name shimmer'></div>
                <div className='card-cuisine shimmer'></div>
                <div className='card-rating shimmer'></div>
                <div className='card-eta shimmer'></div>
            </div>
        </div>
    );
};

export default CardSkeleton;