import { Component } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";

class MyList extends Component {
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col className="d-flex"> 
                      <h3 className="text-white">My List</h3>
                      <Dropdown id="">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">Genres</Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default MyList;