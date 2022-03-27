import Service from "./Service.js"
import classes from "./Services.module.css"
import {Row, Col, Container} from "react-bootstrap"
import law from "./../../images/law4.png"
const Services = (props) => {
    const services = props.services;
    
    const servicesHtml = services.list.map((service) => {
       return <Col sm="6" lg="3" className={classes["services-col"]}><Service service={service} /></Col>
    })
    
    return(
        <div className={classes.services}>
            {/* <Row style={{width:"100%"}}>{servicesHtml}</Row> */}
            {/* <img className={classes["image"]} src={law}></img> */}
            <h3 className={classes.header}>My Services</h3>
            <hr className={classes.hr}></hr>
            <div style={{marginTop:"6%", color:"white", width:"100%"}}>
                <Container><Row>{servicesHtml}</Row></Container>
            </div>
        </div>
    )
}

export default Services