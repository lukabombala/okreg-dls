import { Mail, MapPin, Facebook } from 'lucide-react';
import bannerLogos from './footer-logos.png';

function FooterFresh() {
  return (
    <footer className="site-footer">
      <div className="container py-5 px-3 px-md-0">
        <div className="row g-4">
          <div className="col-12 col-lg-5">
            <div className="footer-panel h-100">
              <div className="footer-kicker mb-2">Wsparcie i finansowanie</div>
              <h2 className="footer-title mb-3">Okręg Dolnośląski ZHR</h2>
              <p className="footer-copy mb-0">
                Działamy dzięki wsparciu Narodowego Instytutu Wolności - Centrum Rozwoju Społeczeństwa Obywatelskiego w ramach programu rozwoju organizacji harcerskich i skautowych na lata 2018-2030.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="footer-panel h-100">
              <h3 className="footer-section-title mb-3">Kontakt</h3>
              <ul className="footer-list list-unstyled mb-0">
                <li>
                  <MapPin size={18} />
                  <span>ul. Pomorska 17, 50-215 Wrocław</span>
                </li>
                <li>
                  <Mail size={18} />
                  <a href="mailto:kontakt@dolnoslaski.zhr.pl">kontakt@dolnoslaski.zhr.pl</a>
                </li>
                <li>
                  <Facebook size={18} />
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="footer-panel h-100">
              <h3 className="footer-section-title mb-3">Na skróty</h3>
              <p className="footer-copy mb-3">
                Szybki dostęp do najważniejszych informacji: o okręgu, dla rodziców, media i kontakt.
              </p>
              <div className="footer-note">Jasny układ, mniej hałasu, szybciej do treści.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-banner-wrap">
        <img src={bannerLogos} alt="Partnerzy i programy" className="footer-banner-image" />
      </div>

      <div className="footer-bottom">
        &copy; 2025 Okręg Dolnośląski ZHR. Wszystkie prawa zastrzeżone.
      </div>
    </footer>
  );
}

export default FooterFresh;
