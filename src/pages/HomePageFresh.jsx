import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Users, MapPin, Calendar, Award, ArrowRight } from "lucide-react";

export default function Home() {
  const stats = [
    { label: "Aktywnych członków", value: "2500+", icon: Users },
    { label: "Drużyn harcerskich", value: "45", icon: MapPin },
    { label: "Lat tradycji", value: "100+", icon: Award },
    { label: "Wydarzeń rocznie", value: "150+", icon: Calendar },
  ];

  return (
    <div className="page-shell section-stack">
      <section className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1563297593-15eaee435184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY291dHMlMjBjYW1waW5nJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NjIyOTEyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Harcerze ZHR"
          className="hero-media"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-content-inner">
            <div className="eyebrow mb-3">Okręg Dolnośląski ZHR</div>
            <h1 className="hero-title">Harcerstwo z tradycją, odpowiedzialnością i wspólnotą.</h1>
            <p className="section-lead text-white-50 mb-4" style={{ maxWidth: 680 }}>
              Poznaj społeczność harcerską na Dolnym Śląsku. Dołącz, działaj i rozwijaj się razem z nami.
            </p>
            <div className="hero-actions d-flex flex-column flex-sm-row gap-3">
              <Button as={Link} to="/znajdz-jednostke" size="lg" variant="light" className="fw-bold text-dark">
                <MapPin className="me-2" size={20} />
                Znajdź drużynę
              </Button>
              <Button as={Link} to="/o-nas" size="lg" variant="outline-light" className="fw-bold text-white border-white">
                Więcej o nas
                <ArrowRight className="ms-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-band">
        <Container>
          <div className="d-flex align-items-end justify-content-between flex-wrap gap-2 mb-4">
            <div>
              <div className="badge-soft mb-2">Okręg w liczbach</div>
              <h2 className="section-title mb-0">Nasza wspólnota w liczbach</h2>
            </div>
          </div>
          <Row className="g-4 justify-content-center">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Col xs={12} sm={6} lg={3} key={idx}>
                  <Card className="stat-card h-100 text-center">
                    <Card.Body>
                      <div className="d-flex justify-content-center mb-3">
                        <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: 56, height: 56, background: "var(--secondary-soft)", color: "var(--primary)" }}>
                          <Icon size={24} />
                        </div>
                      </div>
                      <div className="fs-2 fw-bold mb-1">{stat.value}</div>
                      <div className="muted">{stat.label}</div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className="section-block">
        <div className="content-shell text-center">
          <div className="badge-soft mb-2">Dołącz do nas</div>
          <h2 className="section-title mb-3">Tu łączą się pasja i odpowiedzialność</h2>
          <p className="section-lead mx-auto mb-4" style={{ maxWidth: 760 }}>
            Szukasz miejsca, w którym można rozwijać swoje pasje, poznać ludzi i przeżywać dobre przygody? ZHR jest właśnie takim miejscem.
          </p>
          <div className="cta-actions d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Button as={Link} to="/znajdz-jednostke" size="lg" variant="success" className="fw-bold text-white">
              <MapPin className="me-2" size={20} />
              Znajdź najbliższą jednostkę
            </Button>
            <Button as={Link} to="/dla-rodzicow" size="lg" variant="outline-success" className="fw-bold">
              Informacje dla rodziców
            </Button>
          </div>
        </div>
      </section>

      <section className="section-block">
        <Container>
          <div className="text-center mb-4">
            <div className="badge-soft mb-2">Pomocne informacje</div>
            <h2 className="section-title mb-0">Szybkie ścieżki do najważniejszych treści</h2>
          </div>
          <Row className="g-4">
            <Col xs={12} md={4}>
              <Card className="info-card h-100">
                <Card.Body>
                  <h5>Dla rodziców</h5>
                  <div className="muted mb-3">
                    Najważniejsze informacje dla rodziców: bezpieczeństwo, metoda harcerska, składki i organizacja.
                  </div>
                  <Button as={Link} to="/dla-rodzicow" variant="link" className="p-0 align-items-center fw-bold text-decoration-none">
                    Zobacz szczegóły
                    <ArrowRight className="ms-2" size={16} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="info-card h-100">
                <Card.Body>
                  <h5>Przekaż 1,5%</h5>
                  <div className="muted mb-3">
                    Wspieraj naszą działalność, przekazując 1,5% podatku. To prosty gest, który naprawdę pomaga.
                  </div>
                  <Button as={Link} to="/1-5-procent" variant="link" className="p-0 align-items-center fw-bold text-decoration-none">
                    Jak przekazać
                    <ArrowRight className="ms-2" size={16} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="info-card h-100">
                <Card.Body>
                  <h5>Nieruchomości</h5>
                  <div className="muted mb-3">
                    Poznaj nasze bazy i ośrodki. Zobacz, jak zarezerwować miejsce dla swojej drużyny.
                  </div>
                  <Button as={Link} to="/nieruchomosci" variant="link" className="p-0 align-items-center fw-bold text-decoration-none">
                    Przejdź dalej
                    <ArrowRight className="ms-2" size={16} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
