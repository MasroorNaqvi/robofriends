import React from 'react';
// import './Card.css';

const card = ({ name, email }) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <img alt='card' src={`https://robohash.org/${name}?150x150`}></img>
            <div className='tc'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default card;