import React, { useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const ResCard = ({ resDetails }) => {
	const { id, name, imgSrc, cuisine, rating, deliveryETA } = resDetails;

	return (
		<Link to={`/restaurants/${id}`} className='res-card'>
			<img src={imgSrc} className='res-img' alt={`${name} image`} />
			<div className='res-details'>
				<div className='res-name'>{name}</div>
				<div className='res-cuisine'>{cuisine}</div>
				<div className='res-rating'>{`⭐ ${rating} Stars`}</div>
				<div className='res-eta'>{`🚴 ${deliveryETA}`}</div>
			</div>
		</Link>
	);
};

/**
 * Higher order component to add a promoted label to the restaurant card
 */
export const withPromotedLabel = (ResCard) => {
	return (props) => {
		return (
			<div className='flex'>
				<label className='absolute bg-slate-700 text-green-50 px-1 py-0.5 m-[-4] rounded-tr-[5px] text-[10px] shadow-md'>
					Promoted
				</label>
				<ResCard {...props} />
			</div>
		);
	};
};

export default ResCard;
