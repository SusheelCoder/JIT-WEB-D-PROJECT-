import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot , faPhone, faEnvelope,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import Footer from '../../../Footer/Footer';
import Header from '../../../Header/Header';
import { useState } from 'react';
export default function CertificateVerify(){
    const[certificateNum, setCertificateNum] = useState("");
    function handleCertificateNum(e){
        setCertificateNum(e.target.value);
    }

    function handleSearch(e){
        e.preventDefault();
        console.log(certificateNum);
        setCertificateNum("");
    }

    return (
        <>
        <Header/>
        <div className="aboutDiv"><h1>Certificate Verification Search</h1></div>
        <Container style={{marginBottom:'1rem'}}>
        
            <h2 className="aboutH2">Download Your Certificate Verification</h2>
            <Row className="searchRow">
                <Col className="searchCol" xl={6} md={8}>
                <div>
                    <form>
                        <input type="text" required placeholder='Search Registration' value={certificateNum} onChange={handleCertificateNum}></input>
                        <button onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </form>
                </div>
                <div>
                    <h6>Note: </h6>
                    <ul>
                        <li>Enter Registration No., Enrollment Number and Sl. No. to search your form</li>
                        <li>Bring your e-copy of registration form while visit Hi-Tech Institute center.</li>
                        <li>E-Copy of registration form is system generated so, not use as original document.</li>
                    </ul>
                </div>
                    
                </Col>
                <Col className="shortCol" xl={3} md={4}>
                    <h3>Contact </h3>
                    <ul style={{listStyle:"none"}}>
                        <li><FontAwesomeIcon icon={faLocationDot} /> &nbsp;&nbsp;JIT, Sumitra Katra, Rajatalab,
                        Varanasi, 221311</li>
                        <li><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;+9182473684</li>
                        <li><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;Email: support@AGISVNS.com</li>
                    </ul>
                </Col>
            </Row>

        </Container>
        <Footer/>
       
        </>
    )
}