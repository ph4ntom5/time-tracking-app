import React from "react";
import styled from "styled-components";
import { ReactComponent as Icon } from "../images/icon-ellipsis.svg";

const Container = styled.section`
  border-radius: 1.5rem;
  background-color: var(--nav);
  margin-top: 6rem;
  width: 80vw;
  height: 18rem;
  z-index: 52;
  transition: all 0.6s ease;
  &:hover {
    background-color: #252a68;
    cursor: pointer;
  }
`;

const IconWrapper = styled.section`
  background-color: ${(props) => props.color};
  overflow: hidden;
  margin-top: 2rem;
  z-index: 1;
  width: 80%;
  height: 9rem;
  border-radius: 1.5rem;
  position: absolute;
`;

const TitleContainer = styled.section`
  display: flex;
  flex-direction: reverse-column;
  justify-content: space-evenly;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 1.6rem;
  color: white;
`;

const HoursContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const Hours = styled.span`
  font-size: 2rem;
  color: white;
  opacity: 0.9;
`;

const Last = styled.span`
  font-size: 1.2rem;
  color: white;
  opacity: 0.9;
`;

export default function Card(props) {
  return (
    <>
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
      <IconWrapper color={props.bgcolor}>
        <props.icon
          style={{
            overflow: "hidden",
            top: "-.5rem",
            right: "10px",
            position: "absolute",
          }}
        />
      </IconWrapper>
    </>
  );
}
