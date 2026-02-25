import React from "react";
import "../App.css";
import "../index.css";
import "../authorities.css";

export default function ContactPage() {
  return (
    <div className="authorities-container" style={{maxWidth: 800, margin: '0 auto', paddingBottom: 48}}>
      <h1 style={{marginBottom: 18}}>Kontakt</h1>
      <div style={{fontSize: '1.08rem', marginBottom: 32, lineHeight: 1.7}}>
        <div>Związek Harcerstwa Rzeczypospolitej Okręg Dolnośląski</div>
        <div style={{marginTop: 12}}>ul. Pomorska 27/2</div>
        <div>50-216 Wrocław</div>
        <div style={{marginTop: 12}}>
          e-mail: <a href="mailto:okreg.dls@zhr.pl" style={{color: '#466c2b', fontWeight: 600}}>okreg.dls@zhr.pl</a>
        </div>
      </div>
      <div style={{fontSize: '1.08rem', marginBottom: 24, lineHeight: 1.7}}>
        Kontakt z mediami: <a href="mailto:rzecznik.dls@zhr.pl" style={{color: '#466c2b', fontWeight: 600}}>rzecznik.dls@zhr.pl</a>, 730 407 770. Więcej informacji <a href="/dla-mediow" style={{color: '#466c2b', fontWeight: 600}}>dla mediów</a>
      </div>
    </div>
  );
}
