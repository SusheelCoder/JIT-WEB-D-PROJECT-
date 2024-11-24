import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import mjit from '../../assets/logo mjit.jpg';
export default function Nav1() {
  return (
    <Navbar expand="lg" id="navDiv">
      <Container >
        <Navbar.Brand href="#home"><img src={mjit}/></Navbar.Brand>
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
              <NavDropdown.Item as ={Link} to ="/applyOnline">APPLY ONLINE</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/reg_form_search">ADMISSION SEARCH</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/certificate">CERTIFICATE VERIFICATION</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/gallery">GALLERY</Nav.Link>
            <Nav.Link as={Link} to="/contact">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default BasicExample;