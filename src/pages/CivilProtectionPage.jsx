import React from "react";
import "../App.css";
import "../index.css";
import "../authorities.css";

const photoUrl = "https://placehold.co/520x320?text=Podpisanie+umowy+OL+ZHR";

export default function CivilProtectionPage() {
  return (
    <div className="authorities-container" style={{maxWidth: 1200, margin: '0 auto', paddingBottom: 48}}>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center', alignItems: 'flex-start'}}>
        <div style={{flex: '1 1 320px', minWidth: 260, maxWidth: 340, fontSize: '1.07rem', lineHeight: 1.7}}>
          20 listopada 2025 roku Okręg Dolnośląski ZHR podpisał porozumienie z Wojewodą Dolnośląską w sprawie realizacji Programu Ochrony Ludności, co oznacza jeszcze ściślejszą współpracę na rzecz bezpieczeństwa mieszkańców regionu. W praktyce obejmuje to szkolenia i ćwiczenia, wsparcie działań informacyjnych i pomocowych oraz gotowość naszych kadr do podejmowania zadań wtedy, gdy liczy się szybka reakcja, sprawna organizacja i odpowiedzialność.
        </div>
        <div style={{flex: '1 1 420px', minWidth: 320, maxWidth: 520, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <img src={photoUrl} alt="Podpisanie umowy o współpracy w zakresie Ochrony Ludności" style={{width: '100%', maxWidth: 480, borderRadius: 16, marginBottom: 8, objectFit: 'cover', background: '#dbe7d0'}} />
          <div style={{fontWeight: 600, color: '#fff', background: '#222', borderRadius: 8, padding: '8px 12px', fontSize: '1.05rem', marginTop: -48, marginBottom: 24, boxShadow: '0 2px 8px 0 rgba(49,73,29,0.07)', maxWidth: 420, textAlign: 'center', position: 'relative', zIndex: 2}}>
            Podpisano umowę o współpracy w zakresie Ochrony Ludności pomiędzy Wojewodą Dolnośląską, a Okręgiem Dolnośląskim ZHR
          </div>
          <div style={{fontSize: '0.92rem', color: '#888', textAlign: 'right', width: '100%'}}>fot. FB Dolnośląski Urząd Wojewódzki we Wrocławiu</div>
        </div>
        <div style={{flex: '1 1 320px', minWidth: 260, maxWidth: 340, fontSize: '1.07rem', lineHeight: 1.7}}>
          Jak podkreśliła Wojewoda Dolnośląska Anna Żabska, w działaniach tych szczególną rolę pełnią organizacje, które „będą zabezpieczały ochronę ludności, ale również przygotowania organizacyjne, również humanitarną pomoc społeczną”. Traktujemy to jako wyraz zaufania oraz konkretne zobowiązanie do rzetelnej służby na Dolnym Śląsku – poprzez wychowanie, budowanie kompetencji, współpracę oraz realne wsparcie lokalnych społeczności w sytuacjach podwyższonego ryzyka i kryzysu.
        </div>
      </div>
      <div style={{textAlign: 'center', marginTop: 48, fontSize: '1.35rem', color: '#222', fontWeight: 500}}>
        Więcej informacji wkrótce.
      </div>
    </div>
  );
}
