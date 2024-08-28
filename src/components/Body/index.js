import React from "react";
import Card from "../Card";
import './index.css';

const Body = () => {
    return (
        <div className="body">
            <div className="search-field">Search</div>
            <div className="card-container">
                <Card
                    name={"Dosa Hut"}
                    cuisine={"South Indian Breakfast, Indian"}
                    rating={"4.5 Stars"}
                    deliveryETA={"25 mins"}
                />
                <Card
                    name={"Ginger"}
                    cuisine={"North Indian Breads, Indian"}
                    rating={"4.3 Stars"}
                    deliveryETA={"15 mins"}
                />
                <Card
                    name={"Chul Ho"}
                    cuisine={"Fast Food, Chinese"}
                    rating={"4.2 Stars"}
                    deliveryETA={"20 mins"}
                />
            </div>
        </div>

    );
};

export default Body;