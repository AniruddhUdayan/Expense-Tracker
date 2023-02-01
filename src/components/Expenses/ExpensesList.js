import React from 'react';
import ExpenseItems from './ExpenseItems';
import './ExpensesList.css';

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">FOUND NO EXPENSES.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItems>
      ))}
      ;
    </ul>
  );
};
export default ExpenseList;
