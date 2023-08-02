import React from 'react';
import bild from '../images/vitillbrollop.jpg';

const Welcome = () => (
  <div className="c-welcome">
    <img src={bild} alt="bild" className="c-main__bild" />
    <h1 className="c-main__heading1">VI SKA GIFTA OSS!</h1>
  </div>
);

export default Welcome;