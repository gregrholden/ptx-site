import React from 'react';
import promo from '../images/ptx-promo1.jpg';

export default function Promo() {
  return (
    <div className='banner--promo'>
      <a href='/vip'>
        <img src={promo} />
      </a>
    </div>
  );
}