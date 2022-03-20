import Service from "./Service.js"
import classes from "./Services.module.css"
import {Row, Col} from "react-bootstrap"
const Services = (props) => {
    const services = props.services;
    
    const servicesHtml = services.list.map((service) => {
       return <Col style={{paddingLeft:"0%", paddingRight:"0%"}}><Service service={service} /></Col>
    })
    
    return(
        <div className={classes.services}>
            <Row style={{width:"100%"}}>{servicesHtml}</Row>
        </div>
    )
}

export default Services