import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot , faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import './ImportantLinks.css'
export default function ContactUs(){

    
    return (
        <div className='ImpLinksDiv'>
            <ul style={{listStyle:"none"}}>
                <li><FontAwesomeIcon icon={faLocationDot} /> &nbsp;&nbsp;JIT, Kachhawa Bazar,Near Panjab National Bank , Mirzapur, 231501</li>
                <li><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;+917523936078</li>
                <li><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;susheelkumarp99@gmail.com</li>
            </ul>
        </div>
    )
}