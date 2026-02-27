import React from "react";
import { Card, Button, Container, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Users, MapPin, Calendar, Award, ArrowRight } from "lucide-react";

export default function Home() {
  const stats = [
    { label: "Aktywnych Członków", value: "2500+", icon: Users },
    { label: "Drużyn Harcerskich", value: "45", icon: MapPin },
    { label: "Lat Tradycji", value: "100+", icon: Award },
    { label: "Wydarzeń Rocznie", value: "150+", icon: Calendar },
  ];

  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section
        className="position-relative d-flex align-items-center justify-content-center"
        style={{
          height: 480,
          overflow: "hidden",
          width: "100vw",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          position: "relative",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1563297593-15eaee435184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY291dHMlMjBjYW1waW5nJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NjIyOTEyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Harcerze ZHR"
          className="position-absolute w-100 h-100 object-fit-cover"
          style={{ objectFit: "cover", left: 0, top: 0, zIndex: 1 }}
        />
        <div
          className="position-absolute w-100 h-100"
          style={{
            background:
              "linear-gradient(90deg, rgba(45,80,22,0.92) 0%, rgba(45,80,22,0.7) 5%)",
            left: 0,
            top: 0,
            zIndex: 2,
          }}
        />
        <div
          className="position-relative text-center text-white"
          style={{ zIndex: 3, width: "100%" }}
        >
          <h1 className="mb-4">Okręg Dolnośląski ZHR</h1>
          <p className="mb-4 mx-auto" style={{ maxWidth: 600, opacity: 0.95 }}>
            Poznaj wyjątkową społeczność harcerską na Dolnym Śląsku. Rozwijaj się, działaj i twórz niezapomniane wspomnienia razem z nami.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Button as={Link} to="/znajdz-jednostke" size="lg" variant="light" className="fw-bold text-dark">
              <MapPin className="me-2" size={20} />
              Znajdź Drużynę
            </Button>
            <Button as={Link} to="/o-nas" size="lg" variant="outline-light" className="fw-bold text-white border-white">
              Więcej o nas
              <ArrowRight className="ms-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-5"
        style={{
          background: "#fff",
          color: "#31491d",
          width: "100vw",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          position: "relative",
        }}
      >
        <Container>
          <h2 className="text-center mb-4" style={{ color: "#31491d" }}>
            Okręg w Liczbach
          </h2>
          <Row className="g-4 justify-content-center">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Col xs={12} sm={6} lg={3} key={idx}>
                  <Card className="text-center border-0 shadow-sm h-100" style={{ background: "#fff", color: "#31491d" }}>
                    <Card.Body>
                      <div className="d-flex justify-content-center mb-3">
                        <div className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center" style={{ width: 48, height: 48 }}>
                          <Icon size={24} style={{ color: "#2d5016" }} />
                        </div>
                      </div>
                      <div className="fs-2 fw-bold mb-1" style={{ color: "#31491d" }}>
                        {stat.value}
                      </div>
                      <div className="text-muted" style={{ color: "#31491d", opacity: 0.7 }}>
                        {stat.label}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section
        className="py-5 d-flex align-items-center justify-content-center"
        style={{
          background: "var(--background-primary, #31491d)",
          color: "#fff",
          width: "100vw",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          position: "relative",
        }}
      >
        <div className="w-100 text-center" style={{ zIndex: 3 }}>
          <h2 className="mb-3" style={{ color: "#fff" }}>
            Dołącz do nas!
          </h2>
          <p className="mb-4 mx-auto" style={{ maxWidth: 600, opacity: 0.95, color: "#fff" }}>
            Szukasz miejsca, gdzie możesz rozwijać swoje pasje, poznać wspaniałych ludzi i doświadczyć niezapomnianych przygód? ZHR czeka na Ciebie!
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Button as={Link} to="/znajdz-jednostke" size="lg" variant="light" className="fw-bold text-primary">
              <MapPin className="me-2" size={20} />
              Znajdź najbliższą jednostkę
            </Button>
            <Button as={Link} to="/dla-rodzicow" size="lg" variant="outline-light" className="fw-bold text-white border-white" style={{ borderColor: "#fff", color: "#fff" }}>
              Informacje dla rodziców
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section
        className="py-5"
        style={{
          background: "#fff",
          width: "100vw",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          position: "relative",
        }}
      >
        <Container>
          <h2 className="text-center mb-4">Pomocne Informacje</h2>
          <Row className="g-4">
            <Col xs={12} md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <h5>Dla Rodziców</h5>
                  <div className="text-muted mb-3" style={{ fontSize: "0.97rem" }}>
                    Wszystko, co rodzice powinni wiedzieć o ZHR: bezpieczeństwo, metoda harcerska, składki i więcej.
                  </div>
                  <Button as={Link} to="/dla-rodzicow" variant="link" className="p-0 align-items-center">
                    Dowiedz się więcej
                    <ArrowRight className="ms-2" size={16} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <h5>Przekaż 1,5%</h5>
                  <div className="text-muted mb-3" style={{ fontSize: "0.97rem" }}>
                    Wspieraj naszą działalność przekazując 1,5% swojego podatku. To nic nie kosztuje, a bardzo pomaga!
                  </div>
                  <Button as={Link} to="/1-5-procent" variant="link" className="p-0 align-items-center">
                    Zobacz jak przekazać
                    <ArrowRight className="ms-2" size={16} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <h5>Nieruchomości</h5>
                  <div className="text-muted mb-3" style={{ fontSize: "0.97rem" }}>
                    Poznaj nasze bazy i ośrodki. Dowiedz się jak zarezerwować miejsce dla swojej drużyny.
                  </div>
                  <Button as={Link} to="/nieruchomosci" variant="link" className="p-0 align-items-center">
                    Zobacz nieruchomości
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