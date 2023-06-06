import React, { useState } from 'react';
import '../style/TraitsPeople.css';

export function TraitsPeople(people){

    return (
        <div className='container-traits-item'>
            <h2 className="space-subtitle">General Information</h2>
            <div key={people.eye_color} className=''>
                <div className="item-traits-position">
                    <h2 className="item-subtitle-traits">Eye Color</h2>
                    <h2 className="item-subtitle">{people.eye_color}</h2>
                </div>
                <div className="item-traits-position">
                    <h2 className="item-subtitle-traits">Hair Color</h2>
                    <h2 className="item-subtitle">{people.hair_color}</h2>
                </div>
                <div className="item-traits-position">
                    <h2 className="item-subtitle-traits">Skin Color</h2>
                    <h2 className="item-subtitle">{people.skin_color}</h2>
                </div>
                <div className="item-traits-position space-subtitle">
                    <h2 className="item-subtitle-traits">Birth Year</h2>
                    <h2 className="item-subtitle">{people.birth_year}</h2>     
                </div>
            </div>
            <h2 className="space-subtitle">Vehicles</h2>
        </div>
    )
}