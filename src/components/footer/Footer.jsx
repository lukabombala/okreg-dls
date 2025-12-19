import { Mail, MapPin, Facebook } from 'lucide-react';
import bannerLogos from './footer-logos.png';

function Footer() {
  return (
    <footer style={{ background: '#31491d', color: '#fff' }}>
      {/* Główna sekcja: 2 kolumny */}
      <div className="container py-5 px-3 px-md-0">
        <div className="row justify-content-center align-items-center">
          {/* Kolumna: Finansowanie */}
          <div className="col-12 col-md-6 mb-4 mb-md-0 text-center text-md-start">
            <div
              style={{
                color: '#e8f0e3',
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
          {/* Kolumna: Kontakt */}
          <div className="col-12 col-md-6 text-center text-md-end">
            <h3
              className="mb-3 fw-bold"
              style={{ letterSpacing: '0.02em', color: '#fff' }}
            >
              Kontakt
            </h3>
            <ul className="list-unstyled mb-0" style={{ fontSize: '1.08rem' }}>
              <li className="mb-2 d-flex align-items-center justify-content-center justify-content-md-end">
                <span
                  className="me-2 d-flex flex-column align-items-center"
                  style={{ minWidth: 24 }}
                >
                  <MapPin size={18} />
                </span>
                <span>ul. Pomorska 17, 50-215 Wrocław</span>
              </li>
              <li className="mb-2 d-flex align-items-center justify-content-center justify-content-md-end">
                <span
                  className="me-2 d-flex flex-column align-items-center"
                  style={{ minWidth: 24 }}
                >
                  <Mail size={18} />
                </span>
                <a
                  href="mailto:kontakt@dolnoslaski.zhr.pl"
                  className="text-white text-decoration-underline"
                  style={{ opacity: 0.95 }}
                >
                  kontakt@dolnoslaski.zhr.pl
                </a>
              </li>
              <li className="mb-2 d-flex align-items-center justify-content-center justify-content-md-end">
                <span
                  className="me-2 d-flex flex-column align-items-center"
                  style={{ minWidth: 24 }}
                >
                  <Facebook size={18} />
                </span>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-underline"
                  style={{ opacity: 0.95 }}
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Baner z grafikami */}
      <div
        style={{
          background: '#31491d',
          padding: '5px 0 5px 0',
          display: 'flex',
          justifyContent: 'center',
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

      {/* Copyright */}
      <div
        className="py-2 text-center"
        style={{
          background: '#27381a',
          color: '#cfdacb',
          fontSize: '0.97rem',
          letterSpacing: '0.01em',
        }}
      >
        &copy; 2025 Okręg Dolnośląski ZHR. Wszystkie prawa zastrzeżone.
      </div>
    </footer>
  );
}

export default Footer;