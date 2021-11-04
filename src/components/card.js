import React from "react";
import styled from "styled-components";
import { ReactComponent as Icon } from "../images/icon-ellipsis.svg";
import { device } from "../styles/breakpoints.js";

const Container = styled.section`
  border-radius: 1.5rem;
  background-color: var(--nav);
  width: 32rem;
  height: 12rem;
  z-index: 52;
  position: relative;
  margin-top: -5.5rem;
  transition: all 0.6s ease;
  &:hover {
    background-color: #252a68;
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
`;

const Hours = styled.span`
  font-size: 2.8rem;
  font-weight: 300;

  color: white;
  opacity: 0.9;
`;

const Last = styled.span`
  font-size: 1.2rem;
  margin-top: 1rem;
  color: white;
  opacity: 0.9;
`;

export default function Card(props) {
  return (
    <>
      <IconWrapper color={props.bgcolor}>
        <props.icon
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
          <Hours>{props.hours}</Hours>
          <Last>{props.last}</Last>
        </HoursContainer>
      </Container>
    </>
  );
}
