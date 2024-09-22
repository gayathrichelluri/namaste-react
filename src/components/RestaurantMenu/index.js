import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantMenu } from "../../api/getRestaurantMenu";
import "./index.css";
import Divider from "../Divider";
import MenuCard from "../MenuCard";
import ResMenuSkeleton from "../Shimmer/ResMenuSkeleton";
import useRestaurantMenu from "../../utils/hooks/useRestaurantMenu";

const RestaurantMenu = () => {
	const { resId } = useParams();
	const res = useRestaurantMenu(resId);

	console.log(res);

	if (!res) {
		return <ResMenuSkeleton>loading</ResMenuSkeleton>;
	}

	return (
		<div className='details-container'>
			<h2 className='res-detail-name text-lg text-cyan-800 font-bold pl-1'>
				{res?.info?.name}
			</h2>
			<div className='res-detail-card'>
				<div>
					{`⭐ ${res?.info?.avgRating} (${res?.info?.totalRatingsString}) ✦ ${res?.info?.costForTwoMessage}`}
				</div>
				<div className='res-cuisines'>{res?.info?.cuisines?.join(", ")}</div>
				<div className='res-area'>✦ {res?.info?.areaName}</div>
				<div className='res-eta'>
					✦ {res?.info?.sla?.slaString.toLowerCase()}
				</div>
				{res?.info?.feeDetails?.message && (
					<>
						<Divider />
						<div className='res-distance'>
							{`🚴 ${res?.info?.feeDetails?.message?.replace(
								/<\/?[^>]+(>|$)/g,
								"",
							)}`}
						</div>
					</>
				)}
			</div>
			{res?.recommended?.cards && (
				<div className='categories'>
					<MenuCard
						title={res?.recommended?.title}
						cards={res?.recommended?.cards}
					/>
				</div>
			)}

			{res?.items?.map((item, index) => (
				<div className='categories' key={index}>
					<MenuCard title={item?.title} cards={item?.cards} />
				</div>
			))}

			{res?.nestedItems?.map((item, index) => (
				<div className='categories' key={index}>
					<div className='category-name'>{item?.title}</div>
					{item?.categories?.map((item, index) => (
						<MenuCard key={index} title={item?.title} cards={item?.itemCards} />
					))}
				</div>
			))}
		</div>
	);
};

export default RestaurantMenu;
