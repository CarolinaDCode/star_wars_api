import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { TraitsPeople } from './TraitsPeople';
import '../index.css';
import '../style/Peopleitem.css';

export function PeopleItem(people) {
  const regex = /\/(\d+)/;
  const match = people.url.match(regex);
  const id = match ? match[1] : '';


  return (
    <div className='container-people-item'>
      <div key={people.name} className=''>
        <h2 className="item-subtitle">{people.name}</h2>
        <p>{people.gender}</p>
        <p>{people.mostrar}</p>
      </div>
        <button className='btn-arrow'>
          <Link to={`/${id}`}>
            <MdOutlineArrowForwardIos className='arrow-svg'/>
          </Link>
        </button>
    </div> 
  )
}
