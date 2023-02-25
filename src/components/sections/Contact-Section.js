import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../css/style.css';

// contact section
function ContactSection() {
    let pt = { name: '' };
    const em = { el: '' };
    const te = { text: '' };
    pt = Object.assign(pt, em);
    pt = Object.assign(pt, te);
    // useState
    const [cpt, spt] = useState(pt);

    // onChange
    const en = (t) => {
        let ot;
        switch (t.target.name) {
            case ('nmPt'):
                ot = Object.assign(cpt, { name: t.target.value });
                return spt(ot);
            case ('emPt'):
                ot = Object.assign(cpt, { el: t.target.value });
                return spt(ot);
            case ('tPt'):
                ot = Object.assign(cpt, { text: t.target.value })
                return spt(ot);
            default:
                return;
        }
    };

    // useState
    const fpt = '';
    const [fdb, sfd] = useState(fpt);
    // onBlur
    const ck = (t) => {
        const cNm = (t.target.name == 'nmPt' && !t.target.value);
        const cEm = (t.target.name == 'emPt' && !t.target.value);
        const cTe = (t.target.name == 'tPt' && !t.target.value);
        switch (true) {
            case (cNm):
                return sfd('name - required');
            case (cEm):
                return sfd('email address - required');
            case (cTe):
                return sfd('text - required');
            default:
                return;
        };
    };
    // onClick
    const snd = (t) => {
        t.preventDefault();
        const re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        const elR = !(re.test(cpt.el.trimStart().toLowerCase()));
        const fr = 'not valid - please check the email address';
        const elC = !(cpt.el.trimStart().toLowerCase());
        const fm = 'email address - required';
        const tl = (!(cpt.text.trimStart().length > 0));
        const ft = 'text - required';
        const nmC = !(cpt.name.trimStart());
        const fn = 'name - required';

        switch (true) {
            case (nmC):
                return sfd(fn);
            case (elC):
                return sfd(fm);
            case (elR):
                return sfd(fr);
            case (tl):
                return sfd(ft);
            default:
                // placeholder
                sfd('');
                document.getElementsByName('nmPt')[0].value = '';
                document.getElementsByName('emPt')[0].value = '';
                document.getElementsByName('tPt')[0].value = '';
                let bl = { name: '' };
                const ecl = { el: '' };
                const tcl = { text: '' };
                bl = Object.assign(bl, ecl);
                bl = Object.assign(bl, tcl);
                return spt(bl);
        }
    }
    // form
    return (
        <div className="d-flex justify-content-center align-items-center contact-form">
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <h2 className="text-primary">Contact Form</h2>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="nmPt" onBlur={ck} onChange={en} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control name="emPt" onBlur={ck} onChange={en} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Text</Form.Label>
                                <Form.Control name="tPt" as="textarea" rows={4} onBlur={ck} onChange={en} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <h6 id="fdb">{fdb}</h6>
                                <Button type="submit" className="mt-2" variant="primary" onClick={snd}>Submit</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactSection;