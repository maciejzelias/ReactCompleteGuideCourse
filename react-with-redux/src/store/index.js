import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, visible: true },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.visible = !state.visible;
    },
  },
});

// const counterReducer = (state = { counter: 0, visible: true }, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       visible: state.visible,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       visible: state.visible,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       visible: state.visible,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       visible: !state.visible,
//     };
//   }
//   return state;
// };

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
