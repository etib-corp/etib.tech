import React from 'react';
import './Welcome.css';

function Welcome() {
    return (
        <div className='welcome'>
            <img src={require('./../logo.gif')} alt='logo'/>
            <h2>
                Welcome to the ETIB's website ! <br/>
                Here you will find all the informations about all the members of the team
            </h2>
        </div>
    );
}

export default Welcome;