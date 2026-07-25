import HomePage from "./pages/HomePageFresh.jsx";
import AboutDistrictPage from "./pages/AboutDistrictPage.jsx";
import CivilProtectionPage from "./pages/CivilProtectionPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ParentsPage from "./pages/ParentsPage.jsx";
import AuthoritiesPage from "./pages/AuthoritiesPage.jsx";
import AboutZHRPage from "./pages/AboutZHRPage.jsx";
import FindUnitPage from "./pages/FindUnitPage.jsx";
import HoprNewsPage from "./pages/HoprNewsPage.jsx";
import TroopsPage from "./pages/TroopsPage.jsx";
import SafeZHRPage from "./pages/SafeZHRPage.jsx";
import ScoutMethodPage from "./pages/ScoutMethodPage.jsx";
import FeesInsurancePage from "./pages/FeesInsurancePage.jsx";
import InvoicePage from "./pages/InvoicePage.jsx";
import MediaPage from "./pages/MediaPage.jsx";
import HoprInfoPage from "./pages/HoprInfoPage.jsx";
import HoprTrainingsPage from "./pages/HoprTrainingsPage.jsx";
import PropertiesPage from "./pages/PropertiesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const Authorities = () => <h2>Władze (Zarząd i KRO)</h2>;
const MaleBanner = () => <h2>Chorągiew Harcerzy</h2>;
const FemaleBanner = () => <h2>Chorągiew Harcerek</h2>;
const Obwod = () => <h2>Ostrzeszowski Obwód ZHR</h2>;
const OneAndHalfPercent = () => <h2>1,5%</h2>;
const NotFound = () => <h2>404 - Nie znaleziono strony</h2>;

export const routeDefinitions = [
  { path: "/", element: <HomePage /> },
  { path: "/o-nas", element: <AboutDistrictPage /> },
  { path: "/o-nas/wladze", element: <AuthoritiesPage /> },
  { path: "/o-nas/zhr", element: <AboutZHRPage /> },
  { path: "/o-nas/ochrona-ludnosci", element: <CivilProtectionPage /> },
  { path: "/jednostki/choragiew-harcerzy", element: <MaleBanner /> },
  { path: "/jednostki/choragiew-harcerek", element: <FemaleBanner /> },
  { path: "/jednostki/szczepy", element: <TroopsPage /> },
  { path: "/jednostki/obwod", element: <Obwod /> },
  { path: "/znajdz-jednostke", element: <FindUnitPage /> },
  { path: "/dla-rodzicow", element: <ParentsPage /> },
  { path: "/dla-rodzicow/bezpieczenstwo", element: <SafeZHRPage /> },
  { path: "/dla-rodzicow/metoda", element: <ScoutMethodPage /> },
  { path: "/dla-rodzicow/skladki", element: <FeesInsurancePage /> },
  { path: "/dla-rodzicow/faktura", element: <InvoicePage /> },
  { path: "/dla-mediow", element: <MediaPage /> },
  { path: "/hopr", element: <HoprNewsPage /> },
  { path: "/hopr/info", element: <HoprInfoPage /> },
  { path: "/hopr/szkolenia", element: <HoprTrainingsPage /> },
  { path: "/nieruchomosci", element: <PropertiesPage /> },
  { path: "/kontakt", element: <ContactPage /> },
  { path: "/1-5-procent", element: <OneAndHalfPercent /> },
  { path: "/login", element: <LoginPage /> },
  { path: "*", element: <NotFound /> },
];

export const menuGroups = [
  {
    key: "about",
    title: "O NAS I ZHR",
    items: [
      { title: "O Okręgu", href: "/o-nas" },
      { title: "Władze (Zarząd i KRO)", href: "/o-nas/wladze" },
      { title: "O ZHR", href: "/o-nas/zhr" },
      { title: "Ochrona Ludności i Obrona Cywilna", href: "/o-nas/ochrona-ludnosci" },
    ],
  },
  {
    key: "units",
    title: "JEDNOSTKI",
    items: [
      { title: "Chorągiew Harcerzy", href: "/jednostki/choragiew-harcerzy" },
      { title: "Chorągiew Harcerek", href: "/jednostki/choragiew-harcerek" },
      { title: "Szczepy", href: "/jednostki/szczepy" },
      { title: "Ostrzeszowski Obwód ZHR", href: "/jednostki/obwod" },
      { title: "Znajdź jednostkę", href: "/znajdz-jednostke" },
    ],
  },
  {
    key: "parents",
    title: "DLA RODZICÓW",
    items: [
      { title: "Informacje dla rodziców", href: "/dla-rodzicow" },
      { title: "Bezpieczny ZHR", href: "/dla-rodzicow/bezpieczenstwo" },
      { title: "Metoda Harcerska", href: "/dla-rodzicow/metoda" },
      { title: "Składki / ubezpieczenie", href: "/dla-rodzicow/skladki" },
      { title: "Faktura za obóz/kolonię/zimowisko", href: "/dla-rodzicow/faktura" },
    ],
  },
  {
    key: "hopr",
    title: "HOPR",
    items: [
      { title: "Aktualności", href: "/hopr" },
      { title: "Ogólne Informacje", href: "/hopr/info" },
      { title: "Najbliższe Szkolenia", href: "/hopr/szkolenia" },
    ],
  },
];

export const singleLinks = [
  { title: "STRONA GŁÓWNA", href: "/" },
  { title: "DLA MEDIÓW", href: "/dla-mediow" },
  { title: "KONTAKT", href: "/kontakt" },
  { title: "1,5%", href: "https://procentnadolnyslask.zhr.pl/", external: true },
  { title: "Zaloguj się", href: "/login" },
];
