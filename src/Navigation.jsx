import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

function Navigation() {
  const aboutRef = useRef(null);
  const unitsRef = useRef(null);
  const parentsRef = useRef(null);
  const hoprRef = useRef(null);
  const realEstateRef = useRef(null);

  const handleMouseEnter = (ref) => {
    if (ref.current) ref.current.classList.add("show");
    if (ref.current?.children[1]) ref.current.children[1].classList.add("show");
  };
  const handleMouseLeave = (ref) => {
    if (ref.current) ref.current.classList.remove("show");
    if (ref.current?.children[1]) ref.current.children[1].classList.remove("show");
  };

  return (
    <Navbar expand="lg" sticky="top" className="mb-4 zhr-navbar w-100 p-0" style={{minHeight: "64px"}}>
      <div className="navbar-inner">
        <Navbar.Brand as={Link} to="/" className="me-4">
          <span className="zhr-logo">ZHR</span>
          <span className="brand-text d-none d-md-flex">
            <span className="brand-title">Okręg Dolnośląski</span>
            <span className="brand-desc">Związek Harcerstwa Rzeczypospolitej</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">STRONA GŁÓWNA</Nav.Link>
            <NavDropdown
              title="O NAS I ZHR"
              id="about-dropdown"
              ref={aboutRef}
              onMouseEnter={() => handleMouseEnter(aboutRef)}
              onMouseLeave={() => handleMouseLeave(aboutRef)}
            >
              <NavDropdown.Item as={Link} to="/o-nas">O Okręgu</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/o-nas/wladze">Władze (Zarząd i KRO)</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/o-nas/zhr">O ZHR</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="JEDNOSTKI"
              id="units-dropdown"
              ref={unitsRef}
              onMouseEnter={() => handleMouseEnter(unitsRef)}
              onMouseLeave={() => handleMouseLeave(unitsRef)}
            >
              <NavDropdown.Item as={Link} to="/jednostki/choragiew-meska">Chorągiew Męska</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jednostki/choragiew-zenska">Chorągiew Żeńska</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jednostki/szczepy">Szczepy</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jednostki/obwod">Ostrzeszowski Obwód ZHR</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/znajdz-jednostke">Znajdź jednostkę</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="DLA RODZICÓW"
              id="parents-dropdown"
              ref={parentsRef}
              onMouseEnter={() => handleMouseEnter(parentsRef)}
              onMouseLeave={() => handleMouseLeave(parentsRef)}
            >
              <NavDropdown.Item as={Link} to="/dla-rodzicow/bezpieczenstwo">Bezpieczny ZHR</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dla-rodzicow/metoda">Metoda Harcerska</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dla-rodzicow/skladki">Składki + Nr kont</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dla-rodzicow/faktura">Faktura za obóz/kolonię/zimowisko</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dla-rodzicow/ubezpieczenie">Ubezpieczenie</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/dla-mediow">DLA MEDIÓW</Nav.Link>
            <NavDropdown
              title="HOPR"
              id="hopr-dropdown"
              ref={hoprRef}
              onMouseEnter={() => handleMouseEnter(hoprRef)}
              onMouseLeave={() => handleMouseLeave(hoprRef)}
            >
              <NavDropdown.Item as={Link} to="/hopr">Aktualności</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hopr/info">Ogólne Informacje</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hopr/szkolenia">Najbliższe Szkolenia</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="NIERUCHOMOŚCI"
              id="realestate-dropdown"
              ref={realEstateRef}
              onMouseEnter={() => handleMouseEnter(realEstateRef)}
              onMouseLeave={() => handleMouseLeave(realEstateRef)}
            >
              <NavDropdown.Item as={Link} to="/nieruchomosci">Informacje</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/nieruchomosci/winsko">Wińsko</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/nieruchomosci/pomorska">Rezerwacje Pomorskiej</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/nieruchomosci/zatoka">Zatoka</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/kontakt">KONTAKT</Nav.Link>
          </Nav>
          <div className="d-flex gap-2">
            <Button as={Link} to="/1-5-procent" variant="outline-primary">
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
  );
}

export default Navigation;