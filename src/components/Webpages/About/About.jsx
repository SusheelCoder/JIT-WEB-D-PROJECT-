import Header from "../../Header/Header";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './About.css'
import Footer from "../../Footer/Footer";
export default function Main(){
    return (
        <>
            <Header/>
            <div className="aboutDiv"><h1>About Us</h1></div>
            <Container style={{marginBottom:'1rem'}}>
            
                <h2 className="aboutH2">ABOUT US</h2>
                <Row>
                    <Col className="aboutCol" xl={6}>
                       <h3>Welcome to JIT</h3> 
                       <p>AGIS works towards providing educational infrastructure and technology to every corner of Indian Subcontinent to catalyses the outreach of education and is committed to the creation of sustainable social infrastructure.</p>
                       <p>AGIS feels pleasure to provide various traditional, vocational, and job oriented technical & technological courses recognized by HRD (GOVT. OF INDIA), UGC, and approved by DEC being an authorized study centre of UGC recognized universities.</p>
                       <p>In present global context demands synthesis of a new paradigm of education and development through universalization and integration of information Technology in teaching, learning and educational management processes AGIS is authorized testing centre of MICROSOFT to provide MOS & MTA certification of global values on the basis of ON- line examination.</p>
                    </Col>
                    <Col className="aboutCol" xl={4} >
                        <h3>Opening Hours</h3>
                        <table border={1}>
                            <tr><td>Monday - Thursday</td> <td>9.00 - 20.00</td></tr>
                            <tr><td>Friday</td> <td>9.00 - 16.00</td></tr>
                            <tr><td>Saturday</td> <td>9.00 - 14.00</td></tr>
                            <tr><td>Sunday</td> <td>Closed</td></tr>
                        </table>
                    </Col>
                </Row>

            </Container>
            <Footer/>
        </>
    )
}