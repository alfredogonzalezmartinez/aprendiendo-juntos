import reactLogo from "./assets/react.svg";
import Counter from "./components/Counter";
import "./styles/App.css";
import { getRandomNumber } from "./utils/getRandomNumber";

function App() {
  const randomNumber = getRandomNumber(1000, 9999);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>Random number: {randomNumber}</p>
        <Counter initialValue={50} step={5} min={0} max={100} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
