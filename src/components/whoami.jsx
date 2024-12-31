import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Image } from 'react-bootstrap';
import './whoami.css';

function AboutMe() {
    return (
        <>
            <div className='middle-part'>
                <Row>
                    <Col xs={12} md={4} className="mb-3">
                        <Image className='fam-pic img-fluid' src='fam.jpg' rounded/>
                    </Col>
                    <Col xs={12} md={4} className="mb-3"><p>
                        Hello and welcome to my personal portfolio! My name is Alexander Crubaugh and I am currently based in Greensboro, NC
                        where I am currently pursuing a bachelors degree in Computer Science. I was originally born in the US but had the privelidge to grow up overseas across Africa for most of my childhood.
                        My passion for software engineering and computer science continually drives my academic and personal projects (such as this one). I flourish on opportunities
                         that allow me to apply my foundational programming knowledge and academic insights to real challenges or projects. 
                         I have strong proficiency in languages and technologies such as Java, Python, HTML, CSS, JavaScript, C, C++, and Git.
                          I have a powerful desire to acquire new skills and refine my craft, and I am excited to explore collaborative opportunities that allow me to do so.
                        </p>
                    </Col>
                    <Col xs={12} md={4} className="mb-3">
                        <Image className='hut-pic img-fluid' src='hut.jpg' rounded/>
                    </Col>
                </Row> 
            </div>
        </>
    );
}

export default AboutMe;