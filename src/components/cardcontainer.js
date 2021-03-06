import React from "react";
import styled from "styled-components";
import Card from "../components/card";
import { ReactComponent as workicon } from "../images/icon-work.svg";
import { ReactComponent as playicon } from "../images/icon-play.svg";
import { ReactComponent as studyicon } from "../images/icon-study.svg";
import { ReactComponent as excerciseicon } from "../images/icon-exercise.svg";
import { ReactComponent as socialicon } from "../images/icon-social.svg";
import { ReactComponent as selfcareicon } from "../images/icon-self-care.svg";
import { device } from "../styles/breakpoints.js";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 3rem;

  @media ${device.tablet} {
    gap: 1rem 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 0 3rem;
  }

  @media ${device.laptop} {
    gap: 1rem 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 0 3rem;
  }
`;
export default function CardContainer() {
  return (
    <>
      <Wrapper>
        <Card
          bgcolor="var(--work)"
          title="Work"
          hours="32hrs"
          last="Last Week - 36hrs"
          icon={workicon}
        ></Card>
        <Card
          bgcolor="var(--play)"
          title="Play"
          hours="10hrs"
          last="Last Week - 8hrs"
          icon={playicon}
        ></Card>
        <Card
          bgcolor="var(--study)"
          title="Study"
          hours="4hrs"
          last="Last Week - 7hrs"
          icon={studyicon}
        ></Card>
        <Card
          bgcolor="var(--excercise)"
          title="Excercise"
          hours="4hrs"
          last="Last Week - 5hrs"
          icon={excerciseicon}
        ></Card>
        <Card
          bgcolor="var(--social)"
          title="Social"
          hours="5hrs"
          last="Last Week - 10hrs"
          icon={socialicon}
        ></Card>
        <Card
          bgcolor="var(--self-care)"
          title="Self Care"
          hours="2hrs"
          last="Last Week - 2hrs"
          icon={selfcareicon}
        ></Card>
      </Wrapper>
    </>
  );
}
