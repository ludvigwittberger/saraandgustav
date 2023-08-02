import React from 'react';
import bild from '../images/vitillbrollop.jpg';

const Welcome = () => (
  <div className="c-welcome">
    <img src={bild} alt="bild" className="c-main__bild" />
    <h1 className="c-main__heading1">VI SKA GIFTA OSS!</h1>
    <p>Den 19 juni, 2021 är det dags!! Då blir det bröllop.</p>
    <p>Det ser vi verkligen fram emot. Eftersom du hittat hit så har du troligtvis fått vårt inbjudningskort med länk till den här hemsidan.</p>
    <p>Vi hoppas att du kan komma och fira vår bröllopsdag med oss. Det skulle göra oss väldigt glada!</p>
    <p>Kram,</p>
    <p>Emilia & Ludvig</p>
  </div>
);

export default Welcome;