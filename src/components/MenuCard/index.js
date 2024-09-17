import React, { useState } from 'react';
import './index.css';
import Caret from '../Caret';
import Divider from '../Divider';

const MenuCard = ({ title, cards }) => {
    const [caret, setCaret] = useState(title === 'Recommended' ? 'up' : 'down');

    const imgSource = (imageId) => {
        return `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`
    }

    const toggleCaret = () => {
        setCaret(caret === 'up' ? 'down' : 'up');
    }

    const showCards = () => {
        toggleCaret();
    }

    const cardInfo = (card, index) => {
        return (
            <React.Fragment key={card?.id}>
                <div className='menu-card-details'>
                    <div className='menu-card-info'>
                        <div className={`item-${card?.itemAttribute?.vegClassifier.toLowerCase()}`}></div>
                        <div className='menu-card-name'>{card?.name}</div>
                        <div>{`₹ ${(card?.price || card?.defaultPrice) / 100}`}</div>
                        {card?.ratings?.aggregatedRating?.rating && card?.ratings?.aggregatedRating?.ratingCountV2 &&
                            <div className="menu-card-rating">{`★ ${card?.ratings?.aggregatedRating?.rating} (${card?.ratings?.aggregatedRating?.ratingCountV2})`}</div>
                        }
                        <div className="menu-card-desc">{`${card?.description ?? ''}`}</div>
                    </div>
                    <img src={imgSource(card?.imageId)} className='menu-card-img' alt={`${card?.imageId} image`} />
                </div>
                {index < cards.length - 1 && <Divider />}
            </React.Fragment>
        );
    }

    return (
        <div className="menu-card">
            <div className={`menu-card-title`} style={{ marginBottom: caret === 'up' && '10px' }}>
                <div className={`${caret === 'up' ? 'caret-down' : ''}`}>{`${title} (${cards.length})`}</div>
                <div className="category-title-accordion" onClick={showCards}>
                    <Caret direction={caret} />
                </div>
            </div>
            {caret === 'up' && (
                cards.map((card, index) => cardInfo(card.card.info, index))
            )}
        </div>
    )
}

export default MenuCard;