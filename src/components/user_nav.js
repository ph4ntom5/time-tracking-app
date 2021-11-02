import React from "react";
import styled from "styled-components";
import UserImage from "../images/image-jeremy.png";

const Wrapper = styled.section`
  margin-top: 10rem;
  background-color: var(--nav);
  width: 80%;
  height: 18rem;
  border-radius: 1rem;
`;

const WrapperText = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1.5rem;

  p {
    font-size: 1.6rem;
    opacity: 0.5;
    color: var(--highlight);
    padding: 0 2rem;
    cursor: pointer;

    &:active {
      color: white;
      opacity: 0.9;
    }
  }
`;

const UserBg = styled.section`
  background-color: var(--highlight);
  height: 10rem;
  width: 100%;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const UserInfo = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0;
  h5 {
    color: white;
    font-size: 1.6rem;
    opacity: 0.5;
    text-align: left;
    margin-left: 1rem;
    font-weight: 400;
  }
  p {
    color: white;
    font-size: 2.4rem;
    margin-top: -2.5rem;
    margin-left: 1rem;
    opacity: 0.8;
  }
`;

const UserPhoto = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  margin: 0.5rem;
  border: 2px solid #ffffff;
  border-radius: 100rem;
`;

export default function userNav() {
  return (
    <>
      <Wrapper>
        <UserBg>
          <UserPhoto src={UserImage} />
          <UserInfo>
            <h5>Report for</h5>
            <p>Jeremy Robson</p>
          </UserInfo>
        </UserBg>
        <WrapperText>
          <p>Daily</p>
          <p>Weekly</p>
          <p>Monthly</p>
        </WrapperText>
      </Wrapper>
    </>
  );
}
