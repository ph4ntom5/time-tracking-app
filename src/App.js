import "./App.css";
import styled from "styled-components";
import { GlobalStyles } from "./styles/global";
import UserNav from "./components/user_nav";
import CardContainer from "./components/cardcontainer";
import { device } from "./styles/breakpoints.js";

const Wrapper = styled.section`
  background-color: var(--bg);
  display: flex;
  justify-content: center;
  align-items: center;
  header {
    @media ${device.laptop} {
      display: flex;
      flex-direction: row;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <UserNav />
          <CardContainer />
        </header>
      </div>
    </Wrapper>
  );
}

export default App;
