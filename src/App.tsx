import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useStoreState, useStoreActions } from "./app/hooks";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [count, setCount] = useState(0);
  const [todoBodyInput, setTodoBodyInput] = useState("");

  //? EASY-PEASY SECTION

  //? Counter
  //@ts-ignore
  const counter = useStoreState((s) => s.counter.value);

  //@ts-ignore
  const incrementCounter = useStoreActions((a) => a.counter.incrementCounter);
  //@ts-ignore
  const decrementCounter = useStoreActions((a) => a.counter.decrementCounter);

  //? Todos

  const todos = useStoreState((s) => s.todos.currentTodos);

  function handleTodoInputChange() {
    if (!todoBodyInput) return;
    addTodo({ body: todoBodyInput, id: uuidv4() });
    setTodoBodyInput("");
  }

  const addTodo = useStoreActions((a) => a.todos.addTodo);
  const removeTodo = useStoreActions((a) => a.todos.removeTodo);

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
        <br />
        <br />
        <h2>Easy-Peasy Todo's</h2>
        <label>
          Todo:
          <input
            type="text"
            value={todoBodyInput}
            onChange={(e) => setTodoBodyInput(e.target.value)}
          />
          <button onClick={() => handleTodoInputChange()}>Submit Todo</button>
        </label>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.body}
              <span
                style={{
                  color: "red",
                  fontWeight: "bold",
                  marginLeft: "1em",
                  padding: ".5rem .7rem",
                }}
                onClick={() => removeTodo(todo.id)}
              >
                ❌
              </span>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
