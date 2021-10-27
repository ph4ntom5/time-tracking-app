import "./App.css";
import styled from "styled-components";
import { GlobalStyles } from "./styles/global";

const Wrapper = styled.section`
  background-color: var(--bg);
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Wrapper>
  );
}

export default App;
