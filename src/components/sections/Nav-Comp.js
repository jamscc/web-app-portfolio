import { Navbar, Nav, Container } from 'react-bootstrap';
// nav
function NavComp({ cDy, sb }) {
    const { location } = window;
    return (
        <Navbar fixed="top" bg="dark" variant="dark" expand="sm">
            <Container fluid="sm">
                <Navbar.Brand href="/" id="main" onClick={() => { return location.reload() }}><h1 className='nav-h-text'>Jamscc Portfolio</h1></Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="#about" id="about" onClick={cDy} style={sb}>About Jamscc</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#portfolio" id="portfolio" onClick={cDy}>Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#contact" id="contact" onClick={cDy}>Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#res" id="res" onClick={cDy}>Resume</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavComp