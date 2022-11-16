import './navigation.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../assets/images/auburn-logo-white-01.png";

function Navigation() {

    // offCanvas 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const onClick = () => setShow(true);

    return (
        <section id="nav-bar">
            <img src={logo} alt="logo"/>
            <Nav id="main-nav-links">
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/auburn-rehab" className="header-nav-tab">Home</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/treatment" className="header-nav-tab">Treatment</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/mission" className="header-nav-tab">Mission</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/about" className="header-nav-tab">About</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/insurance" className="header-nav-tab">Insurance</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/contact" className="header-nav-tab">Contact</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            <Button id="hamburger-btn" className="openbtn" onClick={handleShow}>
                ☰
            </Button>


            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton />
                <Offcanvas.Body>
                    <section id="nav-tabs">
                        <ul className="tabpanel">

                            <Link to="/auburn-rehab" className="header-nav-tab">Home</Link>
                            <Link to="/treatment" className="header-nav-tab">Treatment</Link>
                            <Link to="/mission" className="header-nav-tab">Mission</Link>
                            <Link to="/about" className="header-nav-tab">About</Link>
                            <Link to="/insurance" className="header-nav-tab">Insurance</Link>
                            <Link to="/contact" className="header-nav-tab">Contact</Link>

                        </ul>
                    </section>

                </Offcanvas.Body>
            </Offcanvas >
        </section>

    )
};

export default Navigation;