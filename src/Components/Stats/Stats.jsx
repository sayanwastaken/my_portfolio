import React from "react";
import {
  StatsContCont,
  StatsCont,
  StatsContDiv,
  StatsContH1,
  StatsContH3,
  LastStat,
} from "./Styles";
import { Container } from "../../SharedStyles/SharedStyles";
const Stats = () => {
  return (
    <Container>
      <StatsContCont>
      </StatsContCont>
      <br />
      <div style={{
        textAlign: 'center',
        fontSize:"1.5rem"
      }}>
      <p >Days I Code 👇</p>
      </div>
      <br />
      <br />
      <br />
      <img
        src="https://ghchart.rshah.org/021F34/sayanwastaken"
        alt="fdsdf"
        style={{ width: "80%", display: "block", margin: "auto" }}
      />
    </Container>
  );
};
export default Stats;
