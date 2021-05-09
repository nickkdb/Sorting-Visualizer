import React, {useState} from "react";
import {Nav, Navbar, Row, Col} from 'react-bootstrap';
import "../styles/header.css";

function Header(props) {

  const [sliderVal, setSlider] = useState(25);

  const handleSlide= (event) => {
    console.log(event.target.value);
    setSlider(event.target.value);
  }

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
        <Navbar className="py-4" style={{backgroundColor: "steelblue", marginBottom: "1.5rem"}} collapseOnSelect expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{width: "100%"}}>
              <Row style={{width: "100%", textAlign: 'center'}}>
                  <Col xl={4}>
            <Nav.Link className={!props.active ? "enabled" : "disabled"} onClick={!props.active ? () => props.reset() : null} style={style}>Generate New Array</Nav.Link>
                  </Col>
                  <Col xl={4}>
            <Nav.Item style={style}>Sorting Speed <br/> (lower = faster)</Nav.Item>
            <input 
            id="slider" 
            style={{width: "10rem"}}
            type="range" 
            min="10" max="50"
            value={sliderVal}
            onChange={(event) => handleSlide(event)}
            />
                  </Col>
                  <Col xl={4} style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
            <Nav.Link className={!props.active ? "enabled" : "disabled"} onClick={() => props.mergeSort(sliderVal)} style={algoStyle}>Merge Sort</Nav.Link>
            <Nav.Link className={!props.active ? "enabled" : "disabled"} onClick= {() => props.bubbleSort(sliderVal)} style={algoStyle}>Bubble Sort</Nav.Link>
            <Nav.Link className={!props.active ? "enabled" : "disabled"} onClick= {() => props.selectionSort(sliderVal)} style={algoStyle}>Selection Sort</Nav.Link>
                  </Col>
              </Row>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
      )
}

export default Header;