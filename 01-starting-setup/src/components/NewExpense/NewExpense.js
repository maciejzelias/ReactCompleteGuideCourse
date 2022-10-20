import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

import { useState } from 'react';

export default function NewExpense(props) {

    const [showNewExpenseForm, setNewExpenseFormStatus] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString,
        };
        props.onAddExpense(expenseData);
        setNewExpenseFormStatus(false);
    };

    const startNewExpenseForm = () => {
        setNewExpenseFormStatus(true);
    }
    const cancelExpenseForm = () => {
        setNewExpenseFormStatus(false);
    }

    return (
        <div className="new-expense">
            {showNewExpenseForm ?
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelForm={cancelExpenseForm}/>
                : <button onClick={startNewExpenseForm}>
                    Add new Expense
                </button>}
        </div>
    )
}
