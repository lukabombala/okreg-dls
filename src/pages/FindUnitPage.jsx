import React from "react";
import "../App.css";
import "../index.css";
import "../authorities.css";

export default function FindUnitPage() {
  return (
    <div className="authorities-container" style={{maxWidth: 900, margin: '0 auto', paddingBottom: 48}}>
      <div style={{fontSize: '1.08rem', marginBottom: 24, lineHeight: 1.7}}>
        W celu znalezienia najbliższej działającej jednostki ZHR, zachęcamy do skorzystania ze strony: {" "}
        <a href="https://spis-jednostek.zhr.pl" target="_blank" rel="noopener noreferrer" style={{color: 'var(--primary)', fontWeight: 600}}>
          https://spis-jednostek.zhr.pl
        </a>.
        <br />
        Można na niej znaleźć miejsce zbiórek, dane kontaktowe drużynowej/drużynowego oraz social media jednostki.
      </div>
      <div style={{marginBottom: 18, fontWeight: 600}}>Ogólne wskazówki:</div>
      <ul style={{marginLeft: 18, marginBottom: 18, lineHeight: 1.7}}>
        <li>drużyny i gromady są niekoedukacyjne, tzn. podzielone na męskie i żeńskie</li>
        <li>wiek 7-11 lat ⇒ zuchy</li>
        <li>wiek 11-15 lat ⇒ harcerze</li>
        <li>wiek 15-20 lat ⇒ wędrownicy</li>
      </ul>
      <div style={{marginBottom: 18}}>
        W przypadku braku odpowiedzi lub potrzeby pilniejszego kontaktu ws. danej drużyny prosimy o wiadomość e-mail do biura okręgu: {" "}
        <a href="mailto:okreg.dls@zhr.pl" style={{color: 'var(--primary)', fontWeight: 600}}>okreg.dls@zhr.pl</a>
      </div>
    </div>
  );
}
