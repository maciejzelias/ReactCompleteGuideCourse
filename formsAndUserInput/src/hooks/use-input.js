import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return initialInputState;
  }
  return initialInputState;
};

const useInput = (validateFn) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateFn(inputState.value);
  const valueHasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
    });
  };
  const valueBlurHandler = (event) => {
    dispatch({
      type: "BLUR",
    });
  };

  const resetValue = () => {
    dispatch({
      type: "RESET",
    });
  };

  return {
    enteredValue: inputState.value,
    isValid: valueIsValid,
    hasError: valueHasError,
    valueChangeHandler,
    valueBlurHandler,
    resetValue,
  };
};

export default useInput;
