import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot , faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'

import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';
export default function LongTerm(){

    const data = [
        {Td1: 'ADCA', Td2: '12 Month', Td3: 'Account'},
        {Td1: 'DCA', Td2: '6 Month', Td3: 'Computer Operator, Data Entry Operator, Computer Faculty, Self Employed'},
        {Td1: 'DFA', Td2: '9 Month', Td3: 'Accountant, Computer Operator, Data Entry Operator, Computer Faculty, Self Employed'},
        {Td1: 'DHN', Td2: '12 Month', Td3: 'Self Employed, Computer Service Centre, etc.'},
        {Td1: 'HDCA', Td2: '12 Month', Td3: 'Computer Operator, Programmer, Faculty, Self Employed'},
        {Td1: 'SPECIAL CFA', Td2: '12 Month', Td3: 'Computer Operator, Accountant'},
    ]
    return(
        <>
        <Header/>
        <div className="aboutDiv"><h1>Course List</h1></div>
        <Container style={{marginBottom:'1rem'}}>
        
            <h2 className="aboutH2">Short Term Course List</h2>
            <Row>
                <Col className="aboutCol" xl={8} md={8}>
                    
                    <table border={1}>
                        <thead>
                            <tr><th>S. NO.</th><th>Course Name</th><th>Duration</th><th style={{width:'55%'}}>Scope</th></tr>
                        </thead>

                        <tbody>
                        {
                            data.map((d, idx)=>(
                                <tr key={idx}><th>{idx}</th><td>{d.Td1}</td><td>{d.Td2}</td><td>{d.Td3}</td></tr>
                            ))
                        }
                        </tbody>
                        
                        
                    </table>
                </Col>
                <Col className="shortCol" xl={4} md={4}>
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