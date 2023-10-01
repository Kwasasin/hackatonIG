import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchBarComponent = ({ onSearch }) => {
  const [pesel, setPesel] = useState("");

  const handleSearch = () => {
    onSearch(pesel);
  };

  return (
    <Form.Group>
      <Form.Control
        type="string"
        placeholder="Search by PESEL"
        value={pesel}
        onChange={(e) => setPesel(e.target.value)}
      />
      <Button
        onClick={handleSearch}
        variant="primary"
        as={Link}
        to="/doctor-patient-data-page"
      >
        Search
      </Button>
    </Form.Group>
  );
};

export default SearchBarComponent;
