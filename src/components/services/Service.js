import classes from "./Service.module.css"
const Service = (props) => {
    return(
        <div id={props.service.id}  className={classes.service} style={{color : props.service.color, textAlign:"left"}}>
            <h5>{props.service.header}</h5>
            <hr className={classes.hr}></hr>
            <p className={classes.description}>{props.service.text}</p>
            <a href={props.service.link.url} className={classes.link}>{props.service.link.name}</a>
        </div>
    );
}

export default Service;