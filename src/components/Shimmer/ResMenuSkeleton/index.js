import React from 'react';
import './index.css';

const ResMenuSkeleton = () => {
    return (
        <div className="res-menu-page-skeleton">
            <div className="name-skeleton shimmer"></div>
            <div className='details-container-shimmer shimmer'></div>
            <div className='menu-info-skeleton shimmer'></div>
        </div>

    );
};

export default ResMenuSkeleton;