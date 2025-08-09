import React from 'react'
import { Navbar, Container, FormControl, Nav, Col } from 'react-bootstrap'
import logo from '../../images/logo.jpeg'
import login from '../../images/login.png'
import cart from '../../images/cart.png'
const NavBarLogin = () => {
    return (
        <Navbar className="sticky-top justify-content-between" bg="white"  expand="sm">
            <Container>
                
                <Col sm="10">
                <Navbar.Brand>
                    <a href='/'>
                        <img src={logo} className='logo' />
                        
                    </a>
                </Navbar.Brand>
                </Col>
              
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Col >
                <Nav className="me-auto">
                        <Nav.Link href='/login'
                            className="nav-text d-flex  ">
                        
                       <button class="button-24" role="button">Log In</button>


                           
                        </Nav.Link>
                        <Nav.Link href='/register'
                            className="nav-text d-flex  "
                            style={{ color: "white" }}>
                           <button class="button-25" role="button">Sign In</button>

                        </Nav.Link>
                    </Nav>
                </Col>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarLogin
