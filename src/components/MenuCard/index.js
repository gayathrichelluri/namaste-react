import React from "react";
import "./index.css";
import Caret from "../Caret";
import Divider from "../Divider";

const MenuCard = ({ title, cards, showTitleCards, handleAccordionToggle }) => {
	const imgSource = (imageId) => {
		return `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`;
	};

	const cardInfo = (card) => {
		return (
			<React.Fragment key={card?.id}>
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
						<div className='absolute mt-[100px] ml-[12px] px-7 py-1 rounded-md bg-white border-[1px] border-gray-300 text-green-600 font-semibold cursor-pointer hover:bg-gray-200'>
							Add +
						</div>
					</div>
				</div>
				<Divider />
			</React.Fragment>
		);
	};

	return (
		<div className='menu-card'>
			<div
				className={`menu-card-title`}
				style={{ marginBottom: showTitleCards && "10px" }}
			>
				<div
					className={`${showTitleCards ? "title-underline" : ""}`}
				>{`${title} (${cards.length})`}</div>
				<div
					className='category-title-accordion'
					onClick={() => handleAccordionToggle(title)}
				>
					<Caret direction={showTitleCards ? "up" : "down"} />
				</div>
			</div>
			{showTitleCards &&
				cards.map((card, index) => cardInfo(card.card.info, index))}
		</div>
	);
};

export default MenuCard;
