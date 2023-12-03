import React from 'react'
import HeaderIcon from './HeaderIcon'
import './Header.css'
import ShoppingDetails from '../ShoppingDetails/ShoppingDetails'
import ListDiv from '../ListDiv/ListDiv'


export default function Header() {
  return (
    <div className='container'>
        <HeaderIcon/>
        <ShoppingDetails/>
        <ListDiv/>
    </div>
  )
}
