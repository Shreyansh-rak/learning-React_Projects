import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'NewsPaper',
    amount: 120,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'TV', amount: 69999, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Book',
    amount: 250,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Chair',
    amount: 4500,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;