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
                        <Navbar.Brand className="menu-title" >Language Center</Navbar.Brand>
                        <Nav className="ms-auto pt-2">
                            <Link className="item" to="/home">Home</Link>
                            <Link className="item" to="/services">Services</Link>
                            <Link className="item" to="/languagecorner">Language Corner</Link>
                            <Link className="item" to="/about">About</Link>
                        </Nav>
                    </Container>
                </Navbar>

            </>
        </div>
    );
};

export default Header;