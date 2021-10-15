import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useStoreState, useStoreActions } from "./app/hooks";

function App() {
  const [count, setCount] = useState(0);

  //? EASY-PEASY SECTION

  const counter = useStoreState((s) => s.counter.value);

  const incrementCounter = useStoreActions((a) => a.counter.incrementCounter);

  const decrementCounter = useStoreActions((a) => a.counter.decrementCounter);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <h2>Easy-Peasy Counter</h2>
        <p>Counter: {counter} </p>
        <button onClick={() => incrementCounter(3)}>+ 3</button>
        <button onClick={() => decrementCounter(3)}>- 3</button>
      </header>
    </div>
  );
}

export default App;
