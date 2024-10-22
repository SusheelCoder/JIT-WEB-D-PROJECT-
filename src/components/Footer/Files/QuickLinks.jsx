import Container from 'react-bootstrap/Container';
import { faXTwitter, faFacebook, faLinkedin, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './QuickLinks.css'
export default function QuickLinks(){
    return(
        <div className="linksDiv"> 
            <a className="links" href="#"><FontAwesomeIcon className='icon' icon={faFacebook} /></a>
            <a className="links" href="#"><FontAwesomeIcon className='icon' icon={faXTwitter} /></a>
            <a className="links" href="#"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
            <a className="links" href="#"><FontAwesomeIcon className='icon' icon={faGooglePlusG} /></a>
            
            
            
            
            
        </div>
    )
}