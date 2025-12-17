import React from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";

export default function LoginPage() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light" style={{background: "var(--secondary, #f0f4ed)"}}>
      <Container>
        <Row className="justify-content-center align-items-center g-5 flex-lg-row flex-column">
          {/* Left Side - Image & Info */}
          <Col lg={6} className="d-none d-lg-block">
            <div className="position-relative rounded-4 overflow-hidden" style={{height: 520}}>
              <img
                src="https://images.unsplash.com/photo-1761039808159-f02b58f07032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMHlvdXRoJTIwYWN0aXZpdHl8ZW58MXx8fHwxNzYyMjkxMjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Harcerze ZHR"
                className="w-100 h-100 object-fit-cover"
                style={{objectFit: "cover", minHeight: 520}}
              />
              <div className="position-absolute bottom-0 start-0 end-0 p-4" style={{
                background: "linear-gradient(0deg, rgba(45,80,22,0.85) 60%, transparent 100%)"
              }}>
                <h2 className="text-white mb-2">Panel Członka ZHR</h2>
                <p className="text-white opacity-90 mb-0">
                  Zaloguj się, aby uzyskać dostęp do zasobów, dokumentów i informacji dla członków okręgu.
                </p>
              </div>
            </div>
          </Col>

          {/* Right Side - Login Form */}
          <Col lg={6} md={10} xs={12}>
            <Card className="shadow-sm border-0">
              <Card.Body className="p-4">
                <div className="mb-4">
                  <h3 className="mb-1">Zaloguj się</h3>
                  <div className="text-muted mb-2" style={{fontSize: "1rem"}}>
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
                    <Button variant="link" className="p-0 text-decoration-none text-primary" style={{fontSize: "0.95rem"}}>
                      Zapomniałeś hasła?
                    </Button>
                  </div>
                  <Button type="submit" variant="primary" className="w-100 mb-2">
                    Zaloguj się
                  </Button>
                </Form>
                <div className="mt-4 pt-3 border-top">
                  <p className="text-center text-muted mb-0" style={{fontSize: "0.97rem"}}>
                    Nie masz konta?{" "}
                    <Button variant="link" className="p-0 text-decoration-none">
                      Skontaktuj się z hufcem
                    </Button>
                  </p>
                </div>
                <div className="mt-4 p-3 bg-light rounded-3">
                  <p className="mb-0 text-muted" style={{fontSize: "0.95rem"}}>
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