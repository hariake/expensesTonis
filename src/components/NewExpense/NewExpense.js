import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"


const NewExpense = (props) =>{
    const [editForm, setEditForm] =useState(false);
    
    const saveExpenseDatahandler = (enteredExpenseData) =>{
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        } 
        props.onAddExpense(expenseData)
        setEditForm(false);
    }; 
    const cancelEditingHandler = () => {
        setEditForm(false);
    };
    return (
        <div className="new-expense">
            {!editForm && (
                <button onClick={() => setEditForm(true)}>Add New Expense</button>
            )}

            {editForm && (
                <div>
                    <ExpenseForm
                        onSaveExpenseData={saveExpenseDatahandler}
                        onCancel={cancelEditingHandler}
                    />
                    <button onClick={cancelEditingHandler}>Cancel</button>
                </div>
            )}
        </div>
    );
} 

export default NewExpense;