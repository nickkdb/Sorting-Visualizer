import React from "react";
import {Nav, Navbar, Row, Col} from 'react-bootstrap';

function Header(props) {

    const style= {
        fontFamily: "Courier New",
        fontSize: "1.25rem",
        color: "#B0E0E6",
      }
    const algoStyle= {
      fontFamily: "Courier New",
      fontSize: "1rem",
      color: "#B0E0E6",
    }

    return (
        <Navbar className="py-4" style={{backgroundColor: "steelblue"}} collapseOnSelect expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{width: "100%"}}>
              <Row style={{width: "100%", textAlign: 'center'}}>
                  <Col xl={4}>
            <Nav.Link onClick={() => props.reset()} style={style}>Generate New Array</Nav.Link>
                  </Col>
                  <Col xl={4}>
            <Nav.Link style={style}>Sorting Speed</Nav.Link>
                  </Col>
                  <Col xl={4} style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
            <Nav.Link style={algoStyle}>Merge Sort</Nav.Link>
            <Nav.Link style={algoStyle}>Bubble Sort</Nav.Link>
            <Nav.Link style={algoStyle}>Selection Sort</Nav.Link>
                  </Col>
              </Row>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
      )
}

export default Header;