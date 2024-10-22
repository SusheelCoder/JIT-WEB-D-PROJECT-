import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './BottomBar.css'
import ContactUs from './ContactUs';
import ImportantLinks from './ImportantLinks';
export default function Footer(){
    return(
        <div style={{backgroundColor:"#353535", paddingTop:'1.5rem', marginBottom:'1rem'}}>
            <Container>
                <Row className="footerRow" >
                    <Col className="footerCol" xl={4} md={6}>
                        <h3 className="footerh">ABOUT JIT</h3>
                        <p>
                        JIT is dedicated to the "EDUCATION FOR ALL" goal. AGIS works towards providing educational infrastructure and technology to every corner of Indian Subcontinent to catalyses the outreach of education and is committed to the creation of sustainable social infrastructure.
                        </p>
                    </Col>
                    <Col className="footerCol" xl={4} md={6}>
                        <h3 className="footerh">IMPORTANT LINKS</h3>
                        <ImportantLinks/>
                    </Col>
                    <Col className="footerCol" xl={4} md={12}>
                        <h3 className="footerh">CONTACT US</h3>
                        <ContactUs/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}