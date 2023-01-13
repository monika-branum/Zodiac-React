import React from 'react';
import './Zodiac.css';

export default function Zodiac(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={`./images/${props.name}.png`}></img>
      <p>{props.dates}</p>
      <p>{props.symbol}</p>
    </div>
  );
}
