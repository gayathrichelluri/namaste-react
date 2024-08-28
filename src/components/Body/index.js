import React from "react";
import Card from "../Card";
import './index.css';
import { getRestaurants } from "../../api/getRestaurants";

const Body = () => {
    const restaurants = getRestaurants();

    return (
        <div className="body">
            <div className="search-field">Search</div>
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