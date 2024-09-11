import React from "react";
import CardSkeleton from "../CardSkeleton";

const BodySkeleton = () => {
    const cards = Array.from({ length: 10 });

    return (
        <div className="body">
            <div className="top-container">
                <div className="search-field">Search</div>
                <button className="filter-btn">
                    Top Rated Restaurants
                </button>
            </div>
            <div className="card-container">
                {cards.map((card, index) => (
                    <CardSkeleton key={index} />
                ))}
            </div>
        </div>

    );
};

export default BodySkeleton;