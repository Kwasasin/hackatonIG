import "./PatientDashboardStyles.css";
import "./DoctorDashboardStyles.css";
import Grid from 'react-bootstrap/Button';
import {Container} from "react-bootstrap";
import SearchBarComponent from "./SearchBarComponent";

const PatientDataBasePage = () => {
    return (
        <Container className="niceHeader">
            <h1 className="bigHeader">Patient Database</h1>
            <h3 className="someHeaderPatientData">Patient Pesel: 2182191279812</h3>
            <p className="reportPatient">- Blood Test - Warsaw Clinic of Pregnancy - 23.02.2013</p>
            <p>- Pregnancy Test - Warsaw Clinic of Pregnancy - 28.02.2013</p>
            <p>- Pain killer prescription - Not known - 23.02.2013</p>
            <p>- Blood Test - Warsaw Clinic of Pregnancy - 23.02.2013</p>
            <p>- Blood Test - Warsaw Clinic of Pregnancy - 22.02.2013</p>
            <p>- Vaccine - Warsaw Clinic of Pregnancy - 23.02.2018</p>
            <p>- Blood Test - Warsaw Clinic of Pregnancy - 23.02.2013</p>
            <Container className="funnyImageGrid">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" className="bi bi-building-check" viewBox="0 0 16 16">
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514Z"/>
                    <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1V1Z"/>
                    <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"/>
                </svg>
            </Container>
        </Container>
    );
};

export default PatientDataBasePage;
