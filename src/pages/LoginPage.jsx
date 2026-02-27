import React from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";

export default function LoginPage() {
  return (
    <div
      className="min-vh-100 bg-light"
      style={{
        background: "var(--secondary, #f0f4ed)",
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        minHeight: "100vh",
        height: "100vh",
        display: "block"
      }}
    >
      <Container>
        <Row className="justify-content-center flex-lg-row flex-column" style={{ minHeight: "50vh", alignItems: "center" }}>
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
          <Col lg={6} md={10} xs={12} className="d-flex align-items-center" style={{ minHeight: 520 }}>
            <Card className="shadow-sm border-0 w-100">
              <Card.Body className="p-4 d-flex flex-column align-items-center justify-content-center" style={{minHeight: 400}}>
                <h3 className="mb-4">Zaloguj się</h3>
                <Button type="button" variant="primary" size="lg" className="mb-3 px-4 py-2 fw-bold" style={{fontSize: '1.15rem'}}>
                  Zaloguj się za pomocą konta zhr.pl
                </Button>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}