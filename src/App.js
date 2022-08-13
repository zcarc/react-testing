import logo from "./logo.svg";
import "./App.css";
import { useCallback, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const onClickPlusButton = useCallback(() => {
    setCounter((count) => count + 1);
  }, []);
  const onClickMinusButton = useCallback(() => {
    setCounter((count) => count - 1);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
        <div>
          <button data-testid="plus-button" onClick={onClickPlusButton}>
            +
          </button>
          <button data-testid="minus-button" onClick={onClickMinusButton}>
            -
          </button>
        </div>
        <div>
          <button
            data-testid="on/off-button"
            style={{ backgroundColor: "blue" }}
          >
            on/off btn
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
