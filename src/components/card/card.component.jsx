import React from 'react';

import './card.style.css';

export const Card = props => 
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?size=180x180`} alt="Monster"/>
        <h3>{props.monster.name}</h3>
        <p>{props.monster.email}</p>
    </div>
