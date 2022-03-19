import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import classes from "./CustomNav.module.css"


const CustomNavbar = (props) => {

    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link className={classes["header-nav-link"]} href="#features">Home</Nav.Link>
                        <Nav.Link className={classes["other-header-links"]} href="#pricing">About</Nav.Link>
                        <Nav.Link className={classes["other-header-links"]} href="#features">Practice Areas</Nav.Link>
                        <Nav.Link className={classes["other-header-links"]} href="#pricing">Consultation</Nav.Link>
                        <Nav.Link className={classes["other-header-links"]} href="#pricing">Contact</Nav.Link>
                        <button className={classes["header-button"]}>Appointment</button>
                    </Nav>                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default CustomNavbar