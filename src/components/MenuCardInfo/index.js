import React from "react";
import { imgSource } from "../../utils/custom";
import Divider from "../Divider";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../utils/store/cartSlice";
import "./index.css";

const MenuCardInfo = ({ card }) => {
	const dispatch = useDispatch();
	const totalQuantity = useSelector(
		(state) =>
			state.cart.items.find((item) => item.id === card.id)?.quantity || 0,
	);

	const handleItems = (item, isIncrement) => {
		dispatch(isIncrement ? addItem(item) : removeItem(item));
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
						className={`absolute mt-[100px] w-20 ml-[19px] px-2 py-1 rounded-md bg-white border-[1px] border-gray-300 font-semibold`}
					>
						<div className='flex gap-2 justify-between'>
							{totalQuantity > 0 && (
								<div
									className='px-1 text-red-700 cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out'
									onClick={() => handleItems(card, false)}
								>
									-
								</div>
							)}
							{totalQuantity > 0 ? `${totalQuantity}` : `Add`}
							<div
								className='px-1 text-green-600 cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out'
								onClick={() => handleItems(card, true)}
							>
								+
							</div>
						</div>
					</div>
				</div>
			</div>
			<Divider />
		</React.Fragment>
	);
};

export default MenuCardInfo;
