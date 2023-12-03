import React from 'react';
import './List.css';
import List from './List';
import './ListDiv.css'
import SmallList from './SmallList';

export default function ListDiv() {
  return (
    <div className='list-container'>
      <List/>
      <SmallList/>
  </div>
  )
}
