import React from 'react'
import './HeaderIcon.css'
import { Link } from 'react-router-dom'
import SearchBar from '../Search/SearchBar'
import Wot from './../../images/wot.jpg'
import Logo from './../../images/logo.jpg'
import TextDiv from '../Text/TextDiv'


export default function HeaderIcon() {
  return (
    <div  style={{ marginTop:"-20px"}}>
    <div className='container' style={{
      backgroundImage:`url(${Wot})`,
      backgroundSize: 'cover',
      minWidth: '1250px',
      minHeight: '800px',
      marginLeft:"10px",
      backgroundRepeat:"no-repeat",
    }}>
      <ul className='ul'>
        <li className='head'>
      <Link to={'/'} className='header'>
      <img src={Logo} alt="Wotknotmag" className='imag' style={{width:"100px", height:"100px", marginTop:"10px", marginLeft:"-100px"}}/>
      </Link>
      </li>


      <li>
        <SearchBar/>
      </li>
      </ul>
      <div>
        <TextDiv/>
      </div>
    </div>
    </div>
  )
}
