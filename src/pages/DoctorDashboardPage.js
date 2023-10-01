import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SearchBarComponent from "./SearchBarComponent";
import RefusedComponent from "./RefusedComponent";

const DoctorDashboardPage = () => {
  const [searchedPESEL, setSearchedPESEL] = useState("");

  const handleSearch = (pesel) => {
    setSearchedPESEL(pesel);
  };

  return (
    <Container className="niceHeader">
      <h1 className="bigHeader">Doctor Dashboard</h1>
      <SearchBarComponent onSearch={handleSearch} />
      <RefusedComponent PESEL={searchedPESEL} />
    </Container>
  );
};

export default DoctorDashboardPage;
