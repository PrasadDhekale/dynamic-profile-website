import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import classes from "./Competencies.module.css"
import content from "./../../Content/Content";
import Competency from "./Competency"
import CompetencyQuote from "./CompetencyQuote"
import {Row, Col} from "react-bootstrap"
import {RiShieldStarLine} from "react-icons/ri"

const Competencies = (props) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    let listOfCompetencyDivs = content.competencies.list.map((competency) => {
        return <Competency competency={competency} headercolor={content.siteheadercolor}></Competency>
    });
    

    return (
        <div className={classes.competencies}>
        <RiShieldStarLine className={classes.outline}/>
            <h1 className={classes.header}> {content.competencies.header}</h1>
            <div>
                {listOfCompetencyDivs}
            </div>
            
        </div>
    );
}

export default Competencies;