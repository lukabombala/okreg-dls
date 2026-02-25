import React from "react";
import "../App.css";
import "../index.css";
import "../authorities.css";

export default function InvoicePage() {
  return (
    <div className="authorities-container" style={{maxWidth: 900, margin: '0 auto', paddingBottom: 48}}>
      <h1 style={{marginBottom: 18}}>Faktura za obóz/kolonię/zimowisko</h1>
      <div style={{fontSize: '1.08rem', marginBottom: 24, lineHeight: 1.7}}>
        Istnieje możliwość otrzymania faktury za obóz, kolonię lub zimowisko. W przypadku chęci jej otrzymania, prosimy o kontakt z komendantem wyjazdu lub drużynowym.
      </div>
    </div>
  );
}
