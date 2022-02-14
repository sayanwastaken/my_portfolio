import React from "react";
import { HeaderContent, H1, P, A, HeaderButtons } from "./Styles";
import { Container } from "../../SharedStyles/SharedStyles";
import { Link } from "react-scroll";
import "./typing.css";

const Banner = () => {
  return (
    <Container className="home">
      <HeaderContent>
        <div>
          <br />
          <H1>Hi 👋 I'm </H1>
          <span>
            <h2 data-text="Sayan Das">Sayan Das</h2>
          </span>
          <br />
          <P>
            A Skilled And Passionate Full Stack Developer From India.
            <br />
            Checkout the thing I built 👇
          </P>
          <HeaderButtons>
            <A
              target="_blank"
              rel="noreferrer"
              href="/resume/Sayan_Das.pdf"
            >
              Resume
            </A>
            &nbsp;&nbsp;&nbsp;
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={300}
            >
              <A>Projects</A>
            </Link>
          </HeaderButtons>
        </div>
        <br />
      </HeaderContent>
    </Container>
  );
};

export default Banner;
