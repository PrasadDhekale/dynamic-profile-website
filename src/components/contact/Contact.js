import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
//import './project.css'
import { Row, Col } from "react-bootstrap"
import { BsLinkedin } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { SiHackerrank } from "react-icons/si"
import { SiGmail } from "react-icons/si"
import "./contact.module.css"
import classes from "./contact.module.css";

function Contact(props) {

    return (
        <React.Fragment>
            <div className={classes["contact-content"]}>
                <Row style={{ marginTop: "2rem" }}>
                    <Col>
                        <h2 style={{ color: "whitesmoke" }}>CONTACT</h2>
                    </Col>
                </Row>
                <div className={classes["social-panel"]}>
                    <div className={classes["contact-header"]}>
                        <h2>Adv. Shweta Pandey</h2>
                        <h3>8624044983</h3>
                    </div>
                    
                    <div style={{ marginTop: "3rem" }}>
                        <a className={classes['icon-style']} href="https://www.linkedin.com/in/prasad-dhekale-4116a916b/"><BsLinkedin></BsLinkedin></a>
                        <a className={classes['icon-style']} href="mailto:shwetapandey3333@gmail.com"><SiGmail/></a>
                    </div>
                   
                    <p style={{ color: "grey", marginTop: "5rem" }}>created by Prasad. 2021</p>
                </div>
            </div>
        </React.Fragment>

    )
}

export default Contact;