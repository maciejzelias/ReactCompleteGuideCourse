import React from 'react';

import Card from './Card';
import Button from './Button';

import styles from './ErrorModal.module.css';

export default function ErrorModal(props) {


    return (
        <div>
            <div className={styles.backdrop} onClick={props.onAcceptError} />
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>
                        {props.errorTitle}
                    </h2>
                </header>
                <div className={styles.content}>
                    <p>
                        {props.errorMessage}
                    </p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.onAcceptError}>
                        Okay
                    </Button>
                </footer>
            </Card>
        </div>
    )
}
