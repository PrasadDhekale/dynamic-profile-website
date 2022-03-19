import {HiOutlinePencilAlt} from "react-icons/hi"
import classes from  "./CompetencyQuote.module.css"
const CompetencyQuote = (props) => {
    return(
        <h3 className={classes["page-quote"]}>{props.text} <span className={classes["check-icon"]}><HiOutlinePencilAlt/></span></h3>
    )
}

export default CompetencyQuote;