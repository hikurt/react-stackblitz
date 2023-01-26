import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  const[isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
      };
      props.onAddExpense(expenseData);
  }

  const startEditingHandler = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return <div className='new-expense'>
    {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
    {isEditing && 
      <ExpenseForm 
        onCancel = {stopEditingHandler} 
        onSaveExpenseData={saveExpenseDataHandler}
      />
    }
    {isEditing && <button onClick={startEditingHandler}>Cancel</button>}
    
  </div>
}

export default NewExpense;