import React from 'react';
import plant2 from '../images/plant2.png';
import newYork from '../images/newYork.jpg';


const Wedding = () => (
  <div className="c-wedding">
    <img src={newYork} alt="new york" className="c-wedding__bild" />
    <div className="c-wedding__wrapper">
      <h1 className="c-wedding__h1">Bröllopsdagen</h1>
      <p>Här kommer allt du behöver veta om bröllopsdagen.</p>
    </div>
    <div className="c-wedding__wrapper">
    <h1 className="c-wedding__h1">Vigsel</h1>
      <p>Vigsel äger rum kl. 15.00 på Villa Thalassa, Dag Hammarskjölds väg 117, 254 33 Helsingborg{' '}(
        <a
          href="https://www.google.se/maps/place/Villa+Thalassa+Konferens+%26+M%C3%B6ten/@56.0704835,12.67328,17z/data=!3m1!4b1!4m8!3m7!1s0x4652321e2fa9a81d:0x7abb092fa16e6439!5m2!4m1!1i2!8m2!3d56.0704835!4d12.6754687"
          target="_blank"
          rel="noopener noreferrer"
          className="c-wedding__link"
        >
          se här
        </a>
      )
      </p>
      <p>Vigselförättare är Kerstin Lingebrant.</p>
      <p>Vigseln kommer att pågå ca 30 minuter, därefter blir det brudskål och mingel.</p>
    </div>
    <div className="c-wedding__wrapper">
      <h1 className="c-wedding__h1">Middag & fest</h1>
      <p>Efter vigseln och minglet serveras en härlig middag för alla gäster.</p>
      <p>För de som önskar vegetariskt alternativ, kontakta Emilia eller Ludvig.</p>
      <p>När middagen är undandukad sätter festen igång!</p>
      <p>Alla gäster kommer få vars två drinkbiljetter (ej personliga). Om mer önskas finns det dryck att köpa i baren.</p>
    </div>
    <div className="c-wedding__wrapper">
      <h1 className="c-wedding__h1">Tal</h1>
      <p>För er som önskar att hålla tal, kontakta toast madame och toast master för mer information.</p>
      <p><a className="c-wedding__link" href={"mailto:toastforourlove@hotmail.com"}>toastforourlove@hotmail.com </a></p>
    </div>
    <div className="c-wedding__wrapper">
      <h1 className="c-wedding__h1">Övernattning</h1>
      <p>Det finns möjlighet till övernatting på Villa Thalassa till självkostanadspris. Priset är 1645kr/rum för en natt och 2590kr/rum om man vill bo fredag-söndag. En smarrig frukost är inkluderat i priset.</p>
      <p>Vi hoppas att så många som möjligt väljer att sova över så vi alla kan njuta av en trevlig frukost tillsammans!</p>
      <p> För att boka, maila: <a className="c-wedding__link" href={"mailto:info@villathalassa.se"}>info@villathalassa.se</a> och uppge att ni vill bo över i samband med vårt bröllop.</p>
    </div>
    <div className="c-wedding__wrapper">
      <h1 className="c-wedding__h1">Klädsel</h1>
      <div className="c-wedding__img-with-heading"><img src={plant2} alt="plant" className="c-wedding__img" /><h3 className="c-wedding__h3">Kostym</h3><img src={plant2} alt="plant" className="c-wedding__img-flip c-wedding__img" /></div>
      <p>Eftersom kostym inte finns som formell dresscode, vill vi förtydliga: </p>
      <p><strong>Hon: </strong>Klänning eller kjol som går från knäna och nedåt. Välj något ni trivs i. Undvik helsvarta och helvita klänningar.</p>
      <p><strong>Han: </strong>Kostym, ljus eller mörk. Snygg skjorta, slips eller fluga.</p>
    </div>
    <div className="c-wedding__wrapper">
      <h1 className="c-wedding__h1">Barn</h1>
      <p>Vi älskar era gulliga ungar men denna dag passar det bättre att de är hemma med sin barnvakt.</p>
      <p>Barn som ammas är förstås välkomna.</p>
    </div>
  </div>
)

export default Wedding;