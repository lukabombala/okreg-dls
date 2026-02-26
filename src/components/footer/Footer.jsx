import { Mail, MapPin, Facebook } from 'lucide-react';
import bannerLogos from './footer-logos.png';
import mainLogo from '../../media/main-logo.png';

function Footer() {
  return (
    <footer style={{ background: '#31491d', color: '#fff' }}>
      {/* Główna sekcja: 3 kolumny - białe tło */}
      <div style={{ background: '#fff', color: '#31491d' }}>
        <div className="container py-5 px-3 px-md-0">
          <div className="row justify-content-center align-items-center">
            {/* Kolumna: Finansowanie */}
            <div className="col-12 col-md-4 mb-4 mb-md-0 text-center text-md-start">
              <div
                style={{
                  color: '#31491d',
                  fontSize: '1.08rem',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  lineHeight: 1.6,
                }}
              >
                Związek Harcerstwa Rzeczypospolitej Okręg Dolnośląski realizuje
                działania finansowane ze środków Narodowego Instytutu Wolności –
                Centrum Rozwoju Społeczeństwa Obywatelskiego w ramach Rządowego
                Programu Wsparcia Rozwoju Organizacji Harcerskich i Skautowych na
                lata 2018-2030.
              </div>
            </div>
            {/* Kolumna: Logo Okręgu */}
            <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
              <img
                src={mainLogo}
                alt="Logo Okręgu Dolnośląskiego ZHR"
                style={{ maxHeight: '250px', maxWidth: '220px', objectFit: 'contain' }}
              />
            </div>
            {/* Kolumna: Kontakt */}
            <div className="col-12 col-md-4 text-center text-md-end">
              <h3
                className="mb-3 fw-bold"
                style={{ letterSpacing: '0.02em', color: '#31491d' }}
              >
                Kontakt
              </h3>
              <ul className="list-unstyled mb-0" style={{ fontSize: '1.08rem' }}>
                <li className="mb-2 d-flex align-items-center justify-content-center justify-content-md-end">
                  <span
                    className="me-2 d-flex flex-column align-items-center"
                    style={{ minWidth: 24 }}
                  >
                    <MapPin size={18} color="#31491d" />
                  </span>
                  <span>ul. Pomorska 17, 50-215 Wrocław</span>
                </li>
                <li className="mb-2 d-flex align-items-center justify-content-center justify-content-md-end">
                  <span
                    className="me-2 d-flex flex-column align-items-center"
                    style={{ minWidth: 24 }}
                  >
                    <Mail size={18} color="#31491d" />
                  </span>
                  <a
                    href="mailto:kontakt@dolnoslaski.zhr.pl"
                    className="text-decoration-underline"
                    style={{ color: '#31491d', opacity: 0.95 }}
                  >
                    kontakt@dolnoslaski.zhr.pl
                  </a>
                </li>
                <li className="mb-2 d-flex align-items-center justify-content-center justify-content-md-end">
                  <span
                    className="me-2 d-flex flex-column align-items-center"
                    style={{ minWidth: 24 }}
                  >
                    <Facebook size={18} color="#31491d" />
                  </span>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-underline"
                    style={{ color: '#31491d', opacity: 0.95 }}
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Baner z grafikami - background-primary */}
      <div
        style={{
          background: 'var(--background-primary, #31491d)',
          padding: '5px 0 5px 0',
          display: 'flex',
          justifyContent: 'center',
          color: '#fff',
        }}
      >
        <img
          src={bannerLogos}
          alt="Partnerzy i programy"
          style={{
            maxWidth: '100%',
            height: '200px',
            objectFit: 'contain',
            filter: 'grayscale(0%)',
          }}
        />
      </div>

      {/* Copyright - czarny pasek */}
      <div
        className="py-2 text-center"
        style={{
          background: '#000',
          color: '#fff',
          fontSize: '0.97rem',
          letterSpacing: '0.01em',
        }}
      >
        &copy; 2026 Okręg Dolnośląski ZHR. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}

export default Footer;