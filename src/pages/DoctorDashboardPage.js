import "./PatientDashboardStyles.css";
import "./DoctorDashboardStyles.css";
import Grid from 'react-bootstrap/Button';
import {Container} from "react-bootstrap";
import SearchBarComponent from "./SearchBarComponent";

const DoctortDashboardPage = () => {
    return (
        <Container className="niceHeader">
            <h1 className="bigHeader">Doctor Dashboard</h1>
            <SearchBarComponent></SearchBarComponent>
        </Container>
    );
};

export default DoctortDashboardPage;
