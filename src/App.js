import './App.css';
import Expenses from './components/Expenses/Expenses';


function App(){
  return (
    <div className="App">
      
        <Expenses
        expenses={Expenses}/>
      
      </div>
  )
}

export default App;
