import React from "react";
import { imgSource } from "../../utils/custom";
import Divider from "../Divider";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/store/cartSlice";

const MenuCardInfo = ({ card }) => {
	const dispatch = useDispatch();

	const handleAddItem = (item) => {
		dispatch(addItem(item));
	};

	return (
		<React.Fragment>
			<div className='menu-card-details flex-wrap'>
				<div className='menu-card-info w-9/12'>
					<div
						className={`item-${card?.itemAttribute?.vegClassifier.toLowerCase()}`}
					></div>
					<div className='menu-card-name'>{card?.name}</div>
					<div>{`₹ ${(card?.price || card?.defaultPrice) / 100}`}</div>
					{card?.ratings?.aggregatedRating?.rating &&
						card?.ratings?.aggregatedRating?.ratingCountV2 && (
							<div className='menu-card-rating'>{`★ ${card?.ratings?.aggregatedRating?.rating} (${card?.ratings?.aggregatedRating?.ratingCountV2})`}</div>
						)}
					<div className='menu-card-desc'>{`${card?.description ?? ""}`}</div>
				</div>
				<div className='flex'>
					<img
						src={imgSource(card?.imageId)}
						className='menu-card-img'
						alt={`${card?.imageId} image`}
					/>
					<div
						className='absolute mt-[100px] ml-[12px] px-7 py-1 rounded-md bg-white border-[1px] border-gray-300 text-green-600 font-semibold cursor-pointer hover:bg-gray-200'
						onClick={() => handleAddItem(card)}
					>
						Add +
					</div>
				</div>
			</div>
			<Divider />
		</React.Fragment>
	);
};

export default MenuCardInfo;
