import classes from "./Service.module.css"
const Service = (props) => {
    return(
        <div id={props.service.id}  className={classes.service} style={{backgroundColor : props.service.backgroundcolor, color : props.service.color}}>
            <h4>{props.service.text}</h4>
        </div>
    );
}

export default Service;