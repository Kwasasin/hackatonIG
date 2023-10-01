import "./PatientDashboardStyles.css";
import Grid from 'react-bootstrap/Button';
import {Col, Container} from "react-bootstrap";

const SearchBarComponent = () => {
    return (
        <Container>
            <Col className="justify-content-center">
            <div className="input-group justify-content-center">
                <div className="form-outline">
                    <input id="search-input" type="search" id="form1" className="form-control"/>
                    <label className="form-label" htmlFor="form1">Search</label>
                </div>
                <button id="search-button" type="button" className="btn btn-primary">
                    <i className="fas fa-search"></i>
                </button>
            </div>
            </Col>
        </Container>
    );
};

export default SearchBarComponent;
