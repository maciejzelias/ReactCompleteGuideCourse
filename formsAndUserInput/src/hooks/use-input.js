import { useState } from "react";

const useInput = (validateFn) => {
  const [enteredValue, setEneteredValue] = useState("");
  const [valueIsTouched, setValueIsTouched] = useState(false);

  const valueIsValid = validateFn(enteredValue);
  const valueHasError = !valueIsValid && valueIsTouched;

  const valueChangeHandler = (event) => {
    setEneteredValue(event.target.value);
  };
  const valueBlurHandler = (event) => {
    setValueIsTouched(true);
  };

  const resetValue = () => {
    setEneteredValue("");
    setValueIsTouched(false);
  };

  return {
      enteredValue,
      isValid : valueIsValid,
      hasError: valueHasError,
      valueChangeHandler,
      valueBlurHandler,
      resetValue,
  }
};

export default useInput;
