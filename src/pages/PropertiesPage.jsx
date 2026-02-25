import React from "react";
import "../App.css";
import "../index.css";
import "../authorities.css";

const properties = [
  {
    name: "Siedziba Okręgu/Biuro",
    address: "ul. Pomorska 27/2, 50-216 Wrocław",
    img: "https://placehold.co/320x180?text=Zdjęcie+biura",
    capacity: "30👥",
    features: "Toaleta, prysznic, kuchnia, 2 pokoje",
    contact: "okreg.dls@zhr.pl",
    button: null,
    color: "#6bbf59"
  },
  {
    name: "Harcerski Ośrodek Wodny \"Zatoka\"",
    address: "ul. Długa 65a, 53-633 Wrocław",
    img: "https://zatoka.zhr.pl/wp-content/uploads/2021/03/logo-zatoka-300x300.png",
    capacity: "20👥 (pawilon), 50+ ⛺",
    features: "Toaleta, 2 prysznice",
    contact: "okreg.dls@zhr.pl",
    button: "Więcej",
    color: "#6bbf59"
  },
  {
    name: "Świetlica Wiejska w Słupie k. Wińska",
    address: "Słup 17, 56-160 Słup, gm. Wińsko",
    img: "https://placehold.co/320x180?text=Zdjęcie+świetlicy",
    capacity: "30👥",
    features: "Toaleta, prysznic, kuchnia, kilka pomieszczeń, miejsce ogniskowe",
    contact: "okreg.dls@zhr.pl",
    button: null,
    color: "#6bbf59"
  },
  {
    name: "Teren przy zalewie Wińsko",
    address: "56-160 Jakubikowice",
    img: "https://placehold.co/320x180?text=Zdjęcie+zalewu",
    capacity: null,
    features: null,
    contact: "okreg.dls@zhr.pl",
    button: null,
    color: "#6bbf59"
  }
];

export default function PropertiesPage() {
  return (
    <div className="authorities-container" style={{maxWidth: 1200, margin: '0 auto', paddingBottom: 48}}>
      <h1 style={{marginBottom: 18}}>Nieruchomości Okręgu Dolnośląskiego ZHR</h1>
      <div style={{fontSize: '1.08rem', marginBottom: 32, lineHeight: 1.7}}>
        Okręg Dolnośląski dysponuje wieloma nieruchomościami na całym obszarze swojego działania. We Wrocławiu dysponujemy dwoma lokalizacjami, a w Gminie Wińsko (pow. wotowski), dzięki uprzejmości Pani Wójt, świetlicą oraz terenem przy zalewie.
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '40px 32px', justifyContent: 'center'}}>
        {properties.map((prop, idx) => (
          <div key={idx} style={{background: prop.color, borderRadius: 32, boxShadow: '0 4px 24px 0 rgba(49,73,29,0.08)', padding: '32px 24px 24px 24px', width: 340, maxWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 8}}>
            <img src={prop.img} alt={prop.name} style={{width: 320, height: 180, objectFit: 'cover', borderRadius: 18, marginBottom: 18, background: '#dbe7d0'}} />
            <div style={{fontWeight: 700, fontSize: '1.25rem', color: '#222', marginBottom: 8, textAlign: 'center'}}>{prop.name}</div>
            <div style={{fontSize: '1.07rem', color: '#222', marginBottom: 8, textAlign: 'center'}}>{prop.address}</div>
            {prop.capacity && (
              <div style={{background: '#fff', borderRadius: 16, padding: '12px 18px', fontWeight: 600, fontSize: '1.07rem', color: '#31491d', marginBottom: 8, boxShadow: '0 2px 8px 0 rgba(49,73,29,0.07)', textAlign: 'center'}}>
                {prop.capacity}<br/>
                {prop.features}
              </div>
            )}
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: 8}}>
              <a href={`mailto:${prop.contact}`} style={{background: '#ffa726', color: '#31491d', fontWeight: 700, borderRadius: 10, padding: '12px 32px', fontSize: '1.07rem', textDecoration: 'none', boxShadow: '0 2px 8px 0 rgba(49,73,29,0.07)', marginRight: prop.button ? 12 : 0}}>Kontakt: {prop.contact}</a>
              {prop.button && (
                <button style={{background: '#ffa726', color: '#31491d', fontWeight: 700, borderRadius: 10, padding: '12px 32px', fontSize: '1.07rem', border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px 0 rgba(49,73,29,0.07)'}}>Więcej</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
