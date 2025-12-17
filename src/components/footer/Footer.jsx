import { Link } from 'react-router-dom';
import {Mail, MapPin, Phone } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* O Okręgu */}
          <div>
            <h3 className="mb-4">Okręg Dolnośląski ZHR</h3>
            <p className="text-sm opacity-90 mb-4">
              Związek Harcerstwa Rzeczypospolitej to organizacja harcerska kontynuująca tradycje polskiego skautingu.
            </p>
          </div>

          {/* Szybkie Linki */}
          <div>
            <h3 className="mb-4">Szybkie Linki</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link to="/o-nas" className="hover:opacity-100">O Nas</Link>
              </li>
              <li>
                <Link to="/jednostki" className="hover:opacity-100">Jednostki</Link>
              </li>
              <li>
                <Link to="/dla-rodzicow" className="hover:opacity-100">Dla Rodziców</Link>
              </li>
              <li>
                <Link to="/znajdz-jednostke" className="hover:opacity-100">Znajdź Jednostkę</Link>
              </li>
              <li>
                <Link to="/1-5-procent" className="hover:opacity-100">Przekaż 1,5%</Link>
              </li>
            </ul>
          </div>

          {/* Dla Członków */}
          <div>
            <h3 className="mb-4">Dla Członków</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link to="/login" className="hover:opacity-100">Panel Zalogowanego</Link>
              </li>
              <li>
                <Link to="/hopr" className="hover:opacity-100">HOPR</Link>
              </li>
              <li>
                <Link to="/nieruchomosci" className="hover:opacity-100">Nieruchomości</Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>ul. Pomorska 17<br />50-215 Wrocław</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:kontakt@dolnoslaski.zhr.pl" className="hover:opacity-100">
                  kontakt@dolnoslaski.zhr.pl
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 Okręg Dolnośląski ZHR. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;