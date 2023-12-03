import React from 'react'
import './ClothBanner.css'
import shoppingDetail from './../../images/shoppingDetails.png'


export default function ClothBanner() {
  return (
    <div className='class-container'> 
        <a href='/shop'>
        <img src={shoppingDetail} alt='WOTKNOTMAG'/>
        </a>
    </div>
  )
}
