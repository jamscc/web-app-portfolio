import { Container, Navbar } from 'react-bootstrap';
import '../css/style.css';

// footer
function FooterSection() {
    return (
        <>
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container className="d-flex justify-content-center">
                    <Navbar.Brand href="https://github.com/jamscc" target="_blank" rel="noreferrer" className="footer-links"> GitHub Profile</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default FooterSection;