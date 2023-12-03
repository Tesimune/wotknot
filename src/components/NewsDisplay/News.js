import React from 'react'
import FetchAPI from '../Services/FetchAPI'
import './News.css'
export default function News() {
  return (
    <div className='news'>
        <FetchAPI/>
    </div>
  )
}
