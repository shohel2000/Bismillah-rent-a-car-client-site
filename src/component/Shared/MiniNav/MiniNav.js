import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MiniNav = ({page}) => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Bismillah-Rent-A-Car</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#" className="me-5 text-primary">{page}</Nav.Link>
                        
                    </Nav>
                    <Link to="/login">Login</Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default MiniNav;