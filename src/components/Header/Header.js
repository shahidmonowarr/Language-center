import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        {/* navigation title  */}
                        <Navbar.Brand className="menu-title" >Language Center</Navbar.Brand>

                        {/* navigation items */}
                        <Nav className="ms-auto pt-2">
                            <Link className="item" to="/home">Home</Link>
                            <Link className="item" to="/services">Services</Link>
                            <Link className="item" to="/languagecorner">Language Corner</Link>
                            <Link className="item" to="/about">About Us</Link>
                        </Nav>
                    </Container>
                </Navbar>

            </>
        </div>
    );
};

export default Header;