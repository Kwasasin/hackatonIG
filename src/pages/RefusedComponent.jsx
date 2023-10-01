import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { XCircle } from "bootstrap-icons";

const RefusedComponent = ({ PESEL }) => {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col md="7" className="mt-0 text-center">
          <XCircle color="red" size={48} />
          <h3 className="text-danger">
            Sorry, patient with PESEL: {PESEL} neglected the access to your
            data.
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default RefusedComponent;
