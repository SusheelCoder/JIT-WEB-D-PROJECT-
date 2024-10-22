import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bars from './Bars';
import './Welcome.css'
export default function News() {
  return (
    <Container id="newsContainer">
      <Row>
        <Col id="newsCol">
            <h5>WELCOME TO JIT</h5>
            <p>A Program Taken by ARYVRAT GLOBAL INSTITUTE OF SCIENCE PRIVATE LIMITED</p>
            <p>AGIS is dedicated to the "EDUCATION FOR ALL" goal. AGIS works towards providing educational infrastructure and technology to every corner of Indian Subcontinent to catalyses the outreach of education and is committed to the creation of sustainable social infrastructure.</p>
            <p>AGIS feels pleasure to provide various traditional, vocational, and job oriented technical & technological courses recognized by HRD (GOVT. OF INDIA), UGC, and approved by DEC being an authorized study centre of UGC recognized universities</p>
            <p>In present global context demands synthesis of a new paradigm of education and development through universalization and integration of information Technology in teaching, learning and educational management processes AGIS is authorized testing centre of MICROSOFT to provide MOS & MTA certification of global values on the basis of ON- line examination.</p>

        </Col>
        <Col lg={5}>
            <h5>NEWS AND EVENTS</h5>
            <Bars/>
        </Col>
      </Row>
    </Container>
  );
}
