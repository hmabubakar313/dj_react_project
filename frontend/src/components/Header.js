import React from 'react'
import Container from 'react-bootstrap/Container';
import  NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import {useDipatch, useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';



function Header() {
    
    const navigate = useNavigate()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const logoutHandler = () => {
        console.log('logout');
        navigate('/')
        
        
        
    }

    return (
        <header>

            <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand >ProShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                        <Nav className="me-auto">
                            <LinkContainer to="/cart">
                            <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                            </LinkContainer>
                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id="username">
                                <LinkContainer to="/profile">
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>    
                            
                        ) : (
                            <LinkContainer to="/login">
                            <Nav.Link ><i className="fas fa-user"></i>Sign In</Nav.Link>
                            </LinkContainer>
                        )}


                           

                        </Nav>
                </Container>
            </Navbar>


        </header>
    )

}

export default Header