import React from "react";
import styled from "styled-components";
import { ReactComponent as Icon } from "../images/icon-ellipsis.svg";
import { device } from "../styles/breakpoints.js";
import work from "../images/icon-work.svg";
import play from "../images/icon-play.svg";
import study from "../images/icon-study.svg";
import exercise from "../images/icon-exercise.svg";
import social from "../images/icon-social.svg";
import selfCare from "../images/icon-self-care.svg";

const Wrapper = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;

  @media ${device.laptop} {
    margin-top: 1.5rem;
  }
`;

const Container = styled.section`
  border-radius: 1.5rem;
  background-color: var(--nav);
  width: 32rem;
  height: 12rem;
  z-index: 52;
  position: relative;
  margin-top: -5.5rem;
  transition: all 0.6s ease;

  @media ${device.laptop} {
    height: 19rem;
    width: 24rem;
  }
  &:hover {
    background-color: #303473;
    cursor: pointer;
  }
`;

const IconWrapper = styled.section`
  background-color: ${(props) => props.color};
  overflow: hidden;
  margin-top: 2.5rem;
  z-index: 1;
  width: 60%;
  height: 9rem;
  border-radius: 1.5rem;
  position: relative;
  width: 100%;
`;

const TitleContainer = styled.section`
  display: flex;
  flex-direction: reverse-column;
  justify-content: space-between;
  padding: 0 4rem;
  margin-top: 3rem;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 1.6rem;
  color: white;
`;

const HoursContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding: 0 4rem;
  justify-content: space-between;
  margin-top: 1rem;

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
  }
`;

const Hours = styled.span`
  font-size: 2.8rem;
  font-weight: 300;
  color: white;
  opacity: 0.9;
  @media ${device.laptop} {
    font-size: 5.6rem;
  }
`;

const Last = styled.span`
  font-size: 1.2rem;
  margin-top: 1rem;
  color: #b6b9ee;
  opacity: 0.9;
  @media ${device.laptop} {
    color: #b6b9ee;
    font-weight: 400;
    font-size: 1.4rem;
  }
`;

export default function Card(props) {
  const icons = [work, play, study, exercise, social, selfCare];
  const IconColors = {
    work: "hsl(15, 100%, 70%)",
    play: "hsl(195, 78%, 65%)",
    study: "hsl(348, 100%, 68%)",
    excercise: "hsl(145, 58%, 55%)",
    social: "hsl(264, 64%, 52%)",
    selfcare: "hsl(43, 84%, 65%)",
  };

  const colors = [
    IconColors.work,
    IconColors.play,
    IconColors.study,
    IconColors.excercise,
    IconColors.social,
    IconColors.selfcare,
  ];
  const convertPeriod =
    props.period === "Daily"
      ? "Yesterday"
      : props.period === "Weekly"
      ? "Last week"
      : "Last month";
  return (
    <>
      <Wrapper>
        <IconWrapper color={colors[props.id]}>
          <img
            src={icons[props.id]}
            alt="Card Icon"
            style={{
              overflow: "hidden",
              top: "-1rem",
              right: "10px",
              position: "absolute",
            }}
          />
        </IconWrapper>
        <Container>
          <TitleContainer>
            <Title>{props.title}</Title>
            <Icon />
          </TitleContainer>
          <HoursContainer>
            <Hours>{props.current}hrs</Hours>
            <Last>
              {convertPeriod} - {props.previous} Hours
            </Last>
          </HoursContainer>
        </Container>
      </Wrapper>
    </>
  );
}
