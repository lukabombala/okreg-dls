import React from "react";
import "../App.css";
import "../index.css";

const boardMembers = [
  {
    name: "hm. Bartłomiej Surowski HR",
    role: "Przewodniczący Zarządu Okręgu",
    email: "bartlomiej.surowski@zhr.pl",
  },
  {
    name: "phm. Aleks Paszkowski HR",
    role: "Wiceprzewodniczący Zarządu Okręgu",
    email: "aleks.paszkowski@zhr.pl",
  },
  {
    name: "hm. Tomasz Szkularski HR",
    role: "Skarbnik Zarządu Okręgu",
    email: "skarbnik.dls@zhr.pl",
  },
  {
    name: "hm. Mateusz Surowski HR",
    role: "Członek Zarządu Okręgu",
    email: "mateusz.surowski@zhr.pl",
  },
  {
    name: "pwd. Wojciech Kuźmiński HO",
    role: "Członek Zarządu Okręgu",
    email: "wojciech.kuzminski@zhr.pl",
  },
  {
    name: "pwd. Wiktor Litwin HO",
    role: "Członek Zarządu Okręgu, Rzecznik Prasowy Okręgu",
    email: "rzecznik.dlu@zhr.pl",
  },
  {
    name: "pwd. Wiesław Smyk HO",
    role: "Członek Zarządu Okręgu",
    email: "wieslaw.smyk@zhr.pl",
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

const auditCommittee = [
  {
    name: "phm. Krystyna Sikora węd.",
    role: "Przewodnicząca KRO",
  },
  {
    name: "phm. Zuzanna Mażul HR",
    role: "Sekretarz KRO",
  },
  {
    name: "phm. Przemysław Janulek HR",
    role: "Członek KRO",
  },
];

const placeholderImg = "https://placehold.co/120x120?text=ZDJĘCIE";

export default function AuthoritiesPage() {
  return (
    <div className="authorities-container">
      <h2 style={{ color: "var(--primary)" }}>Kadencja 2025-2027</h2>
      <section>
        <h3 style={{ color: "var(--primary)" }}>Zarząd Okręgu Dolnośląskiego ZHR</h3>
        <div className="authorities-grid">
          {boardMembers.map((member, idx) => (
            <div className="authority-card" key={idx} style={{ width: 260 }}>
              <img
                src={placeholderImg}
                alt="Zdjęcie"
                className="authority-photo"
                style={{ width: 140, height: 140, borderRadius: "50%" }}
              />
              <div className="authority-info">
                <strong>{member.name}</strong>
                <div style={{ color: "#000" }}>{member.role}</div>
                {member.email && (
                  <div className="authority-email">
                    <a href={`mailto:${member.email}`}>{member.email}</a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3 style={{ color: "var(--primary)" }}>Komisja Rewizyjna Okręgu</h3>
        <div className="authorities-grid">
          {auditCommittee.map((member, idx) => (
            <div className="authority-card" key={idx} style={{ width: 260 }}>
              <img
                src={placeholderImg}
                alt="Zdjęcie"
                className="authority-photo"
                style={{ width: 140, height: 140, borderRadius: "50%" }}
              />
              <div className="authority-info">
                <strong>{member.name}</strong>
                <div style={{ color: "#000" }}>{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
