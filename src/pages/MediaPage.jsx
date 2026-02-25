import React, { useState } from "react";
import "../App.css";
import "../index.css";
import "../authorities.css";

const placeholderImg = "https://placehold.co/120x120?text=ZDJĘCIE";

const pressKitPeople = [
  {
    name: "hm. Bartłomiej Surowski HR",
    role: "Przewodniczący Zarządu Okręgu",
    email: "bartlomiej.surowski@zhr.pl",
  },
  {
    name: "hm. Michał Gadowicz HR",
    role: "Komendant Dolnośląskiej Chorągwi Harcerzy",
    email: "komendant.dls@zhr.pl",
  },
  {
    name: "hm. Magdalena Szkularska HR",
    role: "Komendantka Dolnośląskiej Chorągwi Harcerek",
    email: "komendantka.dls@zhr.pl",
  },
];

function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{margin: '24px 0'}}>
      {items.map((item, idx) => (
        <div key={idx} style={{marginBottom: 8}}>
          <button
            onClick={() => setOpen(open === idx ? null : idx)}
            style={{
              width: '100%',
              textAlign: 'left',
              background: '#f3f7ef',
              border: '1px solid #b7c9a2',
              borderRadius: 8,
              padding: '12px 18px',
              fontWeight: 700,
              fontSize: '1.07rem',
              color: '#31491d',
              cursor: 'pointer',
              outline: 'none',
            }}
            aria-expanded={open === idx}
          >
            {item.title}
          </button>
          {open === idx && (
            <div style={{background: '#fff', border: '1px solid #b7c9a2', borderTop: 'none', borderRadius: '0 0 8px 8px', padding: '16px 18px', fontSize: '1.04rem'}}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function MediaPage() {
  return (
    <div className="authorities-container" style={{maxWidth: 1100, margin: '0 auto', paddingBottom: 48}}>
      <h1 style={{marginBottom: 18}}>Dla mediów</h1>
      <div style={{marginBottom: 24, fontSize: '1.08rem', lineHeight: 1.7}}>
        Na poniższej stronie znajdą Państwo wszelkie materiały dla mediów. W przypadku braku pożądanego elementu prosimy o kontakt na rzecznik.dls@zhr.pl.
      </div>
      <h2 style={{fontSize: '1.13rem', margin: '32px 0 10px 0', color: '#31491d'}}>Kontakt dla mediów oraz aktualności/Social Media</h2>
      <div style={{marginBottom: 18, fontSize: '1.07rem', lineHeight: 1.7}}>
        Rzecznik Prasowy Okręgu: pwd. Wiktor Litwin HO<br/>
        e-mail: <a href="mailto:rzecznik.dls@zhr.pl" style={{color: '#466c2b', fontWeight: 600}}>rzecznik.dls@zhr.pl</a><br/>
        tel.: 730 407 770 (w przypadku nieodbierania, proszę zostawić SMS)<br/>
        Informacje o nadchodzących wydarzeniach oraz relacje z przebytych publikujemy na stronie Facebook: <a href="https://www.facebook.com/zhr.dolnyslask" target="_blank" rel="noopener noreferrer" style={{color: '#466c2b', fontWeight: 600}}>https://www.facebook.com/zhr.dolnyslask</a>
      </div>
      <h2 style={{fontSize: '1.13rem', margin: '32px 0 10px 0', color: '#31491d'}}>Press Kit</h2>
      <div style={{marginBottom: 18, fontSize: '1.07rem', lineHeight: 1.7}}>
        Okręg Dolnośląski jest terenową jednostką Związku Harcerstwa Rzeczypospolitej. Skupia i koordynuje działalność gromad zuchowych, drużyn harcerek i harcerzy, środowisk wędrowniczych oraz kręgów harcerstwa starszego działających na obszarze województwa dolnośląskiego. Tworzy wspólnotę wychowawczą opartą o metodę harcerską i służbę podejmowaną lokalnie – w szkołach, parafiach i społecznościach naszych miast i miejscowości.
        <br/><br/>
        Działamy w wielu miejscowościach na całym Dolnym Śląsku oraz części Wielkopolski. Okręg liczy ok. 1300 członków, w tym zuchenki, zuchów, harcerki, harcerzy oraz instruktorki i instruktorów. Każdy instruktor jest wolontariuszem.
      </div>
      <div style={{display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 32}}>
        {pressKitPeople.map((p, idx) => (
          <div key={idx} style={{background: '#f3f7ef', borderRadius: 16, boxShadow: '0 2px 8px 0 rgba(49,73,29,0.07)', padding: '18px 24px 12px 24px', width: 240, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={placeholderImg} alt="Zdjęcie" className="authority-photo" />
            <div className="authority-info" style={{textAlign: 'center'}}>
              <strong>{p.name}</strong>
              <div>{p.role}</div>
              <div style={{fontSize: '0.97em', marginTop: 4}}>
                <a href={`mailto:${p.email}`} style={{color: '#466c2b', fontWeight: 600}}>{p.email}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 style={{fontSize: '1.13rem', margin: '32px 0 10px 0', color: '#31491d'}}>Materiały do pobrania - logo, zdjęcia</h2>
      <div style={{marginBottom: 18, fontSize: '1.07rem', lineHeight: 1.7}}>
        Link do dysku Google z logo ZHR, logo okręgu, zdjęciami do wykorzystania oraz innymi materiałami:<br/>
        <a href="https://drive.google.com/placeholder-link" target="_blank" rel="noopener noreferrer" style={{color: '#466c2b', fontWeight: 600}}>https://drive.google.com/placeholder-link</a><br/>
        Zdjęcia mogą być bezpłatnie wykorzystywane przez media z dopiskiem: „Fot. Archiwum ZHR Dolny Śląsk”.
      </div>
      <Accordion
        items={[
          {
            title: "Najczęstsze pytania od redakcji (krótkie odpowiedzi)",
            content: (
              <div>
                <b>Kto prowadzi zbiórki i wyjazdy?</b><br/>
                Zajęcia prowadzi kadra wychowawcza (instruktorki i instruktorzy oraz pełnoletni funkcyjni), a wyjazdy są organizowane w wymaganych prawem ramach wypoczynku dzieci i młodzieży.<br/><br/>
                <b>Czy to są zajęcia „za opłatą”?</b><br/>
                ZHR działa jako organizacja społeczna – członkowie opłacają składkę członkowską, a koszty wyjazdów (np. obozu) są rozliczane osobno, zależnie od programu i miejsca.<br/><br/>
                <b>Czy harcerstwo to tylko biwaki i ogniska?</b><br/>
                Wyjazdy są ważne, ale podstawą jest całoroczna praca: zbiórki, praca w małych grupach, sprawności, projekty, służba i działania dla lokalnej społeczności.<br/><br/>
                <b>Jak poprawnie podpisać organizatora?</b><br/>
                Najbezpieczniej: „Związek Harcerstwa Rzeczypospolitej (ZHR), Okręg Dolnośląski”.
              </div>
            ),
          },
          {
            title: "Mini-słowniczek „harcerskich słów”, które często pojawiają się w materiałach",
            content: (
              <ul style={{marginLeft: 18, lineHeight: 1.7}}>
                <li>zbiórka – regularne spotkanie wychowawcze drużyny/gromady,</li>
                <li>biwak – krótki (zwykle weekendowy) wyjazd,</li>
                <li>obóz – letnia forma wypoczynku i intensywnej pracy wychowawczej,</li>
                <li>zimowisko – zimowa forma wypoczynku,</li>
                <li>rajd – wędrówka z zadaniami (często wielodniowa),</li>
                <li>zlot – większe spotkanie wielu jednostek/środowisk,</li>
                <li>apel – zbiórka całej jednostki (np. rozpoczęcie dnia na obozie),</li>
                <li>ognisko – forma programu (śpiew, obrzędowość, podsumowanie dnia),</li>
                <li>harcówka – miejsce zbiórek (lokal/sala),</li>
                <li>sprawność – próba/odznaka potwierdzająca konkretną umiejętność.</li>
              </ul>
            ),
          },
          {
            title: "Słowniczek jednostek organizacyjnych",
            content: (
              <ul style={{marginLeft: 18, lineHeight: 1.7}}>
                <li>Jednostka – ogólne określenie na sformalizowaną część organizacji (np. drużyna, gromada, hufiec).</li>
                <li>Gromada zuchowa – podstawowa jednostka dla najmłodszych (zuchów).</li>
                <li>Drużyna – podstawowa jednostka harcerska (najczęściej: drużyna harcerek / drużyna harcerzy, osobno także drużyny wędrownicze).</li>
                <li>Zastęp – mała, stała grupa w drużynie (kilka–kilkanaście osób, w której toczy się duża część pracy wychowawczej).</li>
                <li>Szóstka – mała grupa w gromadzie zuchowej (odpowiednik zastępu u zuchów).</li>
                <li>Szczep – skupienie kilku jednostek (najczęściej kilku drużyn/gromad) działających blisko siebie, które łączą siły dla wspólnej organizacji, logistyki i pielęgnowania tradycji środowiska.</li>
                <li>Hufiec – jednostka skupiająca drużyny/gromady z określonego terenu; w ZHR osobno funkcjonują hufce harcerek i hufce harcerzy.</li>
                <li>Chorągiew – jednostka skupiająca hufce w okręgu; w ZHR występuje osobno chorągiew harcerek i chorągiew harcerzy.</li>
                <li>Okręg – terenowa jednostka ZHR (najczęściej obejmuje województwo) i łączy działające na jego terenie struktury harcerek i harcerzy.</li>
                <li>Krąg – jednostka dla starszych (np. krąg harcerstwa starszego) albo środowisko instruktorskie (krąg instruktorski).</li>
                <li>Patrol – zespół zadaniowy tworzony na czas wydarzenia (np. rajdu, zlotu); najczęściej nie jest stałą jednostką.</li>
              </ul>
            ),
          },
          {
            title: "Funkcje i stopnie",
            content: (
              <div>
                Funkcja = rola/odpowiedzialność w jednostce (kto za co odpowiada).<br/>
                Stopień = etap rozwoju i umiejętności<br/><br/>
                <b>Przykładowe funkcje:</b>
                <ul style={{marginLeft: 18, lineHeight: 1.7}}>
                  <li>drużynowy / drużynowa – prowadzi drużynę,</li>
                  <li>przyboczny / przyboczna – zastępca drużynowego,</li>
                  <li>zastępowy / zastępowa – prowadzi zastęp,</li>
                  <li>szóstkowy / szóstkowa – prowadzi szóstkę (u zuchów),</li>
                  <li>komendant / komendantka obozu – odpowiada za całość obozu/kolonii (organizacyjnie i formalnie),</li>
                  <li>kwatermistrz – odpowiada za logistykę (np. sprzęt, żywienie, zaopatrzenie).</li>
                </ul>
                <br/>
                Stopnie są podzielone na harcerskie (rozwój osobisty) oraz instruktorskie (formalne, dające uprawnienia państwowe):
                <div style={{display: 'flex', gap: 32, flexWrap: 'wrap', marginTop: 12}}>
                  <table style={{border: '1px solid #b7c9a2', borderCollapse: 'collapse', minWidth: 220}}>
                    <thead>
                      <tr style={{background: '#f3f7ef'}}><th colSpan={2} style={{padding: 6, border: '1px solid #b7c9a2'}}>stopnie harcerskie</th></tr>
                    </thead>
                    <tbody>
                      <tr><td style={{padding: 6, border: '1px solid #b7c9a2'}}>męskie</td><td style={{padding: 6, border: '1px solid #b7c9a2'}}>żeńskie</td></tr>
                      <tr><td style={{padding: 6, border: '1px solid #b7c9a2'}}>młodzik (mt.)</td><td style={{padding: 6, border: '1px solid #b7c9a2'}}>ochotniczka (och.)</td></tr>
                      <tr><td style={{padding: 6, border: '1px solid #b7c9a2'}}>wywiadowca (wyw.)</td><td style={{padding: 6, border: '1px solid #b7c9a2'}}>tropicielka (trop.)</td></tr>
                      <tr><td style={{padding: 6, border: '1px solid #b7c9a2'}}>ćwik (ćw.)</td><td style={{padding: 6, border: '1px solid #b7c9a2'}}>samarytanka (sam.)</td></tr>
                      <tr><td style={{padding: 6, border: '1px solid #b7c9a2'}}>Harcerz Orli (HO)</td><td style={{padding: 6, border: '1px solid #b7c9a2'}}>wędrowniczka (węd.)</td></tr>
                      <tr><td style={{padding: 6, border: '1px solid #b7c9a2'}}>Harcerz Rzeczypospolitej (HR)</td><td style={{padding: 6, border: '1px solid #b7c9a2'}}>Harcerska Rzeczypospolitej (HR)</td></tr>
                    </tbody>
                  </table>
                  <table style={{border: '1px solid #b7c9a2', borderCollapse: 'collapse', minWidth: 220}}>
                    <thead>
                      <tr style={{background: '#f3f7ef'}}><th colSpan={1} style={{padding: 6, border: '1px solid #b7c9a2'}}>stopnie instruktorskie</th></tr>
                    </thead>
                    <tbody>
                      <tr><td style={{padding: 6, border: '1px solid #b7c9a2'}}>przewodnik/przewodniczka</td></tr>
                      <tr><td style={{padding: 6, border: '1px solid #b7c9a2'}}>podharcmistrz/podharcmistrzyni</td></tr>
                      <tr><td style={{padding: 6, border: '1px solid #b7c9a2'}}>harcmistrz/harcmistrzyni</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ),
          },
          {
            title: "Różnice między ZHR, a ZHP",
            content: (
              <div>
                ZHR (Związek Harcerstwa Rzeczypospolitej) i ZHP (Związek Harcerstwa Polskiego) to dwie odrębne organizacje harcerskie – mają własne władze, struktury i dokumenty wewnętrzne. Obie prowadzą wychowanie metodą harcerską, ale różnią się m.in. sposobem organizacji pracy.<br/><br/>
                <ul style={{marginLeft: 18, lineHeight: 1.7}}>
                  <li><b>Struktura i organizacja pracy:</b> w ZHR działają oddzielne organizacje harcerek i harcerzy, a jednostki są co do zasady niekoedukacyjne (dziewczęta i chłopcy pracują w osobnych drużynach/gromadach).</li>
                  <li><b>Charakter światowy:</b> ZHP jest polską organizacją członkowską światowych struktur skautowych (WOSM/WAGGGS). ZHR działa niezależnie, prowadząc współpracę międzynarodową na własnych zasadach.</li>
                </ul>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
