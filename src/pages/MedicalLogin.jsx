import "./medical-login.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

const MedicalLoginForm = () => {
  const [pesel, setPesel] = useState("");
  const [doctorNumber, setDoctorNumber] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { password };

    if (userType === "patient") {
      userData.pesel = pesel;
    } else if (userType === "doctor") {
      userData.doctorNumber = doctorNumber;
    }

    console.log(userData);
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col md="7" className="mt-0">
          <h2 className="text-center">SuperSecure Data</h2>
          <Button
            onClick={() => setUserType("patient")}
            className={`mr-2 ${userType === "patient" ? "active" : ""}`}
          >
            Patient
          </Button>
          <Button
            onClick={() => setUserType("doctor")}
            className={`${userType === "doctor" ? "active" : ""}`}
          >
            Doctor
          </Button>
          <Form onSubmit={handleSubmit}>
            {userType === "patient" ? (
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">PESEL</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="231445554"
                  value={pesel}
                  onChange={(e) => setPesel(e.target.value)}
                />
              </Form.Group>
            ) : (
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Doctor Number</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Doctor Number"
                  value={doctorNumber}
                  onChange={(e) => setDoctorNumber(e.target.value)}
                />
              </Form.Group>
            )}
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button className="login-80p mb-4 fw-bold" type="submit">
              SIGN IN
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MedicalLoginForm;
