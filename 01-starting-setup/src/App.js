import Expenses from './components/Expenses/Expenses'

import {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';

const initial_expenses = [
  {
    title: 'Car Insurance',
    amount: 294.67, date: new Date(2021, 2, 22),
    id: 'e1'
  },
  {
    title: 'elo',
    amount: 294.67, date: new Date(2021, 5, 28),
    id: 'e2'
  },
  {
    title: 'Car Insurance',
    amount: 512, date: new Date(2022, 2, 28),
    id: 'e3'
  }
];

const App = () => {

  const [expenses, setExpenses] = useState(initial_expenses);

  const addExpenseHandler = expense => {
    setExpenses(
      (prevExpenses) => {
      return [expense, ...prevExpenses];
      }
    );
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div >
  );

  /**
   * no jsx version
   */
  // return React.createElement('div', {}, React.createElement('h2', {}, "Let's get started"),
  //   React.createElement(Expenses, { items: expenses }));
}

export default App;
