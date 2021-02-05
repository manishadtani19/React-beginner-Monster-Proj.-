import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        {/* <img alt="monster" src={`https://robohash.org/${props.monster.id}1?set=set2&size=300*300`}></img> */}
        <img alt="monsters" src={`https://i.pinimg.com/236x/4f/a0/02/4fa002b2e808f70084a10a1b74e4ecff.jpg`}></img>
        <h2> {props.monster.name} </h2>
        <p> {props.monster.email} </p>
    </div >
)