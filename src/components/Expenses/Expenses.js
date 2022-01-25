import React, {useState} from "react";
import Card from "../UI/Card";
import ExpenseList from "./ExpensesList";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";


function Expenses(props){
 const[filteredYear, setFilteredYear]= useState("2020");
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };


  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

 
    return(
      <div>
        <Card className = "expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
          <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
         <ExpenseList items = {filteredExpenses}></ExpenseList>
        </Card>
        </div>
    )
}

export default Expenses;