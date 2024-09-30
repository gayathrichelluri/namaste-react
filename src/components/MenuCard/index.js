import React from "react";
import "./index.css";
import Caret from "../Caret";
import MenuCardInfo from "../MenuCardInfo";

const MenuCard = ({ title, cards, showTitleCards, handleAccordionToggle }) => {
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
				cards.map((card, index) => (
					<MenuCardInfo card={card.card.info} key={card.card.info.id} />
				))}
		</div>
	);
};

export default MenuCard;
