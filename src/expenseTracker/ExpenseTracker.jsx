import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';
const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);

  // function that will update the state
  const addExpenses = (expense) => {
    setExpenses([...expenses, expense]);
  };
  return (
    <div className="p-5">
      <ExpenseForm  createExpenses={addExpenses}/>
      <ExpenseTable data={expenses} />
    </div>
  );
};

export default ExpenseTracker;
