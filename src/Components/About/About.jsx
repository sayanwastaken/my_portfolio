import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
  AboutDiv,
  Column,
  Img,
  AboutInfo,
  AboutInfoP,
  HeaderUl,
  HeaderLi,
  JelloHori,
} from "./Styles";

import { Container, H1 } from "../../SharedStyles/SharedStyles";
const socialMediaLinks = [
  {
    id: 0,
    link: "https://www.linkedin.com/in/sayanwastaken",
    icon: <FaLinkedin />,
  },
  {
    id: 1,
    link: "https://github.com/sayanwastaken",
    icon: <FaGithub />,
  },
];
const About = () => {
  return (
    <Container className="about">
      <br />
      <AboutDiv>
        <Column>
          <Img src="/images/myImg.jpg" alt="my image" />
        </Column>
        <Column>
          <H1>About Me</H1>
          <AboutInfo>
            <AboutInfoP>
            A graduate in accounting & finance, I am a full stack web developer by skill and passion.
            I believe I'm good at design and integration and have intuitive problem-solving skills. I'm also proficient in MERN stack. I also enjoy playing guitar and watching stand-up comedy.
            </AboutInfoP>
            </AboutInfo>
          <HeaderUl>
            {socialMediaLinks.map((item) => (
              <JelloHori key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <HeaderLi>{item.icon}</HeaderLi>
                </a>
              </JelloHori>
            ))}
          </HeaderUl>
        </Column>
      </AboutDiv>
      <br />
    </Container>
  );
};

export default About;
