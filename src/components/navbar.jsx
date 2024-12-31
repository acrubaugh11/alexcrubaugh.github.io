import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';
import './whoami.jsx';
import './socials.jsx';

function NavBar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container className="custom-container">
        <Navbar.Brand href="#header">Alexander Crubaugh</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Use ms-auto to push links to the right */}
            <Nav.Link href="#header">Home</Nav.Link>
            <Nav.Link href="#about-me-section">About Me</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#projects-section">Weather App</NavDropdown.Item>
              <NavDropdown.Item href="#projects-section">Image Classification</NavDropdown.Item>
              <NavDropdown.Item href="#projects-section">zeezcreations</NavDropdown.Item>
              <NavDropdown.Item href="#projects-section">Digital Clock</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact-section">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
