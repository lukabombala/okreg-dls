import React from "react";
import "../App.css";
import "../index.css";
import "../authorities.css";

const trainings = [
  {
    course: "Sanitariusz HOPR",
    date: "15-17.03.2026",
    place: "Wrocław",
    form: "https://example.com/form1"
  },
  {
    course: "Ratownik HOPR",
    date: "12-14.04.2026",
    place: "Legnica",
    form: "https://example.com/form2"
  },
  {
    course: "Ratownik KPP",
    date: "10-12.05.2026",
    place: "Wałbrzych",
    form: "https://example.com/form3"
  },
  {
    course: "Instruktor HOPR",
    date: "7-9.06.2026",
    place: "Jelenia Góra",
    form: "https://example.com/form4"
  }
];

export default function HoprTrainingsPage() {
  return (
    <div className="authorities-container" style={{maxWidth: 1000, margin: '0 auto', paddingBottom: 48}}>
      <div style={{fontSize: '1.08rem', marginBottom: 24, lineHeight: 1.7}}>
        Każdy członek ZHR, który działa w ramach konkretnej jednostki bądź jest instruktorem harcerskim i ma ukończone 15 lat, może być członkiem HOPR. Należy ukończyć kurs, zdobyć stopień oraz uczestniczyć w akcjach i zabezpieczeniach organizowanych przez HOPR DLS. Stopnie HOPR, to w kolejności:
        <ol style={{margin: '12px 0 0 24px'}}>
          <li>Sanitariusz HOPR (znaczek HOPR)</li>
          <li>Ratownik HOPR (znaczek HOPR z granatową podkładką)</li>
          <li>Ratownik KPP (znaczek HOPR z zieloną podkładką)</li>
          <li>Instruktor HOPR (znaczek HOPR z czerwoną podkładką)</li>
        </ol>
      </div>
      <h2 style={{fontSize: '1.13rem', margin: '32px 0 10px 0', color: 'var(--primary)'}}>Wykaz najbliższych szkoleń</h2>
      <div style={{overflowX: 'auto'}}>
        <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '1.07rem', marginBottom: 24}}>
          <thead>
            <tr style={{background: '#f3f7ef'}}>
              <th style={{padding: '10px 8px', border: '1px solid #b7c9a2', color: 'var(--primary)'}}>Kurs</th>
              <th style={{padding: '10px 8px', border: '1px solid #b7c9a2', color: 'var(--primary)'}}>Data</th>
              <th style={{padding: '10px 8px', border: '1px solid #b7c9a2', color: 'var(--primary)'}}>Miejscowość</th>
              <th style={{padding: '10px 8px', border: '1px solid #b7c9a2', color: 'var(--primary)'}}>Zgłoszenia</th>
            </tr>
          </thead>
          <tbody>
            {trainings.map((t, idx) => (
              <tr key={idx}>
                <td style={{padding: '10px 8px', border: '1px solid #b7c9a2'}}>{t.course}</td>
                <td style={{padding: '10px 8px', border: '1px solid #b7c9a2'}}>{t.date}</td>
                <td style={{padding: '10px 8px', border: '1px solid #b7c9a2'}}>{t.place}</td>
                <td style={{padding: '10px 8px', border: '1px solid #b7c9a2'}}>
                  <a href={t.form} target="_blank" rel="noopener noreferrer" style={{color: '#466c2b', fontWeight: 600}}>Formularz</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
