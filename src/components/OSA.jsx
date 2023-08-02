import React from 'react';
import vi2 from '../images/vi2.jpg';

const OSA = () => (
  <div className="c-osa">
    <img src={vi2} alt="ringar" className="c-osa__image" />
    <p>Det går bra att svara på inbjudan till bröllopet via telefon eller mail.</p>
    <p>Emilia: <a className="c-osa__link" href="tel:0703-510 555">0703-510 555</a>, <a className="c-osa__link" href={"mailto:emiliawittberger@gmail.com"}>emiliawittberger@gmail.com</a></p>
    <p>Ludvig: <a className="c-osa__link" href="tel:0766-295 229">0766-295 229</a>, <a className="c-osa__link" href={"mailto:ludvig.akesson1991@gmail.com"}>ludvig.akesson1991@gmail.com</a></p>
    <p>Berätta gärna om ev allergier eller annat som vi behöver veta, t.ex. om ni önskar vegetariskt alternativ.</p>
  </div>
)

export default OSA;