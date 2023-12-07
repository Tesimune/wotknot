import React from 'react';
import Shop from './../../images/shopDetail.png';
import './AdCard.css'
import UpdateCard from './UpdateCard';

export default function AdCard() {
  return (
    <div className='ad-container'>
        <div className='ads'>
            <img src={Shop} alt='WOTKNOTMAG' className='image'/>
        </div>
        <UpdateCard/>
    </div>
  )
}
