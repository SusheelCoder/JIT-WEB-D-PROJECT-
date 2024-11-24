import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot , faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
export default function Contact(){

    return(
        <>
        <Header/>
        <div className="aboutDiv"><h1>Contact Us</h1></div>
        <Container style={{marginBottom:'1rem'}}>
        
            <h2 className="aboutH2">Contact Us</h2>
            <Row>
                <Col className="aboutCol" xl={6} md={8}>
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224101.20113141506!2d77.20468429368609!3d28.64230937238099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e055d148a1%3A0x9f5207f7f0bc8f63!2sNoida%20Institute%20of%20Engineering%20and%20Technology%20(NIET%2C%20Greater%20Noida)!5e0!3m2!1sen!2sin!4v1730138444301!5m2!1sen!2sin" style={{width:'100%', height:"50vh"}} loading="lazy" ></iframe>
                </Col>
                
                <Col className="contactCol" xl={4} md={4}>
                    
                    <div>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <h3>Address</h3>
                        <p>JIT NEAR PUNJAB NATIONAL BANK , 231501</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhone} />
                        <h3>Phone</h3>
                        <p>+91-7523936078</p>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <h3>EMAIL</h3>
                        <p><a href="mailto:123@gmail.com">susheelkumarp99@gmail.com</a></p>
                    </div>
                </Col>
            </Row>

        </Container>
        <Footer/>
       
        </>
    )
}