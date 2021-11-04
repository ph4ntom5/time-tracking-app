import React from "react";
import styled from "styled-components";
import UserImage from "../images/image-jeremy.png";
import { device } from "../styles/breakpoints.js";

const Wrapper = styled.section`
  margin-top: 10rem;
  background-color: var(--nav);
  width: 32rem;
  height: 18rem;
  border-radius: 1rem;
  @media ${device.laptop} {
    height: 48rem;
    width: 26rem;
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
  @media ${device.laptop} {
    height: 34rem;
    width: 26rem;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: left;
  }
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
    @media ${device.laptop} {
      margin-left: 3rem;
    }
  }
  p {
    color: white;
    font-size: 2.4rem;
    margin-top: -2.5rem;
    margin-left: 1rem;
    opacity: 0.8;
    @media ${device.laptop} {
      margin-top: -4.5rem;
      margin-left: 1rem;
      font-size: 3.6rem;
      padding: 2rem;
      font-weight: 400;
    }
  }
`;

const UserPhoto = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  margin: 0.5rem;
  border: 2px solid #ffffff;
  border-radius: 100rem;
  @media ${device.laptop} {
    width: 5.5rem;
    height: 5.5rem;
    margin-left: -13rem;
  }
`;

const WrapperText = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1.5rem;
  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .week {
    color: white;
    opacity: 0.8;
  }

  button {
    font-size: 1.6rem;
    background: none;
    border: none;
    opacity: 0.5;
    color: var(--highlight);
    padding: 0 2rem;
    cursor: pointer;
    text-decoration: none;
    margin-top: 1.5rem;
    transition: all 0.6s ease;
    @media ${device.laptop} {
      display: flex;
      justify-content: flex-start;
      padding-left: 3rem;
    }

    &:hover {
      color: white;
      opacity: 0.9;
      transition: all 0.6s ease;
    }
  }
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
          <button>Daily</button>
          <button className="week">Weekly</button>
          <button>Monthly</button>
        </WrapperText>
      </Wrapper>
    </>
  );
}
