import React from "react";
import { FaGithub, FaLink, FaNodeJs } from "react-icons/fa";
import {
  ProjectDiv,
  Row,
  ServiceBox,
  ServiceBoxHeader,
  ServiceBoxP,
  A,
  BoxDiv,
} from "./Styles";
import { Container, Common, H1 } from "../../SharedStyles/SharedStyles";
import { FaHtml5, FaReact, FaJs, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiRedux } from "react-icons/si";
const Projects = () => {
  const projects = [
    {
      id: 1,
      project_name: "Inspired From Groww Website",
      image: "/project_images/groww_ss.PNG",
      project_desc:
        "An online stocks trading web app. Built using JS, Express js, Node js and MongoDB.",
      deploy_link: "https://groww-clone-u3.netlify.app/",
      repo_link: "https://github.com/sayanwastaken/groww_clone_MongoDb",
      tech_stack: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
        <FaNodeJs />,
        <SiMongodb />,
        <FaNodeJs />,
      ],
    },
    {
      id: 2,
      project_name: "Inspired From SnapDeal Website",
      image: "/project_images/snapdeal_ss.PNG",
      project_desc:
        "SnapDeal is an Indian eCommerce lifestyle products-marketplace. Built using HTML, CSS and JS. ",
      deploy_link: "https://snapdeal-clone-u2.netlify.app/",
      repo_link: "https://github.com/sayanwastaken/Snapdeal-Clone_Team36",
      tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />],
    },
  ];

  return (
    <Container className="projects">
      <ProjectDiv>
        <Common>
          <H1>Projects</H1>
        </Common>
        <Row>
          {projects.map((item) => (
            <BoxDiv key={item.id}>
              <ServiceBox>
                <img src={item.image} alt="icon" style={{ width: "100%" }} />
                <div style={{ margin: "15px" }}>
                  <ServiceBoxHeader style={{ textAlign: "center" }}>
                    {item.project_name}
                  </ServiceBoxHeader>
                  <ServiceBoxP>{item.project_desc}</ServiceBoxP>
                  {/* <a href="">Read more</a> */}
                  <div
                    style={{
                      margin: "15px 20px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item.tech_stack.map((item) => (
                      <div className="iconsTechStack">{item}</div>
                    ))}
                  </div>
                  <A
                    href={item.repo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </A>
                  <A
                    href={item.deploy_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink /> Demo
                  </A>
                </div>
              </ServiceBox>
            </BoxDiv>
          ))}
        </Row>
      </ProjectDiv>
    </Container>
  );
};

export default Projects;
