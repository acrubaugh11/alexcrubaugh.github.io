import './projects.css';
import { Row, Col, Image } from 'react-bootstrap';

function ProjectsSection() {
  return (
    <div className="projects">
      <Row className='row1'>
        <Col xs={12} sm={6} md={6} className="project-1">
          <a href="https://github.com/acrubaugh11/WeatherApp">
            <div>
              <Image className="images" src="board.jpg" alt="Project 1" />
              <p>A weather application that uses a GUI and REST API calls to gather geolocation and weather data.</p>
            </div>
          </a>
        </Col>

        <Col xs={12} sm={6} md={6} className="project-2">
          <a href="https://github.com/acrubaugh11/Image_Classification">
            <div>
              <Image className="images" src="wall.jpg" alt="Project 2" />
              <p>Developed a machine learning pipeline to classify image data using feature extraction, dimensionality reduction, and model evaluation.</p>
            </div>
          </a>
        </Col>
      </Row>

      <Row className='row2'>
        <Col xs={12} sm={6} md={6} className="project-4">
          <a href="https://github.com/acrubaugh11/Ditigal_Clock">
            <div>
              <Image className="images" src="px.jpg" alt="Project 4" />
              <p>A digital clock for studying purposes that implements a JFrame GUI and gives the date.</p>
            </div>
          </a>
        </Col>
        <Col xs={12} sm={6} md={6} className="project-3">
          <a href="https://zeezcreations.com/">
            <div>
              <Image className="images" src="px.jpg" alt="Project 3" />
              <p>A website named "ZeezCreations" designed with improved SEO functionality. Was ranked #1 on Google for “furniture renewal Kigali” and “furniture refurbish” in Kigali, Kenya.</p>
            </div>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default ProjectsSection;
