import "./ExpenseForm.css"

const ExpenseForm = (props) =>{
    return(
        <form> 
            <div className="new-expense__control">
                <div>
                    <label>Title</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"/>
                </div>
                <div>
                    <label>date</label>
                    <input type="date" min="2023-01-01" max="2025-01-31"/>
                </div>
            </div>
            <div>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
} 

export default ExpenseForm