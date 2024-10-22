import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot , faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import './ImportantLinks.css'
export default function ContactUs(){

    
    return (
        <div className='ImpLinksDiv'>
            <ul style={{listStyle:"none"}}>
                <li><FontAwesomeIcon icon={faLocationDot} /> &nbsp;&nbsp;JIT, Sumitra Katra, Rajatalab,
                Varanasi, 221311</li>
                <li><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;+9182473684</li>
                <li><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;123@gmail.com</li>
            </ul>
        </div>
    )
}