import React from "react";
import "../App.css";
import "../index.css";
import "../authorities.css";

export default function HoprInfoPage() {
  return (
    <div className="authorities-container" style={{maxWidth: 900, margin: '0 auto', paddingBottom: 48}}>
      <div style={{fontSize: '1.08rem', marginBottom: 24, lineHeight: 1.7}}>
        Dolnośląski HOPR (Harcerskie Ochotnicze Pogotowie Ratunkowe) to zespół wolontariuszy ZHR, który przygotowuje harcerki, harcerzy i kadrę do działań z zakresu pierwszej pomocy oraz służby związanej z bezpieczeństwem podczas harcerskich przedsięwzięć.
      </div>
      <div style={{display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 18}}>
        <div style={{flex: '2 1 320px', minWidth: 220}}>
          <h2 style={{fontSize: '1.08rem', margin: '18px 0 8px 0', color: 'var(--primary)'}}>Czym się zajmujemy?</h2>
          <b>Szkolenia z pierwszej pomocy</b>
          <div style={{lineHeight: 1.7}}>
            Prowadzimy praktyczne szkolenia i zajęcia doskonalące, które pomagają bezpiecznie prowadzić zbiórki i wyjazdy oraz pewnie reagować w sytuacjach nagłych – w terenie i w codziennej pracy wychowawczej.
          </div>
          <b style={{marginTop: 8, display: 'block'}}>Przygotowanie do służby ratowniczej</b>
          <div style={{lineHeight: 1.7}}>
            Ćwiczymy procedury, pracę zespołową i organizację działań pomocowych (m.in. w warunkach terenowych), aby osoby pełniące służbę były dobrze przygotowane do realnych zdarzeń.
          </div>
          <b style={{marginTop: 8, display: 'block'}}>Zabezpieczenia medyczne wydarzeń</b>
          <div style={{lineHeight: 1.7}}>
            Wspieramy organizatorów harcerskich biwaków, rajdów, zlotów i innych wydarzeń poprzez zabezpieczenia medyczne – w formie punktu pierwszej pomocy lub patroli działających na miejscu.
          </div>
          <h2 style={{fontSize: '1.08rem', margin: '18px 0 8px 0', color: 'var(--primary)'}}>Kto może dołączyć?</h2>
          <div style={{lineHeight: 1.7}}>
            Każdy członek ZHR, który działa w ramach konkretnej jednostki bądź jest instruktorem harcerskim i ma ukończone 15 lat, może być członkiem HOPR. Należy ukończyć kurs, zdobyć stopień oraz uczestniczyć w akcjach i zabezpieczeniach organizowanych przez HOPR DLS.
          </div>
        </div>
        <div style={{flex: '1 1 320px', minWidth: 220}}>
          <h2 style={{fontSize: '1.08rem', margin: '18px 0 8px 0', color: 'var(--primary)'}}>Sztab</h2>
          <div style={{lineHeight: 1.7}}>
            Koordynator: pwd. Damian Malinowski HO<br/>
            Zastępca koordynatora: pwd. Piotr Przybyła HO<br/>
            Zastępca koordynatora: pwd. Roman Wilkoszewski HR<br/>
            Szefowa biura: pwd. Aleksandra Sutkowska HR
          </div>
          <h2 style={{fontSize: '1.08rem', margin: '18px 0 8px 0', color: 'var(--primary)'}}>Członkowie</h2>
          <div style={{lineHeight: 1.7}}>
            Obecnie w ramach Dolnośląskiego HOPR działa 49 członków, w tym:<br/>
            29 sanitariuszy HOPR<br/>
            11 ratowników HOPR<br/>
            7 ratowników KPP<br/>
            2 instruktorów HOPR
          </div>
          <h2 style={{fontSize: '1.08rem', margin: '18px 0 8px 0', color: 'var(--primary)'}}>Współpraca</h2>
          <div style={{lineHeight: 1.7}}>
            Jeśli potrzebujesz szkolenia pierwszej pomocy dla swojego środowiska lub zabezpieczenia medycznego wydarzenia, skontaktuj się z Okręgiem Dolnośląskim ZHR: <a href="mailto:okreg.dls@zhr.pl" style={{color: '#466c2b', fontWeight: 600}}>okreg.dls@zhr.pl</a>
          </div>
        </div>
      </div>
    </div>
  );
}
