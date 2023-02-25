import { Container, Row, Col, Badge } from 'react-bootstrap';
import '../css/style.css';

// res section
function ResSection({ fs }) {
    return (
        <div className="d-flex justify-content-center">
            <Container className="res">
                <Row className="gap-5">
                    <Col fluid="sm" sm={12}>
                        <div>
                            <h3>
                                <Badge bg="secondary bg-dark text-white">Full Stack</Badge>
                            </h3>
                            {fs.map((s) => (
                                <h4 className="e-item" key={s.id}>
                                    <Badge bg="secondary bg-light text-dark">{s.te}</Badge>
                                </h4>
                            ))}
                        </div>
                    </Col>
                    <Col fluid="sm" sm={12}>
                        <div>
                            <h3>
                                <Badge bg="secondary bg-dark text-white">Resume</Badge>
                            </h3>
                            <h4>
                                <Badge bg="secondary bg-light text-info" className="cnt-link">
                                    <a className="a-link" href="https://drive.google.com/file/d/1FbRxUtQgL8I82zqyAF5gVeMxLKXtTpZY/view?usp=share_link" target="_blank" rel="noreferrer">Click here</a>
                                </Badge>
                            </h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ResSection;