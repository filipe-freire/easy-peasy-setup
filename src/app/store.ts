import { Action, action, createStore } from "easy-peasy";
import { v4 as uuidv4 } from "uuid";

interface Counter {
  value: number;
  incrementCounter: Action<Counter, number>;
  decrementCounter: Action<Counter, number>;
}

interface Todo {
  id: string;
  body: string;
}

interface TodosList {
  currentTodos: Todo[];
  addTodo: Action<TodosList, Todo>;
  removeTodo: Action<TodosList, string>;
}

export interface StoreModel {
  counter?: Counter;
  todos: TodosList;
}

export const store = createStore<StoreModel>({
  counter: {
    value: 0,
    incrementCounter: action((s, p) => {
      s.value += p;
    }),
    decrementCounter: action((s, p) => {
      s.value -= p;
    }),
  },
  todos: {
    currentTodos: [],
    addTodo: action((s, p) => {
      s.currentTodos.push(p);
    }),
    removeTodo: action((s, todoId) => {
      s.currentTodos = s.currentTodos.filter((todo) => todo.id !== todoId);
    }),
  },
});
