import React from "react";
import "../App.css";
import "../index.css";
import "../authorities.css";

const placeholder = "https://placehold.co/80x80?text=ZDJ%C4%98CIE";

const troops = [
  {
    name: "Wrocławski Szczep Harcerski \"Czternastka\" im. Szarych Szeregów",
    place: "południowy Wrocław",
    year: "1997",
    units: 13,
    chief: "pwd. Wiktor Litwin",
    links: [{ label: "Facebook", url: "https://facebook.com" }],
    contact: "wsh.czternastka@zhr.pl",
  },
  {
    name: "Wrocławski Szczep ZHR \"Ostoja\"",
    place: "Wrocław-Karłowice/Osobowice",
    year: "",
    units: undefined,
    chief: "pwd. Anna Piskorz",
    links: [{ label: "Facebook", url: "https://facebook.com" }],
    contact: "",
  },
  {
    name: "Szczep Harcerzy Leśnych \"Watra\" im. Wolnego Harcerstwa",
    place: "Wrocław",
    year: "",
    units: 1,
    chief: "",
    links: [{ label: "Facebook", url: "https://facebook.com" }],
    contact: "",
  },
  {
    name: "Trzebnicki Szczep Harcerski \"Siedemnastki\"",
    place: "Trzebnica",
    year: "",
    units: undefined,
    chief: "",
    links: [],
    contact: "",
  },
  {
    name: "Ślężański Szczep Harcerski ZHR",
    place: "Sobótka",
    year: "2025",
    units: 3,
    chief: "",
    links: [{ label: "Facebook", url: "https://facebook.com" }],
    contact: "",
  },
  {
    name: "Sudecki Szczep \"Victoria\"",
    place: "Sudety",
    year: "2023",
    units: 5,
    chief: "",
    links: [{ label: "Facebook", url: "https://facebook.com" }],
    contact: "szczepvictoria@zhr.pl",
  },
];

export default function TroopsPage() {
  return (
    <div className="authorities-container" style={{maxWidth: 900, margin: '0 auto', paddingBottom: 48}}>
      <h1 style={{marginBottom: 18}}>Szczepy</h1>
      <div style={{fontSize: '1.08rem', marginBottom: 24, lineHeight: 1.7}}>
        Szczep (wg „Regulaminu szczepu ZHR”) to jednostka organizacyjna ZHR, którą drużyny lub gromady mogą powołać, aby podtrzymywać tradycję środowiska oraz prowadzić wspólną pracę organizacyjną i gospodarczą.
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 32}}>
        {troops.map((t, idx) => (
          <div key={idx} style={{display: 'flex', alignItems: 'flex-start', gap: 24}}>
            <img src={placeholder} alt="Zdjęcie szczepu" style={{width: 80, height: 80, borderRadius: '50%', background: '#dbe7d0', marginTop: 4}} />
            <div style={{flex: 1}}>
              <div style={{fontWeight: 700, fontSize: '1.13rem', marginBottom: 6}}>{t.name}</div>
              <div style={{display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 2}}>
                <div style={{flex: '1 1 180px', minWidth: 160}}>
                  <div style={{fontSize: '1.01rem', marginBottom: 2}}><b>Miejsce działania:</b> {t.place || <span style={{color:'#bbb'}}>brak danych</span>}</div>
                  <div style={{fontSize: '1.01rem', marginBottom: 2}}><b>Liczba jednostek:</b> {typeof t.units !== 'undefined' ? t.units : <span style={{color:'#bbb'}}>brak danych</span>}</div>
                  <div style={{fontSize: '1.01rem', marginBottom: 2}}><b>Szczepowy:</b> {t.chief || <span style={{color:'#bbb'}}>brak danych</span>}</div>
                </div>
                <div style={{flex: '1 1 180px', minWidth: 160}}>
                  <div style={{fontSize: '1.01rem', marginBottom: 2}}><b>Rok powołania:</b> {t.year || <span style={{color:'#bbb'}}>brak danych</span>}</div>
                  <div style={{fontSize: '1.01rem', marginBottom: 2}}>
                    <b>Linki:</b> {t.links.length > 0 ? t.links.map((l, i) => <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" style={{color: '#466c2b', fontWeight: 600, marginLeft: i > 0 ? 8 : 4}}>{l.label}</a>) : <span style={{color:'#bbb'}}>brak</span>}
                  </div>
                  <div style={{fontSize: '1.01rem', marginBottom: 2}}>
                    <b>Kontakt:</b> {t.contact ? <a href={`mailto:${t.contact}`} style={{color: '#466c2b', fontWeight: 600}}>{t.contact}</a> : <span style={{color:'#bbb'}}>brak</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
