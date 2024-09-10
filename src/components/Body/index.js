import React, { useState } from "react";
import Card from "../Card";
import './index.css';
import { getRestaurants } from "../../api/getRestaurants";

const Body = () => {
    const [restaurants, setRestaurants] = useState(getRestaurants());

    return (
        <div className="body">
            <div className="top-container">
                <div className="search-field">Search</div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        setRestaurants(
                            restaurants.filter((res) => res.rating > 4.1)
                        );
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="card-container">
                {restaurants.map((res) => (
                    <Card
                        key={res.id}
                        resDetails={res}
                    />
                ))}
            </div>
        </div>

    );
};

export default Body;