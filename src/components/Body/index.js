import React, { useState, useEffect } from "react";
import Card from "../Card";
import BodySkeleton from "../Shimmer/BodySkeleton";
import './index.css';
import { getSwiggyRestaurants } from "../../api/getRestaurants";
import useOnlineStatus from "../../utils/hooks/useOnlineStatus";
import MessageCard from "../MessageCard";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        const fetchRestaurants = async () => {
            const data = await getSwiggyRestaurants();
            setRestaurants(data);
            setFilteredRestaurants(data);
        }
        fetchRestaurants();
    }, []);

    const searchRestaurants = () => {
        if (searchText === '') {
            filteredRestaurants.length !== restaurants.length && setFilteredRestaurants(restaurants);
            return;
        }

        setFilteredRestaurants(
            restaurants.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()))
        );
    }

    const onSearchEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchRestaurants();
        }
    }

    if(!onlineStatus) {
        return <MessageCard>
            Looks like you're offline. Please check your internet connection and try again.
        </MessageCard>
    }

    if (!restaurants.length) {
        return <BodySkeleton />
    };

    return (
        <div className="body">
            <div className="top-container">
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={onSearchEnter}
                    />
                    <button className="search-btn" onClick={searchRestaurants}>Search</button>
                </div>
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
                {filteredRestaurants.length && filteredRestaurants.map((res) => (
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