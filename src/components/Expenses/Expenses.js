import "./Expenses.css"
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";


const Expenses = (props) =>{
  const saveSelectedYearHandler = (selectedYear) => {
    console.log(selectedYear)
  }
  props.expenses.map((expense) => {
      console.log(expense)
  })

    return (
      <Card className='expenses'>
          <ExpensesFilter
            saveSelectedYear = {saveSelectedYearHandler} 
          />
          {
              props.expenses.map((expense) => {
                  return <ExpenseItem expenseData={expense} key={expense.id}/>
              })
          }
      </Card>
  )
  }
  export default Expenses;