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
import data from "../data/data.json"

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

  const workHours = data.find(item => item.title === 'Work')
  const playHours = data.find(item => item.title === 'Play')
  const studyHours = data.find(item => item.title === 'Study')
  const exerciseHours = data.find(item => item.title === 'Exercise')
  const socialHours = data.find(item => item.title === 'Social')
  const selfCarelHours = data.find(item => item.title === 'Self Care')
  
  return (
    <>
      <Wrapper>
        <Card
          bgcolor="var(--work)"
          title="Work"
          hours={`${workHours.timeframes.weekly.current} hrs`}
          last={`Last Week - ${workHours.timeframes.weekly.previous} hrs`}
          icon={workicon}
        >
          
        </Card>
        <Card
          bgcolor="var(--play)"
          title="Play"
          hours={`${playHours.timeframes.weekly.current} hrs`}
          last={`Last Week - ${workHours.timeframes.weekly.previous} hrs`}
          icon={playicon}
        ></Card>
        <Card
          bgcolor="var(--study)"
          title="Study"
          hours={`${studyHours.timeframes.weekly.current} hrs`}
          last={`Last Week - ${studyHours.timeframes.weekly.previous} hrs`}
          icon={studyicon}
        ></Card>
        <Card
          bgcolor="var(--excercise)"
          title="Excercise"
          hours={`${exerciseHours.timeframes.weekly.current} hrs`}
          last={`Last Week - ${exerciseHours.timeframes.weekly.previous} hrs`}
          icon={excerciseicon}
        ></Card>
        <Card
          bgcolor="var(--social)"
          title="Social"
          hours={`${socialHours.timeframes.weekly.current} hrs`}
          last={`Last Week - ${socialHours.timeframes.weekly.previous} hrs`}
          icon={socialicon}
        ></Card>
        <Card
          bgcolor="var(--self-care)"
          title="Self Care"
          hours={`${selfCarelHours.timeframes.weekly.current} hrs`}
          last={`Last Week - ${selfCarelHours.timeframes.weekly.previous} hrs`}
          icon={selfcareicon}
        ></Card>
      </Wrapper>
    </>
  );
}
