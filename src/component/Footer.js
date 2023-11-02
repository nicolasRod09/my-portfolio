import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 style={{fontSize: '60px'}}>nr</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="http://www.linkedin.com/in/nícolas-s-rodrigues-dev">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/nicolasRod09"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/nick.srod872/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved by Nicolas S. Rodrigues</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
