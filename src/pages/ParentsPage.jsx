import React from "react";
import { Container, Row, Col, Card, Button, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Shield, BookOpen, DollarSign, FileText, Heart, ArrowRight } from "lucide-react";
import mainbanner from "../media/main_banner.jpg";

// Zamień na swój komponent lub <img> jeśli nie masz ImageWithFallback
const ImageWithFallback = (props) => <img {...props} alt={props.alt} />;

export default function ParentsPage() {
  const topics = [
    {
      icon: Shield,
      title: "Bezpieczny ZHR",
      description: "Bezpieczeństwo Twoich dzieci jest naszym priorytetem",
      href: "/dla-rodzicow/bezpieczenstwo",
      color: "#2563eb",
    },
    {
      icon: BookOpen,
      title: "Metoda Harcerska",
      description: "Poznaj zasady i wartości na których opieramy naszą pracę",
      href: "/dla-rodzicow/metoda",
      color: "#22c55e",
    },
    {
      icon: DollarSign,
      title: "Składki + Ubezpieczenie",
      description: "Informacje o składkach członkowskich i ubezpieczeniu",
      href: "/dla-rodzicow/skladki",
      color: "#eab308",
    },
    {
      icon: FileText,
      title: "Faktura za wypoczynek",
      description: "Jak otrzymać fakturę za obóz, kolonię lub zimowisko",
      href: "/dla-rodzicow/faktura",
      color: "#a21caf",
    },
  ];

  const faqs = [
    {
      question: "Od jakiego wieku dziecko może zostać harcerzem?",
      answer:
        "Do ZHR przyjmujemy dzieci od 6 roku życia. Młodsze dzieci uczestniczą w gromadach zuchowych, starsze w drużynach harcerskich. Organizacja jest podzielona na grupy wiekowe: zuchy (6-10 lat), harcerze (10-13 lat), harcerze starsi (13-16 lat) i wędrownicy (16+).",
    },
    {
      question: "Jakie są koszty przynależności do ZHR?",
      answer:
        "Składka członkowska wynosi około 10-15 zł miesięcznie i pokrywa koszty podstawowej działalności drużyny, ubezpieczenie oraz wydatki organizacyjne. Dodatkowe koszty mogą dotyczyć wyjazdów, obozów czy specjalnego sprzętu.",
    },
    {
      question: "Czy ZHR to bezpieczna organizacja?",
      answer:
        "Tak! Bezpieczeństwo jest dla nas priorytetem. Wszyscy instruktorzy przechodzą odpowiednie szkolenia, posiadają aktualne badania lekarskie i zaświadczenia o niekaralności. Nasze obozy i wyjazdy są ubezpieczone i prowadzone według ścisłych standardów bezpieczeństwa.",
    },
    {
      question: "Jak często odbywają się zbiórki?",
      answer:
        "Standardowo drużyny spotykają się raz w tygodniu na 2-3 godzinne zbiórki. Dodatkowo organizowane są weekendowe wyjazdy, biwaki oraz letnie i zimowe obozy.",
    },
    {
      question: "Co dziecko zyskuje uczestnicząc w ZHR?",
      answer:
        "Harcerstwo rozwija samodzielność, odpowiedzialność, umiejętności społeczne i przywódcze. Dzieci uczą się pracy w zespole, zdobywają sprawności praktyczne (np. pierwsza pomoc, węzły, rozpalanie ognia), rozwijają pasje i nawiązują przyjaźnie na całe życie.",
    },
  ];

  return (
    <div className="min-vh-100">

      <Container className="py-5">
        {/* Quick Links */}
        <Row className="g-4 mb-5">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <Col xs={12} md={6} lg={4} key={index}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body>
                    <div
                      className="d-flex align-items-center justify-content-center mb-3"
                    >
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 12,
                          background: topic.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon size={24} color="#fff" />
                      </div>
                    </div>
                    <h5 className="mb-1">{topic.title}</h5>
                    <div className="text-muted mb-3" style={{ fontSize: "0.97rem" }}>
                      {topic.description}
                    </div>
                    <Button
                      as={Link}
                      to={topic.href}
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
            );
          })}
        </Row>

        {/* Why ZHR */}
        <section className="mb-5">
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <h2 className="mb-4">Dlaczego ZHR?</h2>
              <p className="mb-4 text-muted">
                Związek Harcerstwa Rzeczypospolitej to organizacja z ponad 100-letnią tradycją, która kształtuje młode pokolenia zgodnie z zasadami skautingu i polskiego patriotyzmu.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start gap-3 mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0 mt-1"
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "rgba(45,80,22,0.08)",
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#2d5016",
                      }}
                    />
                  </div>
                  <div style={{ color: "#000" }}>
                    <strong style={{ color: "#000" }}>Rozwój charakteru</strong> - Wychowujemy odpowiedzialnych, samodzielnych i odważnych ludzi
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0 mt-1"
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "rgba(45,80,22,0.08)",
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#2d5016",
                      }}
                    />
                  </div>
                  <div style={{ color: "#000" }}>
                    <strong style={{ color: "#000" }}>Praktyczne umiejętności</strong> - Dzieci uczą się pierwszej pomocy, orientacji w terenie, survivalowych
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0 mt-1"
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "rgba(45,80,22,0.08)",
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#2d5016",
                      }}
                    />
                  </div>
                  <div style={{ color: "#000" }}>
                    <strong style={{ color: "#000" }}>Przyjaźnie na całe życie</strong> - Harcerstwo to wspólnota, która trwa przez lata
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3 mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0 mt-1"
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "rgba(45,80,22,0.08)",
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#2d5016",
                      }}
                    />
                  </div>
                  <div style={{ color: "#000" }}>
                    <strong style={{ color: "#000" }}>Bezpieczeństwo</strong> - Wszyscy instruktorzy są przeszkoleni i sprawdzeni
                  </div>
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <div className="position-relative rounded-4 overflow-hidden" style={{ height: 340 }}>
                <img
                  src="https://images.unsplash.com/photo-1723810312978-86bd671c52ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpc2glMjBmb3Jlc3QlMjBuYXR1cmV8ZW58MXx8fHwxNzYyMjkxMjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Harcerstwo w naturze"
                  className="w-100 h-100 object-fit-cover"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Col>
          </Row>
        </section>

        {/* FAQs */}
        <section className="mb-5">
          <h2 className="mb-4 text-center" style={{ color: "#000" }}>Najczęściej Zadawane Pytania</h2>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <Accordion>
                {faqs.map((faq, idx) => (
                  <Accordion.Item eventKey={String(idx)} key={idx}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body>
                      <span className="text-muted">{faq.answer}</span>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </section>

        {/* CTA */}
        <Card className="bg-success text-white border-0 rounded-4 shadow-sm">
          <Card.Body className="text-center">
            <h4 className="mb-2" style={{ color: "#000" }}>Masz więcej pytań?</h4>
            <div className="mb-4" style={{ color: "#000" }}>
              Skontaktuj się z nami lub odwiedź najbliższą jednostkę
            </div>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Button as={Link} to="/znajdz-jednostke" variant="light" className="fw-bold text-success">
                Znajdź jednostkę
              </Button>
              <Button as={Link} to="/kontakt" variant="outline-light" className="fw-bold border-white" style={{ color: "#000", borderColor: "#fff" }}>
                Kontakt
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}