import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css';

function ExpenseItems(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">Rs{props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItems;
