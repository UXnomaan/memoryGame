import React from 'react';
import './SingleCard.css';

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className='card' key={card.id}>
      <div className={flipped ? 'flipped' : ''}>
        <img className='front' src={card.src} alt='cardImage' />
        <img
          className='back'
          src='/img/s.webp'
          alt='cardImage'
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
