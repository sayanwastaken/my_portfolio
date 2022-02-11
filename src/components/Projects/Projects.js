import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import groww_png from "../../Assets/Projects/groww_ss.png";
import snap_png from "../../Assets/Projects/snapdeal_ss.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={groww_png}
              isBlog={false}
              title="Inspired From Groww Website"
              description="
              Groww is an online investment platform that allows investors to invest in mutual funds and stocks.[2] Headquartered in Bangalore, Karnataka, the company has raised over $140 million as of April 2021, at a valuation of $1 billion.|===>
              
              Features:
              Minimalist design
              Dynamic graphs
              User Authentication using OTP
              Dark mode implementation
              User portfolio based selections "
              link="https://github.com/sayanwastaken/groww_clone_MongoDb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snap_png}
              isBlog={false }
              title="Inspired From Snapdeal Website"
              description="Snapdeal is an Indian e-commerce company, based in New Delhi, India. The company was founded in February 2010 by Kunal Bahl and Rohit Bansal, alumni of The Wharton School and Indian Institute of Technology Delhi respectively.
              |===> 
              Features:
              1st Project
              End to End eCommerce Flow
              Dynamic Cart 
              Product carousel
              "
              link="https://github.com/sayanwastaken/Snapdeal-Clone_Team36"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
