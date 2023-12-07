import React from 'react'
import shoppingDetail2 from './../../images/shoppingDetails2.png'
import './ShopDetail.css'

export default function ShopDetail() {
  return (
    <div className='shoptainer'>
        <a href='/shop'>
        <img src={shoppingDetail2} className='shop-img' alt='WOTKNOTMAG'/>
           <a href='/shop'>
            <button className='shopcard'>
            READ MORE
            </button>
           </a>
        </a>
    </div>
  )
}
