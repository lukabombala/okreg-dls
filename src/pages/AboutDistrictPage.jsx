import React from "react";
import "../App.css";
import "../index.css";
import "../authorities.css";

const mapPlaceholder = "https://placehold.co/340x340?text=MAPKA+OKRĘGU";
const logoMale = "https://placehold.co/140x140?text=LOGO+CHORĄGWI+MĘSKIEJ";
const logoFemale = "https://placehold.co/140x140?text=LOGO+CHORĄGWI+ŻEŃSKIEJ";

export default function AboutDistrictPage() {
  return (
    <div className="page-shell section-stack authorities-container">
      <div className="badge-soft mb-2">O Okręgu</div>
      <h1 className="page-title">O Okręgu</h1>
      <div className="section-block">
        <div className="d-flex flex-wrap gap-4 justify-content-center align-items-start">
          <div className="d-flex justify-content-center" style={{ flex: "1 1 340px", minWidth: 280, maxWidth: 400 }}>
            <img src={mapPlaceholder} alt="MAPKA OKRĘGU" style={{ width: 320, aspectRatio: "1 / 1", background: "var(--surface-muted)", borderRadius: 28, objectFit: "cover" }} />
          </div>
          <div style={{ flex: "2 1 420px", minWidth: 320, maxWidth: 700 }}>
            <div className="prose-panel mb-3">
              Okręg Dolnośląski jest terenową jednostką Związku Harcerstwa Rzeczypospolitej. Skupia i koordynuje działalność gromad zuchowych, drużyn harcerek i harcerzy, środowisk wędrowniczych oraz kręgów wędrowników starszego działających na obszarze województwa dolnośląskiego. Tworzy wspólnotę wychowawczą opartą o metodę harcerską i służbę podejmowaną lokalnie – w szkołach, parafiach i społecznościach naszych miast i miejscowości.
            </div>
            <div className="badge-soft mb-3">Okręg tworzą</div>
            <div className="d-flex gap-4 flex-wrap justify-content-center mb-3">
              <div className="d-flex flex-column align-items-center" style={{ minWidth: 160 }}>
                <img src={logoMale} alt="LOGO CHORĄGWI MĘSKIEJ" style={{ width: 110, aspectRatio: "1 / 1", background: "var(--surface-muted)", borderRadius: 18, marginBottom: 8 }} />
                <div className="text-center">Dolnośląska Chorągiew Harcerzy im. Orląt Lwowskich</div>
              </div>
              <div className="d-flex flex-column align-items-center" style={{ minWidth: 160 }}>
                <img src={logoFemale} alt="LOGO CHORĄGWI ŻEŃSKIEJ" style={{ width: 110, aspectRatio: "1 / 1", background: "var(--surface-muted)", borderRadius: 18, marginBottom: 8 }} />
                <div className="text-center">Dolnośląska Chorągiew Harcerek "Rzeka" im. św. Jadwigi Śląskiej</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-block">
        <div className="mb-2"><b>Zgodnie § 5 Statutu ZHR:</b></div>
        <blockquote className="prose-panel" style={{ fontStyle: "italic", borderLeft: "4px solid var(--secondary)" }}>
          „Celem Związku jest: wychowanie człowieka metodą harcerską:<br/>
          – w myśl Przyrzeczenia i Prawa Harcerskiego,<br/>
          – do świadomej postawy obywatelskiej w poczuciu współodpowiedzialności za losy własnej rodziny, narodu i państwa polskiego,<br/>
          – upowszechnianie w społeczeństwie ideałów harcerskich.”
        </blockquote>
        <div className="mb-2"><b>Do głównych obszarów działania Okręgu Dolnośląskiego ZHR należą m.in.:</b></div>
        <ul className="soft-list">
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
