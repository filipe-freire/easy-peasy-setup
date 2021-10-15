import { Action, action, createStore } from "easy-peasy";

interface Todo {
  id: string;
  body: string;
}

interface Todos {
  allTodos: Todo[];
  add: Action<Todos, Todo>;
}

interface StoreModel {
  todos: Todos;
}

const store: StoreModel = {
  todos: {
    allTodos: [],
    add: action((state, payload) => {
      state.allTodos.push(payload);
    }),
  },
};

test("add todo action", async () => {
  // arrange
  const todo: Todo = { id: "asdbqwe", body: "I'm a todo" };
  const todoStore = createStore(store);

  // act
  todoStore.getActions().todos.add(todo);

  // assert
  expect(todoStore.getState().todos.allTodos).toEqual([{ ...todo }]);
});
