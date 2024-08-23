import React from "react";
import Card from "../Card";
import './index.css';

const Body = () => {
    return (
        <div className="body">
            <div className="search-field">Search</div>
            <div className="card-container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>

    );
};

export default Body;