import "./PatientDashboardStyles.css";
import Grid from 'react-bootstrap/Button';
import {Col, Container} from "react-bootstrap";

const SearchBarComponent = () => {
    return (
        <Container className="searchContainer1">
            <div className="input-group">
                <div className="form-outline">
                    <label className="form-label" htmlFor="form1">Search patient database</label>
                    <input id="search-input" type="search" id="form1" className="form-control"/>
                </div>
                <button id="search-button" type="button" className="btn btn-primary">
                    Submit
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </Container>
    );
};

export default SearchBarComponent;
