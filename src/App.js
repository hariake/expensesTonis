import {useState} from "react";
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';



    const DYMMY_EXPENSES =[
        {
            id: 'id1',
            date: new Date(2023, 9 ,6),
            title: 'New Book',
            amount: 30.99
        },
        {
            id: 'id2',
            date: new Date(2023, 9 ,6),
            title: 'New Jeans',
            amount: 99.99
        },
        {
            id: 'id3',
            date: new Date(2024, 2 ,25),
            title: 'New Bag',
            amount: 139.99
        }
    ]
const App = () =>{
   const [expenses, setExpenses] = useState(DYMMY_EXPENSES)
   const addExpenseHandler = (expense) =>{
    console.log('In App.js')
    console.log(expense)
       setExpenses((previousExpenses) => {
        return[expense,...previousExpenses]
       })
  }  
  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        <Expenses expenses={expenses}/>
      </div>
  )
}

export default App;
