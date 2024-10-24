import { Link } from "react-router-dom"
export default function NotFound(){
    return (
            <div style={{fontSize:'2rem', margin:'1rem'}}>
                404 Not Found<br></br>
                <Link to="/">Back To Home</Link>
            </div>
        
    )
}