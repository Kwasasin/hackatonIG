import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

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
      <Button onClick={handleSearch} variant="primary">
        Search
      </Button>
    </Form.Group>
  );
};

export default SearchBarComponent;
