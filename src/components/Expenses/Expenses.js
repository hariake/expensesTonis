import "./Expenses.css"
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";


const Expenses = (props) =>{
    const [filteredYear, setFilteredYear] =useState("")
  const saveSelectedYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    console.log("The selected year is " + selectedYear);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear
  });


    return (
      <Card className='expenses'>
          <ExpensesFilter
            saveSelectedYear = {saveSelectedYearHandler}
          />
          {
              filteredExpenses.map((expense) => {
                  return <ExpenseItem expenseData={expense} key={expense.id}/>
              })
          }
      </Card>
  )
  }
  export default Expenses;