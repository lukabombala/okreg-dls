import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import Navigation from "./components/navbar/Navigation.jsx";
import Footer from "./components/footer/Footer.jsx";

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
function RealEstateInfo() { return <h2>Nieruchomości Informacje</h2>; }
function RealEstateWinsko() { return <h2>Wińsko</h2>; }
function RealEstatePomorska() { return <h2>Rezerwacje Pomorskiej</h2>; }
function RealEstateZatoka() { return <h2>Zatoka</h2>; }
function Contact() { return <h2>Kontakt</h2>; }
function OneAndHalfPercent() { return <h2>1,5%</h2>; }
function NotFound() { return <h2>404 - Nie znaleziono strony</h2>; }




function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navigation />
        <Container className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-nas" element={<AboutDistrictPage />} />
            <Route path="/o-nas/wladze" element={<AuthoritiesPage />} />
            <Route path="/o-nas/zhr" element={<AboutZHRPage />} />
            <Route path="/o-nas/ochrona-ludnosci" element={<CivilProtectionPage />} />
            <Route path="/jednostki/choragiew-harcerzy" element={<MaleBanner />} />
            <Route path="/jednostki/choragiew-harcerek" element={<FemaleBanner />} />
            <Route path="/jednostki/szczepy" element={<TroopsPage />} />
            <Route path="/jednostki/obwod" element={<Obwod />} />
            <Route path="/znajdz-jednostke" element={<FindUnitPage />} />
            <Route path="/dla-rodzicow" element={<ParentsPage />} />
            <Route path="/dla-rodzicow/bezpieczenstwo" element={<SafeZHRPage />} />
            <Route path="/dla-rodzicow/metoda" element={<ScoutMethodPage />} />
            <Route path="/dla-rodzicow/skladki" element={<FeesInsurancePage />} />
            <Route path="/dla-rodzicow/faktura" element={<InvoicePage />} />
            <Route path="/dla-mediow" element={<MediaPage />} />
            <Route path="/hopr" element={<HoprNewsPage />} />
            <Route path="/hopr/info" element={<HoprInfoPage />} />
            <Route path="/hopr/szkolenia" element={<HoprTrainingsPage />} />
            <Route path="/nieruchomosci" element={<RealEstateInfo />} />
            <Route path="/nieruchomosci/winsko" element={<RealEstateWinsko />} />
            <Route path="/nieruchomosci/pomorska" element={<RealEstatePomorska />} />
            <Route path="/nieruchomosci/zatoka" element={<RealEstateZatoka />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/1-5-procent" element={<OneAndHalfPercent />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
