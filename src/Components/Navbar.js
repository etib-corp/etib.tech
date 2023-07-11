import React from 'react';
import Contact from './Contact';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <Contact className="bck"></Contact>
            <h1 className='bck'>
                Etib tech
            </h1>
            <h1 className='bck'>
                Login
            </h1>
        </div>
    );
}

export default Navbar;
