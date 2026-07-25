import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import Navigation from "./components/navbar/NavigationFresh.jsx";
import Footer from "./components/footer/FooterFresh.jsx";
import "./authorities.css";
import { routeDefinitions } from "./siteMap.jsx?v=2";



function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("okreg-dls-theme") || "light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("okreg-dls-theme", theme);
  }, [theme]);

  return (
    <Router>
      <div className="app-shell" data-theme={theme}>
        <Navigation theme={theme} setTheme={setTheme} />
        <Container className="app-main flex-grow-1">
          <Routes>
            {routeDefinitions.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
