import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: var(--nav);
  width: 80%;
  height: 20rem;
  border-radius: 1rem;
`;

const UserBg = styled.section`
  background-color: var(--highlight);
  height: 10rem;
  width: 100%;
  border-radius: 1rem;
`;

export default function userNav() {
  return (
    <>
      <Wrapper>
        <UserBg />
      </Wrapper>
    </>
  );
}
