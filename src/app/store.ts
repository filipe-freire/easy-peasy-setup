import { Action, action, createStore } from "easy-peasy";

interface Counter {
  value: number;
  incrementCounter: Action<Counter, number>;
  decrementCounter: Action<Counter, number>;
}

export interface StoreModel {
  counter: Counter;
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
});
