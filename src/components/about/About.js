import { render } from "@testing-library/react";
import React from "react"
import classes from "./About.module.css"
import library from "./../../images/law-books_1.jpg"
import content from "./../../Content/Content"
import AboutQuote from "./AboutQuote"



const About = (props) => {

    return(
        <div className={classes.about}>
             <h1>ABOUT</h1>
             {content.about["about-quote"].isEnabled ? <h3><AboutQuote text={content.about["about-quote"].text}/></h3> : ""}
             <p className={classes["about-content"]}>{content.about["about-descriptors"][0].text}</p>
             
        </div>
    )
}

export default About;