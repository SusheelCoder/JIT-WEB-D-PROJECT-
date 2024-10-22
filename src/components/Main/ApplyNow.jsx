import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ApplyNow.css'
export default function ApplyNow() {
  return (
    <div id="container">
      <Row id="row">
        <Col >
            <h4>Apply Now</h4>
            <p>In order to get yourself admitted in our organization, please apply through an application form.</p>
        </Col>
        <Col md={3}><Button variant="danger" id="Button">Apply Now</Button></Col>
      </Row>
      
    </div>
  );
}

