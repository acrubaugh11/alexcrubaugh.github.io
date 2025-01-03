import { Container, Row, Col, Image } from 'react-bootstrap';
import './hero.css';

function HeroSection() {
  return (
    <Container>
      <Row>
        {/* Image Column */}
        <Col xs={12} md={6} className="hero-image-col">
          <Image className="hero-image" src="./snazy.jpg" rounded />
        </Col>
        
        {/* Text Column */}
        <Col xs={12} md={6}>
          <div className="hero-text">
            <h1 className="welcome-text">Welcome</h1>
            <p>Aspiring Software Engineer.</p>
            <p>Current Senior in Computer Science, Based in Greensboro, NC.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;
