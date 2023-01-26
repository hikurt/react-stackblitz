import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

    //selectedYear is a staff you send from child
    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter( el => {
     return el.date.getFullYear().toString() === filteredYear;
    });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>  
      </Card>
    </div>
  );
}

export default Expenses;
