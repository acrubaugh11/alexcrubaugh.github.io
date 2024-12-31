import './hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';

function SocialsSection() {
    return (
      <Container className='main'>
        <Row className='justify-content-md-center g-0'>
            <Col xs lg="2">
              <a href="https://github.com/acrubaugh11" className='github-images'><Image className='github-images' src='github.jpg'/></a>
            </Col>
            <Col xs lg="2">
              <a href="https://www.linkedin.com/in/alexander-crubaugh-5012b7252/">
                <Image className='linkedin-images' src='linkedin.jpg'/>
              </a>
            </Col>
            <Col xs lg="2">
              <a href="https://www.facebook.com/alex.crubaugh">
                <Image className='facebook-images' src='facebook.jpg'/>
              </a>
              </Col>
        </Row>
      </Container>
    );
  }

export default SocialsSection;