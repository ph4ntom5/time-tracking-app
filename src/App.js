import "./App.css";
import styled from "styled-components";
import { GlobalStyles } from "./styles/global";
import UserNav from "./components/user_nav";

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
        </header>
      </div>
    </Wrapper>
  );
}

export default App;
