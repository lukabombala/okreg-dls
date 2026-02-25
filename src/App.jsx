import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import Navigation from "./components/navbar/Navigation.jsx";
import Footer from "./components/footer/Footer.jsx";
import PageHeader from "./components/PageHeader.jsx";

// Pages
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import AboutDistrictPage from "./pages/AboutDistrictPage.jsx";
import CivilProtectionPage from "./pages/CivilProtectionPage.jsx";
import Login  from "./pages/LoginPage.jsx";
import ParentsPage from "./pages/ParentsPage.jsx";
import AuthoritiesPage from "./pages/AuthoritiesPage.jsx";
import AboutZHRPage from "./pages/AboutZHRPage.jsx";
import FindUnitPage from "./pages/FindUnitPage.jsx";
import HoprNewsPage from "./pages/HoprNewsPage.jsx";
import "./authorities.css";

function Authorities() { return <h2>Władze (Zarząd i KRO)</h2>; }
// function AboutZHR() { return <h2>O ZHR</h2>; }
// function CivilProtection() { return <h2>Ochrona Ludności i Obrona Cywilna</h2>; }
function MaleBanner() { return <h2>Chorągiew Harcerzy</h2>; }
function FemaleBanner() { return <h2>Chorągiew Harcerek</h2>; }
import TroopsPage from "./pages/TroopsPage.jsx";
// function Troops() { return <h2>Szczepy</h2>; }
function Obwod() { return <h2>Ostrzeszowski Obwód ZHR</h2>; }
// function FindUnit() { return <h2>Znajdź jednostkę</h2>; }
import SafeZHRPage from "./pages/SafeZHRPage.jsx";
// function ParentsSafety() { return <h2>Bezpieczny ZHR</h2>; }
import ScoutMethodPage from "./pages/ScoutMethodPage.jsx";
// function ParentsMethod() { return <h2>Metoda Harcerska</h2>; }
import FeesInsurancePage from "./pages/FeesInsurancePage.jsx";
// function ParentsFees() { return <h2>Składki + Nr kont</h2>; }
import InvoicePage from "./pages/InvoicePage.jsx";
// function ParentsInvoice() { return <h2>Faktura za obóz/kolonię/zimowisko</h2>; }
import MediaPage from "./pages/MediaPage.jsx";
// function Media() { return <h2>Dla Mediów</h2>; }
function HoprNews() { return <h2>HOPR Aktualności</h2>; }
import HoprInfoPage from "./pages/HoprInfoPage.jsx";
// function HoprInfo() { return <h2>HOPR Ogólne Informacje</h2>; }
import HoprTrainingsPage from "./pages/HoprTrainingsPage.jsx";
// function HoprTrainings() { return <h2>HOPR Najbliższe Szkolenia</h2>; }
import PropertiesPage from "./pages/PropertiesPage.jsx";
// function RealEstateInfo() { return <h2>Nieruchomości Informacje</h2>; }
// function RealEstateWinsko() { return <h2>Wińsko</h2>; }
// function RealEstatePomorska() { return <h2>Rezerwacje Pomorskiej</h2>; }
// function RealEstateZatoka() { return <h2>Zatoka</h2>; }
import ContactPage from "./pages/ContactPage.jsx";
// function Contact() { return <h2>Kontakt</h2>; }
function OneAndHalfPercent() { return <h2>1,5%</h2>; }
function NotFound() { return <h2>404 - Nie znaleziono strony</h2>; }

function withHeader(Component, title) {
  return function Wrapped(props) {
    return <>
      <PageHeader title={title} />
      <Component {...props} />
    </>;
  };
}

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navigation />
        <Container className="flex-grow-1" style={{ background: 'var(--background-primary)' }}>
          <Routes>
            <Route path="/" element={<><PageHeader title="Strona główna" /><Home /></>} />
            <Route path="/o-nas" element={withHeader(AboutDistrictPage, "O Okręgu")()} />
            <Route path="/o-nas/wladze" element={withHeader(AuthoritiesPage, "Władze (Zarząd i KRO)")()} />
            <Route path="/o-nas/zhr" element={withHeader(AboutZHRPage, "O ZHR")()} />
            <Route path="/o-nas/ochrona-ludnosci" element={withHeader(CivilProtectionPage, "Ochrona Ludności i Obrona Cywilna")()} />
            <Route path="/jednostki/choragiew-harcerzy" element={withHeader(MaleBanner, "Chorągiew Harcerzy")()} />
            <Route path="/jednostki/choragiew-harcerek" element={withHeader(FemaleBanner, "Chorągiew Harcerek")()} />
            <Route path="/jednostki/szczepy" element={withHeader(TroopsPage, "Szczepy")()} />
            <Route path="/jednostki/obwod" element={withHeader(Obwod, "Ostrzeszowski Obwód ZHR")()} />
            <Route path="/znajdz-jednostke" element={withHeader(FindUnitPage, "Znajdź jednostkę")()} />
            <Route path="/dla-rodzicow" element={withHeader(ParentsPage, "Informacje dla rodziców")()} />
            <Route path="/dla-rodzicow/bezpieczenstwo" element={withHeader(SafeZHRPage, "Bezpieczny ZHR")()} />
            <Route path="/dla-rodzicow/metoda" element={withHeader(ScoutMethodPage, "Metoda Harcerska")()} />
            <Route path="/dla-rodzicow/skladki" element={withHeader(FeesInsurancePage, "Składki / ubezpieczenie")()} />
            <Route path="/dla-rodzicow/faktura" element={withHeader(InvoicePage, "Faktura za obóz/kolonię/zimowisko")()} />
            <Route path="/dla-mediow" element={withHeader(MediaPage, "Dla mediów")()} />
            <Route path="/hopr" element={withHeader(HoprNewsPage, "HOPR Aktualności")()} />
            <Route path="/hopr/info" element={withHeader(HoprInfoPage, "HOPR Ogólne Informacje")()} />
            <Route path="/hopr/szkolenia" element={withHeader(HoprTrainingsPage, "HOPR Najbliższe Szkolenia")()} />
            <Route path="/nieruchomosci" element={withHeader(PropertiesPage, "Nieruchomości")()} />
            <Route path="/kontakt" element={withHeader(ContactPage, "Kontakt")()} />
            <Route path="/1-5-procent" element={withHeader(OneAndHalfPercent, "1,5%")()} />
            <Route path="/login" element={withHeader(Login, "Logowanie")()} />
            <Route path="*" element={withHeader(NotFound, "404 - Nie znaleziono strony")()} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
