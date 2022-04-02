import React from "react"
import CustomNavbar from "./CustomNavBar"
import classes from "./Home.module.css"
import library from "./../../images/law.jpg"

const Home = (props) => {

    return (
        <div className={classes.home}>
            <CustomNavbar/>
            <img src={library} className={classes["dash-img"]}></img>
            <div className={classes["quote"]}>
                <h2>Legal Arguments, Consultations and Advisories  </h2>
                <p className={classes.description}>Get the best legal solutions from one of the best lawyers in the field with multiple years of professional experience.</p>
                <p className={classes.description}>Accused of a crime, having trouble with your childs custody or want some professional advice on any matter ?  </p>
                <p className={classes.description}>We are here for you !</p>
                
                {/* <p className={classes["description-header"]} style={{color:"rgb(209, 158, 17)"}}>ADVOCATE</p>  */}
                <p className={classes.description2} style={{color:"rgb(209, 158, 17)"}}>Shweta Pandey and Associates</p>
            </div>
            
        </div>    
    )

}

export default Home;