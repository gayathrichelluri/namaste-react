import React, { useState, useEffect } from "react";
import Card from "../Card";
import BodySkeleton from "../Shimmer/BodySkeleton";
import './index.css';
import { getRestaurants } from "../../api/getRestaurants";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            setRestaurants(await getRestaurants());
        }
        fetchRestaurants();
    }, []);

    if (!restaurants.length) {
        return <BodySkeleton />
    };

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
                {restaurants.length && restaurants.map((res) => (
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