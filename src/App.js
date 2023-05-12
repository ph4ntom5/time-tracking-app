import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { GlobalStyles } from "./styles/global";
import UserProfile from "./components/user_nav";
import Card from "./components/card";
import { device } from "./styles/breakpoints.js";
import data from "./data/data.json";

const Wrapper = styled.section`
  background-color: var(--bg);
  header {
    @media ${device.tablet} {
      margin: 0 auto;
      width: 85%;
    }
    @media ${device.laptop} {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }
  }
`;
const CardWrapper = styled.section`
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export default function App() {
  const [period, setPeriod] = useState("Weekly");
  const handleClick = (e) => {
    setPeriod(e.target.innerText);
  };
  return (
    <Wrapper>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <UserProfile handleClick={handleClick} period={period} />
          <CardWrapper>
            {data.map((item, index) => {
              return (
                <Card
                  bgcolor={GlobalStyles}
                  key={index}
                  id={index}
                  title={item.title}
                  current={item["timeframes"][period.toLowerCase()]["current"]}
                  previous={
                    item["timeframes"][period.toLowerCase()]["previous"]
                  }
                  period={period}
                />
              );
            })}
          </CardWrapper>
        </header>
      </div>
    </Wrapper>
  );
}
