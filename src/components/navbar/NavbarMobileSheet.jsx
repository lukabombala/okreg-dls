import React from "react";
import { Offcanvas, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NavbarMobileSheet({ show, onHide, menus, singleLinks }) {
  return (
    <Offcanvas show={show} onHide={onHide} placement="end" className="navbar-mobile-sheet">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column gap-2">
          {singleLinks
            .filter((l) => l.title === "STRONA GŁÓWNA")
            .map((l) => (
              <Nav.Link as={Link} to={l.href} key={l.href} onClick={onHide}>
                {l.title}
              </Nav.Link>
            ))}
          {menus.map((menu) => (
            <div key={menu.title} className="mb-2">
              <div className="fw-bold mb-1">{menu.title}</div>
              <div className="ps-3 d-flex flex-column gap-1">
                {menu.items.map((item) => (
                  <Nav.Link as={Link} to={item.href} key={item.href} onClick={onHide}>
                    {item.title}
                  </Nav.Link>
                ))}
              </div>
            </div>
          ))}
          {singleLinks
            .filter((l) => l.title !== "STRONA GŁÓWNA")
            .map((l) =>
              l.title === "Zaloguj się" ? (
                <Button
                  as={Link}
                  to={l.href}
                  key={l.href}
                  variant="primary"
                  className="mt-3"
                  onClick={onHide}
                >
                  <span className="me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M10.25 4.75a.75.75 0 0 1 .75-.75h6A2.25 2.25 0 0 1 19.25 6.25v11.5A2.25 2.25 0 0 1 17 20H11a.75.75 0 0 1 0-1.5h6A.75.75 0 0 0 17.75 17V6.25A.75.75 0 0 0 17 5.5h-6a.75.75 0 0 1-.75-.75Z"/><path fill="currentColor" d="M15.03 12.53a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H5a.75.75 0 0 0 0 1.5h7.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"/></svg>
                  </span>
                  {l.title}
                </Button>
              ) : l.title === "1,5%" ? (
                <Button
                  as={Link}
                  to={l.href}
                  key={l.href}
                  variant="outline-primary"
                  className="mt-2"
                  onClick={onHide}
                >
                  {l.title}
                </Button>
              ) : (
                <Nav.Link as={Link} to={l.href} key={l.href} onClick={onHide}>
                  {l.title}
                </Nav.Link>
              )
            )}
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
}