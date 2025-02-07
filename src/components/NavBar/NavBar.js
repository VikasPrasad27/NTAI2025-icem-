import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import '../../App.css';
import icemlogo from "../../assets/images/Committee/ICEM-Logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [activeKey, setActiveKey] = useState('/');
    const [expanded, setExpanded] = useState(false);
    const location = useLocation();

    const isAboutPage = location.pathname === '/about';

    const handleLinkClick = () => {
        setExpanded(false);
    };

    const navLinkStyle = {
        color: 'white !important'
    };

    return (
        <Navbar 
            expand="lg" 
            style={{ 
                zIndex: 9999, 
                position: 'sticky', 
                top: 0,
                background: 'linear-gradient(135deg, #1a1f2e 0%, #2d364d 100%)',
                color: 'white',
            }}
            className="shadow-sm navbar-dark "
            expanded={expanded}
        >
            <Container >
                <Navbar.Brand href="#">
                    <img 
                        src={icemlogo} 
                        width="200" 
                        height="200" 
                        className="d-inline-block align-top" 
                        alt="ICEM Logo"
                        style={{ maxWidth: '100%', height: 'auto', background: 'none' }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    onClick={() => setExpanded(!expanded)}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto justify-content-center w-100 fw-bold" activeKey={activeKey} onSelect={setActiveKey}>
                        <Nav.Link 
                            as={RouterLink} 
                            to="/" 
                            className="mx-3 custom-nav-link text-white" 
                            onClick={handleLinkClick}
                        >
                            Home
                        </Nav.Link>
                        <NavDropdown 
                            title={<span className="text-white">About</span>}
                            id="basic-nav-dropdown" 
                            className="mx-3 custom-nav-link text-center dropdown-center"
                            onMouseEnter={() => setOpen(true)} 
                            onMouseLeave={() => setOpen(false)} 
                            show={open}
                        >
                            <NavDropdown.Item 
                                as={isAboutPage ? ScrollLink : RouterLink} 
                                to={isAboutPage ? "ICLVE-2023" : "/about#ICLVE-2023"} 
                                smooth={true} duration={1000} 
                                className="dropdown-item"
                                onClick={handleLinkClick}
                            >
                                About the Host Intitute
                            </NavDropdown.Item>
                            <NavDropdown.Item 
                                as={isAboutPage ? ScrollLink : RouterLink} 
                                to={isAboutPage ? "ICLVE-2023" : "/about#ICLVE-2023"} 
                                smooth={true} duration={1000} 
                                className="dropdown-item"
                                onClick={handleLinkClick}
                            >
                                About the Conference
                            </NavDropdown.Item>
                            <NavDropdown.Item 
                                as={isAboutPage ? ScrollLink : RouterLink} 
                                to={isAboutPage ? "key-note-speaker" : "/about#key-note-speaker"} 
                                smooth={true} duration={1000} 
                                className="dropdown-item"
                                onClick={handleLinkClick}
                            >
                                Keynote Speakers
                            </NavDropdown.Item>
                            <NavDropdown.Item 
                                as={isAboutPage ? ScrollLink : RouterLink} 
                                to={isAboutPage ? "key-note-speaker" : "/about#key-note-speaker"} 
                                smooth={true} duration={1000} 
                                className="dropdown-item"
                                onClick={handleLinkClick}
                            >
                                Patrons
                            </NavDropdown.Item>
                            <NavDropdown.Item 
                                as={isAboutPage ? ScrollLink : RouterLink} 
                                to={isAboutPage ? "committee" : "/about#committee"} 
                                smooth={true} duration={1000} 
                                className="dropdown-item"
                                onClick={handleLinkClick}
                            >
                                Advisory Committee
                            </NavDropdown.Item>
                            <NavDropdown.Item 
                                as={isAboutPage ? ScrollLink : RouterLink} 
                                to={isAboutPage ? "committee" : "/about#committee"} 
                                smooth={true} duration={1000} 
                                className="dropdown-item"
                                onClick={handleLinkClick}
                            >
                                Organising Committee
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link 
                            as={RouterLink} 
                            to="/CONFERENCE_TRACKS" 
                            className="mx-3 custom-nav-link text-white" 
                            onClick={handleLinkClick}
                        >
                            Conference Tracks
                        </Nav.Link>
                        <Nav.Link 
                            as={RouterLink} 
                            to="/Objective" 
                            className="mx-3 custom-nav-link text-white" 
                            onClick={handleLinkClick}
                        >
                            Objectives
                        </Nav.Link>
                        <Nav.Link 
                            as={RouterLink} 
                            to="/registration" 
                            className="mx-3 custom-nav-link text-white" 
                            onClick={handleLinkClick}
                        >
                            Registration
                        </Nav.Link>
                        <Nav.Link 
                            as={RouterLink} 
                            to="/Publication" 
                            className="mx-3 custom-nav-link text-white" 
                            onClick={handleLinkClick}
                        >
                            Publication
                        </Nav.Link>
                        <Nav.Link 
                            as={RouterLink} 
                            to="/Submission" 
                            className="mx-3 custom-nav-link text-white" 
                            onClick={handleLinkClick}
                        >
                            Submission
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
