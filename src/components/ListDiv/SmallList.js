import React from 'react'
import { FaTwitter, FaYoutube } from "react-icons/fa"
import { IoLogoTiktok } from "react-icons/io5"
import { ImInstagram } from "react-icons/im"
import './SmallList.css'

 export default function () {
  return (
    <div className='small-container'>
       <ul>
          <li><a href='/magazine' className='small-link'>MAGAZINE</a></li>
          <li><a href='/events' className='small-link'>EVENTS</a></li>
          <li><a href='/shop' className='small-link'>SHOP</a></li>

          <li className='icons'>
          <li><a href='https://twitter.com/wotknotmag' className='small-link'><FaTwitter className='twitter' /></a></li>
          <li><a href='/magazine' className='small-link'><IoLogoTiktok /></a></li>
          <li><a href='https://www.youtube.com/@wotknotmag' className='small-link'><FaYoutube className='youtube' /></a></li>
          <li><a href='/https://www.instagram.com/wotknotmag/' className='small-link'><ImInstagram className='instagram' /></a></li>
  
          </li>
       </ul>
    </div>
  )
}
