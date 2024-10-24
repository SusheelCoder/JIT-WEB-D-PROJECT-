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
      <Container CollapseOnSelect>
        <Navbar.Brand href="#home"><img src='#'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
            <Nav.Link href="#home" id="home"> <Link to="/"><FontAwesomeIcon icon={faHouse} /> HOME</Link></Nav.Link>
            
            <NavDropdown title="ABOUT US" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/about">ABOUT JIT</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><Link to="/mission">MISSION AND VISION</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">DIRECTOR MESSAGE</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="COURSES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"W>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
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