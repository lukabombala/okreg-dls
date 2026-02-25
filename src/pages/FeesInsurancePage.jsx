import React from "react";
import "../App.css";
import "../index.css";
import "../authorities.css";

export default function FeesInsurancePage() {
  return (
    <div className="authorities-container" style={{maxWidth: 900, margin: '0 auto', paddingBottom: 48}}>
      <h1 style={{marginBottom: 18}}>Składki / ubezpieczenie</h1>
      <div style={{fontSize: '1.08rem', marginBottom: 24, lineHeight: 1.7}}>
        Składka jest to kwota pieniężna wpłacana przez jedną osobę do wspólnej kasy, na jakiś wspólny cel (Słownik Języka Polskiego PWN).
      </div>
      <div style={{marginBottom: 18, lineHeight: 1.7}}>
        W ZHR składka pełni dokładnie taką rolę: jest stałym, wspólnym wkładem w funkcjonowanie naszej organizacji. Dzięki niej możliwe jest prowadzenie pracy wychowawczej w całym kraju i w okręgu – od codziennych zbiórek po wyjazdy, szkolenia kadry i wsparcie formalne jednostek. To ważne podkreślenie: składka nie jest opłatą za zajęcia, ale elementem wynikającym z członkostwa w ZHR. Statut ZHR mówi wprost, że „Wszyscy członkowie Związku mają obowiązek: (...) opłacania składek członkowskich (...)” – a więc regularne i terminowe opłacanie składek jest obowiązkiem każdego członka. Jednocześnie, drużynowy ma prawo zwolnić z jednostki osoby, które zalegają ze składkami przez co najmniej 6 miesięcy.
      </div>
      <div style={{marginBottom: 18, lineHeight: 1.7}}>
        W przypadku osób do 16 roku życia członkostwa nabywa się za zgodą rodziców/opiekunów – podpisując zgodę na przynależność dziecka do ZHR, rodzic zobowiązuje się również do opłacania składek członkowskich dziecka.
      </div>
      <h2 style={{fontSize: '1.15rem', margin: '32px 0 10px 0', color: '#31491d'}}>Składka nie zależy od liczby zbiórek</h2>
      <div style={{marginBottom: 18, lineHeight: 1.7}}>
        Składki nie rosną i nie maleją w zależności od tego, ile zbiórek odbyło się w danym miesiącu i w ilu dziecko uczestniczyło. Składka wynika z samego faktu przynależności do ZHR – tak jak w każdej organizacji opartej o wspólną odpowiedzialność i wspólne cele.
      </div>
      <h2 style={{fontSize: '1.15rem', margin: '32px 0 10px 0', color: '#31491d'}}>Na co przeznaczamy składki?</h2>
      <div style={{marginBottom: 18, lineHeight: 1.7}}>
        Składki pozwalają utrzymać i rozwijać działania ZHR na wielu poziomach. W praktyce finansują m.in.:
        <ul style={{marginLeft: 18, marginTop: 8, marginBottom: 8, lineHeight: 1.7}}>
          <li><b>Bezpieczeństwo i formalności</b><br/>ubezpieczenie OC i NNW członków oraz instruktorów, obsługę prawną i bieżące wsparcie formalne jednostek.</li>
          <li><b>Program i praca wychowawcza</b><br/>materiały programowe do prowadzenia zbiórek, wsparcie działań na poziomie drużyn, hufców i chorągwi (zloty, większe wydarzenia), elementy umundurowania wydawane w ramach pracy wychowawczej (np. sprawności, gwiazdki zuchowe).</li>
          <li><b>Kadra i rozwój</b><br/>kształcenie i podnoszenie kompetencji drużynowych – wychowawców.</li>
          <li><b>Zaplecze organizacyjne</b><br/>funkcjonowanie biur okręgów oraz biura w Warszawie, utrzymanie serwerów, stron internetowych.</li>
        </ul>
        Warto pamiętać, że część składki jest przekazywana do władz centralnych ZHR (16 złotych), część do okręgu (9 złotych). Pozostała kwota jest darowizną na daną drużynę wspierając jej bieżącą działalność, np. zakup materiałów, sprzętu, wyposażenia harcówki itp.
      </div>
      <h2 style={{fontSize: '1.15rem', margin: '32px 0 10px 0', color: '#31491d'}}>Jak opłacić składkę w Okręgu Dolnośląskim ZHR?</h2>
      <div style={{marginBottom: 18, lineHeight: 1.7}}>
        Należy skontaktować się z drużynowym danej jednostki, który poda numer konta oraz wysokość składki. Prawidłowym tytułem przelewu jest: <i>[imię i nazwisko podopiecznego]</i>, składki za <i>[miesiąc]</i>.
      </div>
      <h2 style={{fontSize: '1.15rem', margin: '32px 0 10px 0', color: '#31491d'}}>Ubezpieczenie</h2>
      <div style={{marginBottom: 18, lineHeight: 1.7}}>
        Uczestnicy i kadra wszystkich przedsięwzięć organizowanych przez Okręg Dolnośląski ZHR są objęci <a href="https://zhr.pl/ubezpieczenie/" target="_blank" rel="noopener noreferrer" style={{color: '#466c2b', fontWeight: 600}}>ubezpieczeniem</a> od następstw nieszczęśliwych wypadków (NNW).
      </div>
      <div style={{marginBottom: 18, lineHeight: 1.7}}>
        W razie potrzeby zgłoszenia wniosku o wypłatę odszkodowania NNW, prosimy o zapoznanie się z instrukcją dostępną <a href="https://zhr.pl/ubezpieczenie/" target="_blank" rel="noopener noreferrer" style={{color: '#466c2b', fontWeight: 600}}>tutaj</a>.
      </div>
    </div>
  );
}
