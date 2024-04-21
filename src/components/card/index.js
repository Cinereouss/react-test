import React from 'react';
import './index.scss';

function Card() {
  return (
    <div className='card'>
      <img src='https://source.unsplash.com/featured/300x200' alt='image'/>
      <div className='card__content'>
        <h2>Header</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        <button>Read more</button>
      </div>
    </div>
  );
}

export default Card;