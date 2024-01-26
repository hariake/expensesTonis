function ExpenseItem(props){
   console.log(props)


    return(
    <div className="Expense-item">
        <div>{props.expenseData.date.toString()}</div>
        <div>
            <h2>{props.expenseData.title}</h2>
            <div>{props.expenseData.price}</div>
        </div>
    </div>
    );
}

export default ExpenseItem