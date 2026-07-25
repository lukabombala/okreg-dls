import React from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";

export default function LoginPage() {
  return (
    <div className="page-shell">
      <Container>
        <Row className="justify-content-center align-items-center g-5 flex-lg-row flex-column">
          <Col lg={6} className="d-none d-lg-block">
            <div className="hero-section" style={{ minHeight: 560 }}>
              <img
                src="https://images.unsplash.com/photo-1761039808159-f02b58f07032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMHlvdXRoJTIwYWN0aXZpdHl8ZW58MXx8fHwxNzYyMjkxMjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Harcerze ZHR"
                className="hero-media"
              />
              <div className="hero-overlay" />
              <div className="hero-content align-items-end">
                <div className="hero-content-inner">
                  <div className="eyebrow mb-3">Panel członka ZHR</div>
                  <h2 className="hero-title" style={{ fontSize: "clamp(2rem, 3vw, 3rem)" }}>Panel Członka ZHR</h2>
                  <p className="text-white-50 mb-0" style={{ maxWidth: 520 }}>
                  Zaloguj się, aby uzyskać dostęp do zasobów, dokumentów i informacji dla członków okręgu.
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} md={10} xs={12}>
            <Card className="login-card">
              <Card.Body className="p-4 p-lg-5">
                <div className="mb-4">
                  <div className="badge-soft mb-3">Strefa testowa</div>
                  <h3 className="section-title mb-2">Zaloguj się</h3>
                  <div className="muted mb-2">
                    Wpisz swój email i hasło, aby uzyskać dostęp do panelu członka
                  </div>
                </div>
                <Form>
                  <Form.Group className="mb-3" controlId="loginEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="twoj.email@przyklad.pl"
                      autoComplete="username"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="loginPassword">
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="••••••••"
                      autoComplete="current-password"
                      required
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Form.Check
                      type="checkbox"
                      id="remember"
                      label="Zapamiętaj mnie"
                    />
                    <Button variant="link" className="p-0 text-decoration-none fw-bold" style={{fontSize: "0.95rem"}}>
                      Zapomniałeś hasła?
                    </Button>
                  </div>
                  <Button type="submit" variant="primary" className="w-100 mb-2">
                    Zaloguj się
                  </Button>
                </Form>
                <div className="mt-4 pt-3 border-top">
                  <p className="text-center muted mb-0">
                    Nie masz konta?{" "}
                    <Button variant="link" className="p-0 text-decoration-none">
                      Skontaktuj się z hufcem
                    </Button>
                  </p>
                </div>
                <div className="mt-4 p-3 rounded-4" style={{ background: "var(--secondary-soft)" }}>
                  <p className="mb-0 muted">
                    <strong>Demo:</strong> Kliknij "Zaloguj się" aby zobaczyć panel członka (nie wymaga prawdziwych danych)
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}