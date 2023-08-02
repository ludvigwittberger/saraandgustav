import React from 'react';
import bjorn from '../images/bjorn.jpg';
import viktor from '../images/viktor.jpg';
import robin from '../images/robin.jpg';
import gustav from '../images/gustav1.jpg';
import isabelle from '../images/isabelle.jpg';
import anna from '../images/anna.jpg';
import janna from '../images/janna.jpg';
import michelle from '../images/michelle.jpg';

const WeddingGroup = () => {
  return (
    <div className="c-wedding-group">
      <section className="c-wedding-group__wrapper">
        <h1 className="c-wedding-group__h1">Brudtärnor</h1>
          <ul>
            <li>
              <div className = "c-wedding-group__person">
                <img src={isabelle} alt="isabelle" className="c-wedding-group__image" />
                <div className="c-wedding-group__person--description">
                  <h2 className="c-wedding-group__h2">Isabelle</h2>
                  <p className="c-wedding-group__text">Brudens bästa vän sen gymnasiet. Hon är en jäkel på hembakta praliner och på navigera sig runt på google, speciellt när det kommer till att hitta stans bästa burgare. Brudparet skulle beskriva henne som en glad och sprallig tjej som alltid kommer med nya kreativa idéer. Isabelle trivs med ett glas bubbel i handen men en riktigt bra GT ligger henne varmt om hjärtat. Två säkra kort att prata med Isabelle om är resor och serier. Under bröllopet kan ni förvänta er att hon är den som, med störst risk, stänger stället.</p>  
                </div>
              </div>
            </li>
            <li>
              <div className = "c-wedding-group__person">
                <img src={michelle} alt="michelle" className="c-wedding-group__image" />
                <div className="c-wedding-group__person--description">
                  <h2 className="c-wedding-group__h2">Michelle</h2>
                  <p className="c-wedding-group__text">Brudens bästa vän sen 2011 när de träffades i Nice och pluggade franska tillsammans. Michelle kommer från Brasilien men är en globetrotter av rang. Säkra samtalsämnen under bröllopet är fotografering och språk, Michelle är lite av ett språkgeni, speciellt om man frågar brudparet. Favoritdrycken är guarana men likt bruden så älskar hon också te i alla dess former. Under bröllopet kommer ni lättast identifiera Michelle som tjejen som kommer slå rekord i att fälla glädjetårar och förstöra sminket - men vad gör det när kärlek är vackert.</p>
                </div>
              </div>
            </li>
            <li>
              <div className = "c-wedding-group__person">
                <img src={anna} alt="anna" className="c-wedding-group__image" />
                <div className="c-wedding-group__person--description">
                  <h2 className="c-wedding-group__h2">Anna</h2>
                  <p className="c-wedding-group__text">Brudens bästa vän sen gymnasiet men även personen som är ansvarig för att vårt kära brudpar träffades. Anna är en glad och varm person, finner du dig i ett samtal med henne så har du tur. Hon har nämligen  inga problem att liva upp stämningen och skämta till det, ofta på sin egen bekostnad. Likt bruden så är Anna härligt klumpig och när det kommer till föredragen dryck så är det Margaritas som gäller. Ser ni en person som dansar fuldans under bröllopskvällen, då är det en stor risk att detta är Anna! Glöm då inte att 1. Göra henne sällskap och 2. Tacka henne igen för matchningen som ledde till att vi fick gå på bröllop.</p>
                </div>
              </div>
            </li>
          </ul>
      </section>
      <section className="c-wedding-group__wrapper">
        <h1 className="c-wedding-group__h1">Best men</h1>
          <ul>
            <li>
              <div className = "c-wedding-group__person">
                <img src={bjorn} alt="björn" className="c-wedding-group__image" />
                <div className="c-wedding-group__person--description">
                  <h2 className="c-wedding-group__h2">Björn</h2>
                  <p className="c-wedding-group__text">Ludvigs kortslående golfarvän som du troligtvis hittar i skogen istället för på banan. Den tidigare klubbmästaren Björn lär nu sina två barn att bli lika duktiga som han själv. Björn är en charmig prick som trivs väldigt bra framför grillen med en mojito i handen, men en öl eller två är minst lika uppskattat. Under åren Björn känt brudgummen har det även förekommit en hel del martinis och vi har Björn att tacka för att brudgummen kom hem helskinnad efter sin första fylla. För er som vill hitta Björn under bröllopet så tillhör han den mer ovanliga sorten som befinner sig på dansgolvet likväl som i baren.</p>
                </div>
              </div>
            </li>
            <li>
              <div className = "c-wedding-group__person">
                <img src={viktor} alt="viktor" className="c-wedding-group__image" />
                <div className="c-wedding-group__person--description">
                  <h2 className="c-wedding-group__h2">Viktor</h2>
                  <p className="c-wedding-group__text">Under tiden som brudgummen körde motorcykel i Vietnam, så fanns Viktor vid hans sida. Under samma resa vann han över en av sina största rädslor, höjdrädslan, när de hoppade bungy jump i Thailand. Den genomsnälla förre hockeymålvakten är nu mest på golfbanan eller med hunden Chibs. Viktor trivs bra med en cigarr i munnen och en riktigt trevlig whiskey i handen. När tiden är inne för bröllopet kommer ni hitta honom i baren där han gör Robin sällskap.</p>
                </div>
              </div>
            </li>
            <li>
              <div className = "c-wedding-group__person">
                <img src={robin} alt="Robin" className="c-wedding-group__image" />
                <div className="c-wedding-group__person--description">
                  <h2 className="c-wedding-group__h2">Robin</h2>
                  <p className="c-wedding-group__text">Den före detta hockeyspelaren som hade ett stenhårt slagskott, fler än en gång hände det  att ett plexiglas inte kunna stå emot kraften i Robins skott. Han är den personen som vill skämta varje gång han pratar, även om han ska vara seriös. Mogge, som han även kallas, har ingen direkt favoritdrink, utan hans favorit är ”Nästa” eller ”den som inte är tom” oavsett vad det är.  Vi garanterar att Robin kommer vara stammis i baren!</p>
                  </div>
              </div>
            </li>
          </ul>
        </section>
        <section className="c-wedding-group__wrapper">
          <h1 className="c-wedding-group__h1">Toast madame & Toast master</h1>
            <ul style={{ listStyle: 'none' }}>
            <li>
                <div className = "c-wedding-group__person">
                  <img src={janna} alt="Janna" className="c-wedding-group__image" />
                  <div className="c-wedding-group__person--description">
                    <h2 className="c-wedding-group__h2">Janna</h2>
                    <p className="c-wedding-group__text">Brudens bästa vän sen 24 år tillbaka. Hon är pysslig ut i fingerspetsarna och älskar taco i alla dess former. Brudparet har vid tillfälle beskrivit henne som perfekt flummig och bäst på knäppheter. Numera är det marknadsföring som gäller men Janna har ett förflutet som bartender och GT ligger henne varmt om hjärtat. Det ryktas även om att hon fått Emilia att faktiskt tycka om en GT, vilket i sig är en bedrift. När hon inte håller låda på bröllopet tillsammans med Gustav så kommer man högst troligt hitta henne mitt på dansgolvet.</p>  
                  </div>
                </div>
              </li>
              <li>
                <div className = "c-wedding-group__person">
                  <img src={gustav} alt="Gustav" className="c-wedding-group__image" />
                  <div className="c-wedding-group__person--description">
                    <h2 className="c-wedding-group__h2">Gustav</h2>
                    <p className="c-wedding-group__text">Våran toast master har varit kusin till Ludvig i drygt 28 år. En tidigare simmare som nu ägnar sig åt hobbyfotografering och riktigt snygg fuldans på brudgummens systers bröllop. Något som aldrig slår fel för den spansktalande Gustav är Åkessons hemmagjorda bäsk. Precis som brudgummen, så tycker han att bäsken alltid ska vara med på släktmiddagarna. Om vi inte ser Gustav på dansgolvet under bröllopet blir vi väldigt förvånade!</p>  
                  </div>
                </div>
              </li>
            </ul>
        </section>
      </div>
  )
}

export default WeddingGroup;