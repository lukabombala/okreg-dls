import React, { useRef, useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavbarMenu } from "./NavbarMenu";
import { NavbarMobileSheet } from "./NavbarMobileSheet";
import "./navbar.css";
import { Home } from "lucide-react"; // Dodaj import ikony domku

// Zdefiniuj wszystkie grupy linków
const hoprItems = [
  { title: "Aktualności", href: "/hopr" },
  { title: "Ogólne Informacje", href: "/hopr/info" },
  { title: "Najbliższe Szkolenia", href: "/hopr/szkolenia" },
];
const aboutItems = [
  { title: "O Okręgu", href: "/o-nas" },
  { title: "Władze (Zarząd i KRO)", href: "/o-nas/wladze" },
  { title: "O ZHR", href: "/o-nas/zhr" },
  { title: "Ochrona Ludności i Obrona Cywilna", href: "/o-nas/ochrona-ludnosci" },
];
const unitsItems = [
  { title: "Chorągiew Harcerzy", href: "/jednostki/choragiew-harcerzy" },
  { title: "Chorągiew Harcerek", href: "/jednostki/choragiew-harcerek" },
  { title: "Szczepy", href: "/jednostki/szczepy" },
  { title: "Ostrzeszowski Obwód ZHR", href: "/jednostki/obwod" },
  { title: "Znajdź jednostkę", href: "/znajdz-jednostke" },
];
const parentsItems = [
  { title: "Informacje dla rodziców", href: "/dla-rodzicow" },
  { title: "Bezpieczny ZHR", href: "/dla-rodzicow/bezpieczenstwo" },
  { title: "Metoda Harcerska", href: "/dla-rodzicow/metoda" },
  { title: "Składki / ubezpieczenie", href: "/dla-rodzicow/skladki" },
  { title: "Faktura za obóz/kolonię/zimowisko", href: "/dla-rodzicow/faktura" },
];

const menus = [
  { title: "O NAS I ZHR", items: aboutItems, key: "about" },
  { title: "JEDNOSTKI", items: unitsItems, key: "units" },
  { title: "DLA RODZICÓW", items: parentsItems, key: "parents" },
  { title: "HOPR", items: hoprItems, key: "hopr" },
];

const singleLinks = [
  { title: "STRONA GŁÓWNA", href: "/" },
  { title: "DLA MEDIÓW", href: "/dla-mediow" },
  { title: "KONTAKT", href: "/kontakt" },
  { title: "1,5%", href: "/1-5-procent" },
  { title: "Zaloguj się", href: "/login" },
];

export default function Navigation() {
  const [showMobile, setShowMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeTimeout = useRef();

  // Funkcje do obsługi hoverów na dropdownach
  const onDropdownMouseEnter = (dropdownKey) => {
    clearTimeout(closeTimeout.current);
    setOpenDropdown(dropdownKey);
  };
  const onDropdownMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <>
      <Navbar expand="lg" sticky="top" className="zhr-navbar w-100 p-0" style={{ minHeight: "64px" }}>
        <div className="navbar-inner w-100">
          <Navbar.Brand as={Link} to="/" className="me-4 d-flex align-items-center gap-2">
            <span className="zhr-logo">ZHR</span>
            <span className="brand-text d-none d-md-flex flex-column">
              <span className="brand-title">Okręg Dolnośląski</span>
              <span className="brand-desc">ZHR</span>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" onClick={() => setShowMobile(true)} />
          <Navbar.Collapse id="main-navbar" className="d-none d-lg-flex">
            <Nav className="me-auto align-items-center gap-1">
              <Nav.Link as={Link} to="/" className="fw-bold" aria-label="Strona główna">
                <Home size={22} style={{ position: "relative", top: "-1px" }} />
              </Nav.Link>
              {menus.map(menu => (
                <NavbarMenu
                  key={menu.key}
                  title={menu.title}
                  items={menu.items}
                  openDropdown={openDropdown}
                  setOpenDropdown={setOpenDropdown}
                  dropdownKey={menu.key}
                  onDropdownMouseEnter={onDropdownMouseEnter}
                  onDropdownMouseLeave={onDropdownMouseLeave}
                />
              ))}
              <Nav.Link as={Link} to="/nieruchomosci" className="fw-bold">NIERUCHOMOŚCI</Nav.Link>
              <Nav.Link as={Link} to="/dla-mediow" className="fw-bold">DLA MEDIÓW</Nav.Link>
              <Nav.Link as={Link} to="/kontakt" className="fw-bold">KONTAKT</Nav.Link>

            </Nav>
            <div className="d-flex gap-2 ms-3">
              <Button as={Link} to="https://procentnadolnyslask.zhr.pl/" variant="outline-primary">
                1,5%
              </Button>
              <Button as={Link} to="/login" variant="primary">
                <span className="me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M10.25 4.75a.75.75 0 0 1 .75-.75h6A2.25 2.25 0 0 1 19.25 6.25v11.5A2.25 2.25 0 0 1 17 20H11a.75.75 0 0 1 0-1.5h6A.75.75 0 0 0 17.75 17V6.25A.75.75 0 0 0 17 5.5h-6a.75.75 0 0 1-.75-.75Z"/><path fill="currentColor" d="M15.03 12.53a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H5a.75.75 0 0 0 0 1.5h7.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"/></svg>
                </span>
                Zaloguj się
              </Button>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <NavbarMobileSheet
        show={showMobile}
        onHide={() => setShowMobile(false)}
        menus={menus}
        singleLinks={singleLinks}
      />
    </>
  );
}