import React from "react";
import "../App.css";
import "../index.css";
import "../authorities.css";

export default function SafeZHRPage() {
  return (
    <div className="authorities-container" style={{maxWidth: 900, margin: '0 auto', paddingBottom: 48}}>
      <div style={{fontSize: '1.08rem', marginBottom: 24, lineHeight: 1.7}}>
        Bezpieczny ZHR to program, którego celem jest ochrona naszych podopiecznych przed przemocą, krzywdzeniem i wykorzystaniem – tak, aby harcerstwo było przestrzenią wychowania, rozwoju i zaufania. Program porządkuje zasady działania kadry, wzmacnia kompetencje instruktorek i instruktorów oraz daje konkretne narzędzia do reagowania, gdy pojawia się niepokojąca sytuacja.
      </div>
      <div style={{marginBottom: 18, lineHeight: 1.7}}>
        <b>Program obejmuje:</b>
        <ul style={{marginLeft: 18, marginTop: 8, marginBottom: 8, lineHeight: 1.7}}>
          <li>Standardy Ochrony Małoletnich – wytyczne dotyczące organizacji i prowadzenia zajęć harcerskich, zapewnienia bezpieczeństwa podczas zbiórek, biwaków i wyjazdów, a także zasad bezpiecznej komunikacji i obecności w internecie. Standardy pomagają budować środowisko oparte na szacunku, odpowiedzialności i czytelnych granicach.</li>
          <li>Szkolenia dla kadry – przygotowanie instruktorek i instruktorów do rozpoznawania sygnałów krzywdzenia, właściwej reakcji oraz prowadzenia działań profilaktycznych. Elementy programu są również uwzględniane w blokach zajęć podczas kursów.</li>
          <li>Procedurę reagowania – ustandaryzowany sposób postępowania w przypadku podejrzenia lub ujawnienia przemocy: jak zabezpieczyć dobro podopiecznego, jak zebrać informacje, gdzie zgłosić sprawę i jak prowadzić działania tak, by były skuteczne i jednocześnie nie pogłębiały krzywdy.</li>
          <li>Konsultacje i wsparcie – pomoc dla drużynowych i kadry, gdy ich podopieczni lub podopieczne doświadczają przemocy albo gdy w środowisku pojawiają się sytuacje wymagające interwencji. Celem jest to, by nikt nie został z trudnym tematem sam i by działania były podejmowane odpowiedzialnie.</li>
        </ul>
      </div>
      <div style={{marginBottom: 18, lineHeight: 1.7}}>
        Więcej o programie przeczytasz <a href="https://zhr.pl/bezpieczny-zhr/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--primary)', fontWeight: 600}}>tutaj</a>.
      </div>
    </div>
  );
}
