import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
export default function Nav1() {
  return (
    <Navbar expand="lg" id="navDiv">
      <Container >
        <Navbar.Brand href="#home"><img src='#'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
          <Nav.Link as={Link} to="/" id="home"><FontAwesomeIcon icon={faHouse} /> HOME</Nav.Link>
            
            <NavDropdown title="ABOUT US" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/about">ABOUT JIT</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mission">MISSION AND VISION</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">DIRECTOR MESSAGE</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="COURSES" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/short-term-courses">Short Term Courses</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/long-term-courses">Long Term Courses</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jit-courses">JIT Courses</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="ADMISSION" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home">GALLERY</Nav.Link>
            <Nav.Link href="#home">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default BasicExample;