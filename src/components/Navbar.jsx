import React from 'react';
import '../style/normalize.css'
import '../style/Navbar.css'
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

export function Navbar({titulo}) {
        
    return (
        <div className='container-nav-people'>
            { window.innerWidth <= 600 &&
                <button className='btn-back'>
                    <Link to={'/'}>
                        <MdArrowBack className='arrow-svg'/>
                    </Link>
                </button>
            }
            <h2 className='title'>{titulo}</h2>
        </div>
    )
}
