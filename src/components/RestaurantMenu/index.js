import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantMenu } from "../../api/getRestaurantMenu";
import './index.css';
import Divider from "../Divider";
import MenuCard from "../MenuCard";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [res, setRes] = useState();

    useEffect(() => {
        (async () => {
            const data = await getRestaurantMenu(resId);
            setRes(data);
        })();
    }, []);

    if (!res) {
        return <div>loading</div>;
    }

    return (
        <div className='details-container'>
            <h2 className="res-detail-name">{res?.info?.name}</h2>
            <div className="res-detail-card">
                <div>
                    {`⭐ ${res?.info?.avgRating} (${res?.info?.totalRatingsString}) ✦ ${res?.info?.costForTwoMessage}`}
                </div>
                <div className="res-cuisines">{res?.info?.cuisines?.join(", ")}</div>
                <div className="res-area">✦ {res?.info?.areaName}</div>
                <div className="res-eta">✦ {res?.info?.sla?.slaString.toLowerCase()}</div>
                <Divider />
                <div className="res-distance">{`🚴 ${res?.info?.feeDetails?.message.replace(/<\/?[^>]+(>|$)/g, "")}`}</div>
            </div>
            <div className="categories">
                <MenuCard title={res?.recommended?.title} cards={res?.recommended?.cards} />
            </div>

            {res?.categories?.map((category, index) => (
                <div className="categories" key={index}>
                    <div className="category-name">{category?.title}</div>
                    {category?.categories?.map((item, index) => (
                        <MenuCard key={index} title={item?.title} cards={item?.itemCards} />
                    ))}
                </div>
            ))}

        </div>
    );
}

export default RestaurantMenu;