// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faDownload, faSuitcase} from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFacebook, faLinkedin, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import './TopBar.css';



export default function TopBar(){
    
    return(
        <div className='container1'>
            <div className='first'>
                <div className='download  firstIcon'>
                    <FontAwesomeIcon className='icon' icon={faDownload} />
                    <a href='#'>Download</a>
                </div>
                <div className='mail  firstIcon'>
                    <FontAwesomeIcon className='icon' icon={faEnvelope}/>
                    <a href='#'>123@gmail.com</a>
                </div>
                <div className='login firstIcon'>
                    <FontAwesomeIcon className='icon' icon={faSuitcase} />
                    <a href='#'>login</a>
                </div>
                
                
            </div>
            <hr id="horizontalLine"/>
            <div className='secand'>
                <div className='secandIcon'>
                    <FontAwesomeIcon className='icon' icon={faFacebook} />
                </div>
                <div className='secandIcon'>
                    <FontAwesomeIcon className='icon' icon={faXTwitter} />
                </div>
                <div className='secandIcon'>
                    <FontAwesomeIcon className='icon' icon={faLinkedin} />
                </div>
                <div className='secandIcon'>
                    <FontAwesomeIcon className='icon' icon={faGooglePlusG} />
                </div>
                
                
                
               
            </div>
            
            
        </div>
    )
}