import React from "react";
import "../App.css";
import "../index.css";
import "../authorities.css";

const mapPlaceholder = "https://placehold.co/340x340?text=MAPKA+OKRĘGU";
const logoMale = "https://placehold.co/140x140?text=LOGO+CHORĄGWI+MĘSKIEJ";
const logoFemale = "https://placehold.co/140x140?text=LOGO+CHORĄGWI+ŻEŃSKIEJ";

export default function AboutDistrictPage() {
  return (
    <div className="aboutzhr-container authorities-container">
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center', alignItems: 'flex-start', marginBottom: 32}}>
        <div style={{flex: '1 1 340px', minWidth: 280, maxWidth: 400, display: 'flex', justifyContent: 'center'}}>
          <img src={mapPlaceholder} alt="MAPKA OKRĘGU" style={{width: 320, height: 320, background: '#dbe7d0', borderRadius: 28, objectFit: 'cover', display: 'block'}} />
        </div>
        <div style={{flex: '2 1 420px', minWidth: 320, maxWidth: 700}}>
          <div style={{border: '1px solid #b7c9a2', borderRadius: 8, padding: 16, background: 'var(--background-primary)', marginBottom: 18, fontSize: '1.05rem'}}>
            Okręg Dolnośląski jest terenową jednostką Związku Harcerstwa Rzeczypospolitej. Skupia i koordynuje działalność gromad zuchowych, drużyn harcerek i harcerzy, środowisk wędrowniczych oraz kręgów wędrowników starszego działających na obszarze województwa dolnośląskiego. Tworzy wspólnotę wychowawczą opartą o metodę harcerską i służbę podejmowaną lokalnie – w szkołach, parafiach i społecznościach naszych miast i miejscowości.
          </div>
        </div>
      </div>
      <div style={{fontWeight: 600, fontSize: '1.5rem', margin: '18px 0 10px 0', textAlign: 'center'}}>Okręg tworzą:</div>
      <div style={{display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 18}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 160}}>
          <img src={logoMale} alt="LOGO CHORĄGWI MĘSKIEJ" style={{width: 180, height: 180, background: '#dbe7d0', borderRadius: 18, marginBottom: 8}} />
          <div style={{fontSize: '1.2rem', textAlign: 'center', color: 'var(--primary)'}}>Dolnośląska Chorągiew Harcerzy im. Orląt Lwowskich</div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 160}}>
          <img src={logoFemale} alt="LOGO CHORĄGWI ŻEŃSKIEJ" style={{width: 180, height: 180, background: '#dbe7d0', borderRadius: 18, marginBottom: 8}} />
          <div style={{fontSize: '1.2rem', textAlign: 'center', color: 'var(--primary)'}}>Dolnośląska Chorągiew Harcerek "Rzeka" im. św. Jadwigi Śląskiej</div>
        </div>
      </div>
      <div style={{margin: '40px 0 0 0', fontSize: '1.05rem'}}>
        <div style={{marginBottom: 8}}><b>Zgodnie § 5 Statutu ZHR:</b></div>
        <blockquote style={{fontStyle: 'italic', background: '#31491d', color: '#fff', borderLeft: '4px solid #7a9c4b', padding: '10px 18px', borderRadius: 8, marginBottom: 18}}>
          „Celem Związku jest: wychowanie człowieka metodą harcerską:<br/>
          – w myśl Przyrzeczenia i Prawa Harcerskiego,<br/>
          – do świadomej postawy obywatelskiej w poczuciu współodpowiedzialności za losy własnej rodziny, narodu i państwa polskiego,<br/>
          – upowszechnianie w społeczeństwie ideałów harcerskich.”
        </blockquote>
        <div style={{marginBottom: 8}}><b>Do głównych obszarów działania Okręgu Dolnośląskiego ZHR należą m.in.:</b></div>
        <ul style={{marginLeft: 18, marginBottom: 24, lineHeight: 1.7}}>
          <li>upowszechnianie idei harcerskiej i promowanie wychowania metodą harcerską,</li>
          <li>nadzór nad działalnością jednostek organizacyjnych ZHR działających w okręgu,</li>
          <li>reprezentowanie ZHR wobec instytucji publicznych oraz partnerów społecznych,</li>
          <li>administrowanie majątkiem Związku na terenie okręgu,</li>
          <li>pozyskiwanie środków i zasobów na realizację celów statutowych,</li>
          <li>wspieranie (w miarę możliwości) jednostek okręgu w zakresie materialnym,</li>
          <li>wsparcie organizacyjne i merytoryczne codziennej pracy wychowawczej jednostek,</li>
          <li>organizowanie wypoczynku dzieci i młodzieży w czasie wakacji oraz ferii zimowych.</li>
        </ul>
      </div>
    </div>
  );
}
