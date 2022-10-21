import React, { useState } from 'react'
import styles from './AddUser.module.css'

import ErrorModal from '../UI/ErrorModal';

import Card from '../UI/Card';
import Button from '../UI/Button';

export default function AddUser(props) {

    const [userInput, setUserInput] = useState({
        enteredUsername: '',
        enteredAge: '',
    });

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (userInput.enteredUsername.trim().length === 0 || userInput.enteredUsername.trim().length === 0) {
            setError({
                errorTitle: 'Invalid input',
                errorMessage: 'Please enter a valid name and age'
            });

            return;
        }

        if (+userInput.enteredAge < 1) {
            setError({
                errorTitle: 'Invalid age',
                errorMessage: 'Please enter a valid age ( > 0 ).'
            });
            return;
        }

        props.onAddUser(userInput.enteredUsername, userInput.enteredAge);

        setUserInput({
            enteredUsername: '',
            enteredAge: '',
        }
        );
    }

    const usernameChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredUsername: event.target.value }
        }
        );
    }
    const ageChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredAge: event.target.value }
        }
        );
    }

    const acceptErrorModalHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal errorTitle={error.errorTitle} errorMessage={error.errorMessage} onAcceptError={acceptErrorModalHandler} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">
                        Username
                    </label>
                    <input id="username" type='text' onChange={usernameChangeHandler} value={userInput.enteredUsername} />
                    <label htmlFor="age">
                        Age
                    </label>
                    <input id="age" type='number' onChange={ageChangeHandler} value={userInput.enteredAge} />
                    <Button type='submit'>
                        Add new user
                    </Button>
                </form>
            </Card>
        </div>
    )
}
