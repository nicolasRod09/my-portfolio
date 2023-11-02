import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import onlineStore from "../assets/img/online-store.png"
import virtualWallet from "../assets/img/VirtualWallet.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import underConstruction from "../assets/img/under-construction.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const links = [
    "https://online-store-nicolasrod09.vercel.app/",
    "https://virtual-wallet-nicolasrod09.vercel.app/",
  ]

  const projects = [
    {
      title: "Online Store",
      description: "A shopping website, without a database persistence, for an online store, with features such as searching for items and categories through an API.",
      imgUrl: onlineStore,
      link:links[0],
    },
    {
      title: "VirtualWallet",
      description: "A website that provides an easy-to-use interface for an expense tracking wallet with a currency converter.",
      imgUrl: virtualWallet,
      link: links[1],
    },
    {
      title: "Coming soon",
      description: "",
      imgUrl: underConstruction,
      link: "#"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                  Within lines of code, I've discovered my passion for
                  bringing ideas to life and building captivating digital
                  experiences. Throughout my front-end development journey,
                  I've had the privilege of working on diverse projects that
                  challenge and inspire my creativity. Each project represents
                  a unique opportunity to create innovative and functional
                  solutions where design meets technology. Below, I invite you
                  to explore some of my front-end projects that showcase my
                  dedication to excellence and my commitment to delivering
                  value to end users.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <a key={index} href={project.link} style={{color: 'white'}} target="_blank" rel="noopener noreferrer">
                                <ProjectCard
                                  {...project}
                                />
                              </a>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* For future projects */}
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
