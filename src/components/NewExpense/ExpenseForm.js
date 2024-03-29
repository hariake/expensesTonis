import "./ExpenseForm.css"
import { useState } from "react" 

const ExpenseForm = (props) =>{
    const[enteredTitle, setEnteredTitle] = useState('')
    console.log(enteredTitle)
    const[enteredAmount, setEnteredAmount] = useState('')
    console.log(enteredAmount) 
    const[enteredDate, setEnteredDate] = useState('')
    console.log(enteredDate)  
    
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value)
    } 

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData ={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        } 
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    } 
    return(
        <form onSubmit={submitHandler}> 
            <div className="new-expense__control">
                <div>
                    <label>Title</label>
                    <input 
                    type="text"
                    onChange={titleChangeHandler}
                    value={enteredTitle}
                    />

                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"
                    onChange={amountChangeHandler}
                    value={enteredAmount}
                    />
                </div>
                <div>
                    <label>date</label>
                    <input type="date" min="2023-01-01" max="2025-01-31"
                    onChange={dateChangeHandler}
                    value={enteredDate}
                    />
                </div>
            </div>
            <div>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
} 

export default ExpenseForm