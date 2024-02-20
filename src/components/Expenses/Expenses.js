import "./Expenses.css"
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";


const Expenses = (props) =>{
    const [filteredYear, setFilteredYear] =useState("2023")
  const saveSelectedYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    console.log("The selected year is " + selectedYear);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear
  });


    return (
        <li>
      <Card className='expenses'>
          <ExpensesFilter
            saveSelectedYear = {saveSelectedYearHandler}
          />
         <ExpensesList expenses={filteredExpenses}/>
      </Card>
        </li>
  )
  }
  export default Expenses;