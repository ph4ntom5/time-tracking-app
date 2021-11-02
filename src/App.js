import "./App.css";
import styled from "styled-components";
import { GlobalStyles } from "./styles/global";
import UserNav from "./components/user_nav";
import CardContainer from "./components/cardcontainer";

const Wrapper = styled.section`
  background-color: var(--bg);
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
