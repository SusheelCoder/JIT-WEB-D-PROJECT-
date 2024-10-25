import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot , faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import './ShortTerm.css'
import Header from '../../../Header/Header';
import Footer from '../../../Footer/Footer';
export default function ShortTerm(){
    const data = [
        {Td1: 'CCA', Td2: '3 Month', Td3: 'Online Data Entry, Online Form Apply'},
        {Td1: 'JDCA', Td2: '1 Month', Td3: 'Online Marketing, Online Data Entry'},
        {Td1: 'Special Office', Td2: '3 Month', Td3: 'Office Work, and Online Job'},
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
                            <tr><th>S. NO.</th><th>Course Name</th><th>Duration</th><th style={{width:'40%'}}>Scope</th></tr>
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