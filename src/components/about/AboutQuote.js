import classes from "./AboutQuote.module.css";
import {BsPatchCheck} from "react-icons/bs"

const AboutQuote = (props) => {
    return(
            <div>
                <h3 className={classes["page-quote"]}>{props.text} <span className={classes["check-icon"]}><BsPatchCheck/></span></h3>
               
            </div> 
        )
}

export default AboutQuote;
