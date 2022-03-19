import classes from "./Competency.module.css"

const Competency = (props) => {

    return(
        <div className={classes.competency}>
            
            <h4>{props.competency.header}</h4>
            <hr className={classes.hr} ></hr>
            <p className={classes.description}>{props.competency.text}</p>
        </div>
    );
    
}

export default Competency