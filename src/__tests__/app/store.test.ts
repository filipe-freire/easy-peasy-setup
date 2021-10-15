import { Action, action, createStore } from "easy-peasy";
import { store, StoreModel } from "../../app/store";

interface Todo {
  id: string;
  body: string;
}

interface Todos {
  allTodos: Todo[];
  add: Action<Todos, Todo>;
}

// interface StoreModel {
//   todos: Todos;
// }

// const store: StoreModel = {
//   todos: {
//     currentTodos: [],
//     addTodo: action((s, p) => {
//       s.currentTodos.push(p);
//     }),
//     removeTodo: action((s, idx) => {
//       s.currentTodos.filter((todo) => todo.id !== idx);
//     }),
//   },
// };

describe("Todos feature work as intended", () => {
  test("add todo action", async () => {
    // arrange
    const todo: Todo = { id: "asdbqwe", body: "I'm a todo" };
    const todoStore = store;

    // act
    todoStore.getActions().todos.addTodo(todo);

    // assert
    expect(todoStore.getState().todos.currentTodos).toEqual([{ ...todo }]);
  });

  test("remove todo action", async () => {
    // arrange
    const todo: Todo = { id: "asdbqwe", body: "I'm a todo" };
    const todoStore = store;

    // act
    todoStore.getActions().todos.addTodo(todo);

    todoStore.getActions().todos.removeTodo(todo.id);

    console.log(todoStore.getState().todos.currentTodos);
    // assert
    expect(todoStore.getState().todos.currentTodos).toEqual([]);
  });
});
