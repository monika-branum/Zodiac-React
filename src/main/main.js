import React from 'react';
import { zodiac } from '../data.js';
// import { zodiac } from '../data.js';
import Zodiac from '../Zodiac/Zodiac.js';

export default function Main() {
  return (
    <div>
      {zodiac.map((sign) => (
        <Zodiac key={sign.id} name={sign.name} dates={sign.dates} symbol={sign.symbol} />
      ))}
    </div>
  );
}
