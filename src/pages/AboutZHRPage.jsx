import React from "react";
import "../App.css";
import "../index.css";
import "../authorities.css";

const placeholderImg = "https://placehold.co/320x180?text=GENERYCZNE+ZDJECIE";

export default function AboutZHRPage() {
  return (
    <div className="aboutzhr-container authorities-container">
      <h1>O ZHR</h1>
      <div className="aboutzhr-header" style={{textAlign: 'center', marginBottom: 24}}>
        <img src="https://zhr.pl/wp-content/uploads/2021/03/cropped-cropped-cropped-logo-zhr-1.png" alt="Logo ZHR" style={{height: 80, marginBottom: 8}} />
        <div style={{fontFamily: 'Georgia,serif', fontSize: '2rem', fontWeight: 700, marginBottom: 8}}>
          Związek Harcerstwa Rzeczypospolitej
        </div>
      </div>
      <div className="aboutzhr-main" style={{display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center'}}>
        <div style={{flex: '1 1 320px', minWidth: 280, maxWidth: 420}}>
          <h2 style={{fontSize: '1.2rem', color: '#31491d', fontWeight: 700}}>Misja ZHR</h2>
          <p style={{fontSize: '1.05rem', lineHeight: 1.6}}>
            Związek Harcerstwa Rzeczypospolitej to wspólnota przyjaciół – dzieci, młodzieży i dorosłych, która w oparciu o wartości chrześcijańskie, poprzez przykład własny instruktorek i instruktorów harcerskich, pracę nad sobą, służbę, przygodę oraz inne elementy metody harcerskiej wychowuje człowieka pełnego radości życia, odpowiedzialnego za Polskę i gotowego podjąć wyzwania współczesności.
          </p>
          <div style={{margin: '32px 0', display: 'flex', justifyContent: 'center'}}>
            <img src={placeholderImg} alt="GENERYCZNE ZDJĘCIE ZE STRONY ZHR" style={{width: 260, height: 140, background: '#dbe7d0', borderRadius: 16, objectFit: 'cover', display: 'block'}} />
          </div>
        </div>
        <div style={{flex: '1 1 320px', minWidth: 280, maxWidth: 520}}>
          <h2 style={{fontSize: '1.2rem', color: '#31491d', fontWeight: 700}}>Wizja ZHR</h2>
          <ul style={{fontSize: '1.05rem', lineHeight: 1.7, paddingLeft: 18}}>
            <li><b>Przedwojenne wartości</b><br/>ZHR jest wspólnotą, której członkowie w zmieniającym się społeczeństwie są wierni tradycyjnemu Przyrzeczeniu i Prawu Harcerskiemu.</li>
            <li><b>Organizacja Harcerek i Organizacja Harcerzy</b><br/>Praca wychowawcza prowadzona jest w oparciu o metodę harcerską w odrębnych organizacjach harcerek i harcerzy.</li>
            <li><b>Odpowiedzialna, doświadczona kadra</b><br/>Kadrę Związku stanowią instruktorki i instruktorzy – pełnoletni, kompetentni i będący chrześcijanami.</li>
            <li><b>Aktualny program</b><br/>Związek modyfikuje swój program i sposoby działania, aby odpowiadać na wyzwania zmieniającej się rzeczywistości.</li>
            <li><b>Ogólnopolski zasięg</b><br/>Organizacja inicjuje i wspiera środowiska działające we wszystkich miejscowościach, niezależnie od ich wielkości.</li>
            <li><b>Aktywni członkowie</b><br/>Członkowie ZHR są aktywni w życiu społecznym, mają wpływ na kształtowanie stylu życia młodych ludzi, podejmują służbę na rzecz innych i środowiska naturalnego.</li>
          </ul>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: 36}}>
        <a href="https://zhr.pl/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
          <button style={{background: '#e53935', color: '#fff', fontWeight: 700, fontSize: '1.15rem', border: 'none', borderRadius: 10, padding: '16px 48px', cursor: 'pointer', boxShadow: '0 2px 8px 0 rgba(49,73,29,0.07)'}}>
            Więcej o ZHR
          </button>
        </a>
      </div>
    </div>
  );
}
