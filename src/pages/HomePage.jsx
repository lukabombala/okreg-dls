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

  const news = [
    {
      id: 1,
      title: "Zapisz się na Zimowisko 2025",
      description: "Zapraszamy wszystkich harcerzy na zimowe wyjazdy. Termin zapisów do 15 grudnia.",
      date: "2 listopada 2024",
      category: "Wypoczynek",
    },
    {
      id: 2,
      title: "Szkolenie HAL - nowa edycja",
      description: "Ruszają zapisy na szkolenie Harcerskich Animatorów Letniego Wypoczynku.",
      date: "28 października 2024",
      category: "Szkolenia",
    },
    {
      id: 3,
      title: "Rada Okręgu - podsumowanie",
      description: "Odbyło się zebranie Rady Okręgu. Poznaj najważniejsze ustalenia i decyzje.",
      date: "20 października 2024",
      category: "Okręg",
    },
    {
      id: 4,
      title: "Nowy Szczep w Legnicy",
      description: "W Legnicy powstał nowy szczep harcerski! Gratulujemy i życzymy powodzenia.",
      date: "10 października 2024",
      category: "Jednostki",
    },
    {
      id: 5,
      title: "Warsztaty dla Kadry",
      description: "Zapraszamy kadrę na warsztaty z pracy z młodzieżą. Liczba miejsc ograniczona.",
      date: "5 października 2024",
      category: "Szkolenia",
    },
    {
      id: 6,
      title: "Zakończenie Sezonu Letniego",
      description: "Podsumowaliśmy sezon letni podczas wspólnego ogniska. Dziękujemy za obecność!",
      date: "30 września 2024",
      category: "Wydarzenia",
    },
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
              "linear-gradient(90deg, rgba(45,80,22,0.92) 0%, rgba(45,80,22,0.7) 100%)",
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

      {/* News Section */}
      <section className="py-5">
        <Container>
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4 gap-2">
            <div>
              <h2 className="mb-1">Ostatnie Aktualności</h2>
              <div className="text-muted">Zobacz co się dzieje w naszym okręgu</div>
            </div>
          </div>
          <Row className="g-4">
            {news.map((item) => (
              <Col xs={12} md={6} lg={4} key={item.id}>
                <Card
                  className="h-100 border-0"
                  style={{
                    borderRadius: "16px",
                    background: "#fff",
                    boxShadow: "0 0 0 rgba(0,0,0,0)",
                    transition: "box-shadow 0.2s",
                  }}
                  onMouseOver={e => e.currentTarget.style.boxShadow = "0 4px 24px 0 rgba(45,80,22,0.08)"}
                  onMouseOut={e => e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)"}
                >
                  <Card.Body>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span
                        style={{
                          background: "#e8f0e3",
                          color: "#2d5016",
                          borderRadius: "8px",
                          fontSize: "0.95em",
                          padding: "2px 10px",
                          fontWeight: 600,
                        }}
                      >
                        {item.category}
                      </span>
                      <span className="text-muted small">{item.date}</span>
                    </div>
                    <h5 className="mb-1">{item.title}</h5>
                    <div className="text-muted mb-3" style={{ fontSize: "0.97rem" }}>
                      {item.description}
                    </div>
                    <Button
                      as={Link}
                      to={`/aktualnosci/${item.id}`}
                      variant="link"
                      className="p-0 align-items-center"
                      style={{
                        color: "#2d5016",
                        fontWeight: 600,
                        textDecoration: "none",
                        fontSize: "1.05em",
                      }}
                    >
                      Czytaj więcej
                      <ArrowRight className="ms-2" size={16} />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button
              as={Link}
              to="/aktualnosci"
              style={{
                background: "#2d5016",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "10px 28px",
                fontWeight: 600,
              }}
              className="align-items-center"
            >
              Zobacz wszystkie aktualności
              <ArrowRight className="ms-2" size={18} />
            </Button>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section
        className="py-5"
        style={{
          background: "var(--secondary, #f0f4ed)",
          width: "100vw",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          position: "relative",
        }}
      >
        <Container>
          <h2 className="text-center mb-4">Okręg w Liczbach</h2>
          <Row className="g-4 justify-content-center">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Col xs={12} sm={6} lg={3} key={idx}>
                  <Card className="text-center border-0 shadow-sm h-100">
                    <Card.Body>
                      <div className="d-flex justify-content-center mb-3">
                        <div className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center" style={{width: 48, height: 48}}>
                          <Icon size={24} className="text-success" />
                        </div>
                      </div>
                      <div className="fs-2 fw-bold mb-1">{stat.value}</div>
                      <div className="text-muted">{stat.label}</div>
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
          background: "var(--primary, #2d5016)",
          color: "var(--primary-foreground, #fff)",
          width: "100vw",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          position: "relative",
        }}
      >
        <div className="w-100 text-center" style={{zIndex: 3}}>
          <h2 className="mb-3">Dołącz do nas!</h2>
          <p className="mb-4 mx-auto" style={{maxWidth: 600, opacity: 0.95}}>
            Szukasz miejsca, gdzie możesz rozwijać swoje pasje, poznać wspaniałych ludzi i doświadczyć niezapomnianych przygód? ZHR czeka na Ciebie!
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Button as={Link} to="/znajdz-jednostke" size="lg" variant="light" className="fw-bold text-primary">
              <MapPin className="me-2" size={20} />
              Znajdź najbliższą jednostkę
            </Button>
            <Button as={Link} to="/dla-rodzicow" size="lg" variant="outline-light" className="fw-bold text-white border-white">
              Informacje dla rodziców
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-4">Pomocne Informacje</h2>
          <Row className="g-4">
            <Col xs={12} md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <h5>Dla Rodziców</h5>
                  <div className="text-muted mb-3" style={{fontSize: "0.97rem"}}>
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
                  <div className="text-muted mb-3" style={{fontSize: "0.97rem"}}>
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
                  <div className="text-muted mb-3" style={{fontSize: "0.97rem"}}>
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