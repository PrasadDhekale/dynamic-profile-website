import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
//import './project.css'
import { Row, Col } from "react-bootstrap"
import { BsFacebook, BsLinkedin } from "react-icons/bs"
import { FaFacebookSquare } from "react-icons/fa"
import { SiHackerrank } from "react-icons/si"
import { SiGmail } from "react-icons/si"
import "./contact.module.css"
import classes from "./contact.module.css";

function Contact(props) {
    return (
        <div className={classes["contact-content"]}>
            <h5 className={classes.header}>Shweta Rajesh Pandey</h5>
            <div className={classes["contact-icon-panel"]}>
                    <a className={classes['icon-style']} href="https://www.linkedin.com/in/prasad-dhekale-4116a916b/"><BsLinkedin></BsLinkedin></a>
                    <a className={classes['icon-style']} href="mailto:shwetapandey3333@gmail.com"><SiGmail/></a>
                    <a className={classes['icon-style']} href="mailto:shwetapandey3333@gmail.com"><FaFacebookSquare/></a>
            </div>
            <div className={classes["contact-description"]}>                   
                <p>Contact Number : 8446913665</p>
                <p>Shivaji nagar district court pune</p> 
                <p>@2022 All rights reserved</p>      
            </div>
            
        </div>
    )
}

export default Contact;