import { Card, Col, Row } from 'react-bootstrap';
import cdt from './images/cdt.png'
import mvc from './images/mvc.png';
import wd from './images/wd.png';
import btr from './images/btr.png';
import gt from './images/gt.png';
import sn from './images/sn.png';
import ec from './images/ec.png';
import '../css/style.css';

function ProjectComp({ projects }) {
    return (
        <>
            <div className='portfolio-s'>
                <Row xs={1} md={2} className="g-4">
                    {projects.map((proj) => (
                        <Col key={proj.projId}>
                            <Card>
                                <a href={proj.dLink} target="_blank" rel="noreferrer">
                                    {proj.projSS === 'cdt.png' && <Card.Img className="img-pt" variant="top" src={cdt} alt={proj.projAlt} />}
                                    {proj.projSS === 'mvc.png' && <Card.Img className="img-pt" variant="top" src={mvc} alt={proj.projAlt} />}
                                    {proj.projSS === 'wd.png' && <Card.Img className="img-pt" variant="top" src={wd} alt={proj.projAlt} />}
                                    {proj.projSS === 'btr.png' && <Card.Img className="img-pt" variant="top" src={btr} alt={proj.projAlt} />}
                                    {proj.projSS === 'gt.png' && <Card.Img className="img-pt" variant="top" src={gt} alt={proj.projAlt} />}
                                    {proj.projSS === 'sn.png' && <Card.Img className="img-pt" variant="top" src={sn} alt={proj.projAlt} />}
                                    {proj.projSS === 'ec.png' && <Card.Img className="img-pt" variant="top" src={ec} alt={proj.projAlt} />}
                                </a>
                                <Card.Body>
                                    <Card.Title id="card-tl">{proj.projName}</Card.Title>
                                    <Card.Text className="d-grid gap-2" id="card-te">
                                        <a className="a-link" href={proj.rLink} target="_blank" rel="noreferrer">Repository</a>
                                        <a className="a-link" href={proj.dLink} target="_blank" rel="noreferrer">
                                            {proj.dTp === 'walkthrough video' && 'Walkthrough Video'}
                                            {proj.dTp !== 'walkthrough video' && 'Deployed Application'}
                                        </a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
}

export default ProjectComp;