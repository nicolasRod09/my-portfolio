import React, { useEffect } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateLink = (value) => {
    setActiveLink(value)
  }

  return (
    <div>
      <Navbar expand="lg" className={scroll ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#Home">
            <h1 style={{color: 'white', fontSize:'60px'}}>nr</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-togler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateLink('home')}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="http://www.linkedin.com/in/nícolas-s-rodrigues-dev"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/nicolasRod09"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/nick.srod872/"><img src={navIcon3} alt="" /></a>
              </div>
              <a href="#connect">
                <button
                  className="vvd"
                  onClick={() => console.log('connect')}
                  >
                  <span>Let's Connect</span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  );
} 
