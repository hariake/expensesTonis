import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App(){
  const expenses =[
  {
    date: new Date(2023, 9 ,6),
    title: 'New Book',
    price: 30.99
  },
{
  date: new Date(2023, 9 ,6),
  title: 'New Jeans',
  price: 99.99
}
]
  return (
    <div className="App">
       <ExpenseItem
       expensedata={expenses[0]}
       />
       <ExpenseItem
       expensedata={expenses[1]}
       />
    </div>
  );
}

export default App;
