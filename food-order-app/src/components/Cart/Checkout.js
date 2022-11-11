import styles from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => {
  return value.trim() === "";
};

const isNotFiveDigits = (value) => {
  return value.trim().length !== 5;
};

const Checkout = (props) => {
  const [isValid, setIsValid] = useState({
    name: true,
    street: true,
    city: true,
    code: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = !isNotFiveDigits(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    const formIsValid =
      enteredCityIsValid &&
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      setIsValid({
        name: enteredNameIsValid,
        street: enteredStreetIsValid,
        city: enteredCityIsValid,
        code: enteredPostalCodeIsValid,
      });
      return;
    }
    props.onSubmit({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      code: enteredPostalCode,
    });
  };
  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div
        className={`${styles.control} ${isValid.name ? "" : styles.invalid}`}
      >
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" ref={nameInputRef}></input>
        {!isValid.name && <p>Please entered a valid name</p>}
      </div>
      <div
        className={`${styles.control} ${isValid.street ? "" : styles.invalid}`}
      >
        <label htmlFor="street">Street</label>
        <input id="street" type="text" ref={streetInputRef}></input>
        {!isValid.street && <p>Please entered a valid stret</p>}
      </div>
      <div
        className={`${styles.control} ${isValid.code ? "" : styles.invalid}`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input id="postal" type="text" ref={postalCodeInputRef}></input>
        {!isValid.code && <p>Please entered a valid postal code</p>}
      </div>
      <div
        className={`${styles.control} ${isValid.city ? "" : styles.invalid}`}
      >
        <label htmlFor="city">City</label>
        <input id="city" type="text" ref={cityInputRef}></input>
        {!isValid.city && <p>Please entere a valid city name</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button type="submit" className={styles.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
