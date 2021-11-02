import React from "react";
import styled from "styled-components";
import Card from "../components/card";
import { ReactComponent as workicon } from "../images/icon-work.svg";

const Wrapper = styled.section`
  display: flex;
  max-width: 1000px;
  align-items: center;
  flex-direction: column;
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
      </Wrapper>
    </>
  );
}
