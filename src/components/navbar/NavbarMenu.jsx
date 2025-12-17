import React, { useRef, useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export function NavbarMenu({
  title,
  items,
  openDropdown,
  setOpenDropdown,
  dropdownKey,
  onDropdownMouseEnter,
  onDropdownMouseLeave,
}) {
  const ref = useRef(null);
  const show = openDropdown === dropdownKey;

  useEffect(() => {
    if (ref.current) {
      if (show) ref.current.classList.add("show");
      else ref.current.classList.remove("show");
    }
  }, [show]);

  return (
    <div
      className="navbar-menu"
      ref={ref}
      onMouseEnter={() => onDropdownMouseEnter(dropdownKey)}
      onMouseLeave={onDropdownMouseLeave}
      style={{ position: "relative" }}
    >
      <NavDropdown
        title={
          <span className="d-flex align-items-center">
            {title}
            <ChevronDown
              size={16}
              className="ms-1 transition"
              style={{
                transition: "transform 0.3s",
                transform: show ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </span>
        }
        id={`dropdown-${title.replace(/\s/g, "-").toLowerCase()}`}
        show={show}
        onToggle={val => setOpenDropdown(val ? dropdownKey : null)}
        renderMenuOnMount
        className="p-0"
        popperConfig={{
          strategy: "fixed",
        }}
      >
        <div
          onMouseEnter={() => onDropdownMouseEnter(dropdownKey)}
          onMouseLeave={onDropdownMouseLeave}
        >
          {items.map((item) => (
            <NavDropdown.Item
              as={Link}
              to={item.href}
              key={item.href}
              className="navbar-dropdown-item"
              onClick={() => setOpenDropdown(null)}
            >
              {item.title}
            </NavDropdown.Item>
          ))}
        </div>
      </NavDropdown>
    </div>
  );
}