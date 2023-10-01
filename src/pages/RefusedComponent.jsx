import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const RefusedComponent = ({ PESEL }) => {
  return (
    <Container className="mb-4">
      <Row className="d-flex justify-content-center">
        <Col md="7" className="mt-0 text-center text-danger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
          <h3>
            Sorry, patient with PESEL: {PESEL} neglected the access to your
            data.
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default RefusedComponent;
