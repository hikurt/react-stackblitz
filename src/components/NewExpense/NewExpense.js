import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  const[renderForm, setRenderForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
      };
      props.onAddExpense(expenseData);
  }

  const startEditingHandler = () => {
    setRenderForm((prevRenderForm) => !prevRenderForm);
  }

  return <div className='new-expense'>
    {!renderForm && <button onClick={startEditingHandler}>Add New Expense</button>}
    {renderForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>}
    {renderForm && <button onClick={startEditingHandler}>Cancel</button>}
    
  </div>
}

export default NewExpense;