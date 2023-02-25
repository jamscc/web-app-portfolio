import { Container, Row, Col } from 'react-bootstrap';
import img from './images/avatar.png';
import '../css/style.css';

// about section
function AboutSection() {
    return (
        <div className="about-mq">
            <Container className="about-container">
                <Row>
                    <Col fluid="sm" sm={12} className="d-flex justify-content-center">
                        {/* source: Avatar Maker from Chrome Web Store */}
                        <img id="about-img" fluid="sm" src={img} alt="avatar"></img>
                    </Col>
                    <Col fluid="sm" sm={12} className="d-flex justify-content-center">
                        <p id="about-text">Welcome to my coding portfolio! My name is James. Most of my professional experience has been focused on real estate, and in this field, I have enjoyed using various apps and tools. Over the years, I have become increasingly interested in coding, and so, I decided to enroll in a coding bootcamp. Please visit the Portfolio section, which includes some samples of my portfolio that I have put together to date while in the program. Thank you for visiting my page. Hope to hear from you soon!</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutSection;