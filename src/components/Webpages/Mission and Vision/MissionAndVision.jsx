import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import mission from "../../../assets/mission.png"
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
export default function MissionAndVision(){
    return(
        <>
            <Header/>
            <div className="aboutDiv"><h1>Mission &amp; Vision</h1></div>
            <Container style={{marginBottom:'1rem'}}>
            
                <h2 className="aboutH2">Mission &amp; Vision</h2>
                <Row>
                    <Col>
                        <img src={mission} alt="mission and vision"/>
                    </Col>
                    <Col className="aboutCol" xl={6}>
                       <h3>Our Mission &amp; Vision</h3> 
                       <p>To advance frontiers of computer knowledge and promote its dissemination through sustainable affordable learning systems seamlessly accessible to all, including so called unreached zone, from among whom the leaders and innovators of tomorrow will emerge, the ATI shall:</p>
                       <ul>
                        <li>Strengthen the development of associated learning centre as a proactive role model for high quality and learner centric computer literacy programmee.</li>
                        <li>Share professional capabilities and resources to improve standards of computer education in the whole world.</li>
                        <li>Develop networks using emerging technologies and methods with global reach for effective programme delivery.</li>
                        <li>Provide an intelligent flexible system of education to meet the challenges of access and equity and work towards development of knowledge based society.</li>
                        <li>Provide computer education to the highest unreached people and promote community participation for local development.</li>
                        <li>Provide specific need-based computer education and training opportunities for continuous professional development and skill up gradation to in service professionals.</li>
                       </ul>
                       <p>ARYVRAT GLOBAL INSTITUTE OF SCIENCE PRIVATE LIMITED is an ISO 9001:2015 certified company, the initiator of Vishwa Computer Sakshartha Mission shall provide seamless access to sustainable and learner centric quality education, skill up gradation and training to all by using innovative technologies and methodologies for computer literacy programmed and ensuring convergence of existing systems for massive human resources required for promoting integrated national development and global understanding. Thus we have :</p>
                    </Col>
                    
                </Row>

            </Container>
            <Footer/>
        </>
    )
}