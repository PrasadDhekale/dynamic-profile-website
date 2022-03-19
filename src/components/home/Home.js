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
                <span className={classes.description} style={{color:"rgb(209, 158, 17)"}}>ADVOCATE</span> 
                <p>Shweta Rajesh Pandey</p>
            </div>
            
        </div>    
    )

}

export default Home;