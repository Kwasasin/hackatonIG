import "./PatientDashboardStyles.css";
import Grid from 'react-bootstrap/Button';
import {Container} from "react-bootstrap";

const DoctortDashboardPage = () => {
    return (
        <Container className="niceHeader">
            <h1 className="bigHeader">Doctor Dashboard</h1>
            <Grid className="grid-item"><h3> Hearth Operation report 23.06.2023 - Access from Bialystok </h3></Grid>
            <Grid className="grid-item"><h3> Pain killer medicine prescription - Access from China </h3></Grid>
        </Container>
    );
};

export default DoctortDashboardPage;
