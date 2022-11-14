import { createStore } from "redux";

const counterReducer = (state = { counter: 0, visible: true }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      visible: state.visible,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      visible: state.visible,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      visible: state.visible,
    };
  }

  if (action.type === "toggle") {
    return {
      counter: state.counter,
      visible: !state.visible,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
