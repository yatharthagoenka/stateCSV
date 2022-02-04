import React,{useEffect,useContext} from 'react'
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Header() {
    const [userContext, setUserContext] = useContext(UserContext)
    
    function removeJWToken(){
        localStorage.removeItem("scsvJWT")
        setUserContext(oldValues => {
            return { ...oldValues, token: null }
          })
    }
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">stateCSV</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="https://github.com/yatharthagoenka">yatharthaGoenka</Nav.Link>
                </Nav>
                <Nav>
                        
                    <Nav.Link><Link to="/" style={{ textDecoration: 'none', color:'#c9c9c9'}}>Home</Link></Nav.Link>
                    <Nav.Link><Link to="/add" style={{ textDecoration: 'none' , color:'#c9c9c9'}}>Add State</Link></Nav.Link>
                    <Nav.Link onClick={removeJWToken} style={{color:'#c9c9c9'}}>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
        )
    

    
}