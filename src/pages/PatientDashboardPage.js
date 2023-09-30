import "./PatientDashboardStyles.css";
import Grid from 'react-bootstrap/Button';
import {Container} from "react-bootstrap";

const PatientDashboardPage = () => {
    return (
        <Container className="niceHeader">
            <h1> Data requests </h1>
            <Grid className="grid-item"><h3> Hearth Operation report 23.06.2023  - Access from Bialystok </h3></Grid>
            <Grid className="grid-item"><h3> Pain killer medicine prescription  - Access from China </h3></Grid>
            <Grid className="grid-item"><h3> Successful login  - Access from Krakow </h3></Grid>
            <h1> History </h1>
            <Grid className="grid-item"><h3> Hearth Operation report 23.06.2023  - Access from Bialystok </h3></Grid>
            <Grid className="grid-item"><h3> Pain killer medicine prescription  - Access from China </h3></Grid>
        </Container>
    );
};

export default PatientDashboardPage;
