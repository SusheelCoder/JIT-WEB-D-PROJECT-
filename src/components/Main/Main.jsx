import ApplyNow from "./ApplyNow"
import Members from "./Member/Members"
import Welcome from "./Welcome/Welcome"
import Slider from "./Slider"
import Certification from './Certification'
export default function Main(){
    return(
        <>
            <Slider/>
            <ApplyNow/>
            <Welcome/>
            <Members/>
            <Certification/>
            
        </>
    )
}