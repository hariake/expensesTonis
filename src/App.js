import './App.css';
import Expenses from './components/Expenses';


function App(){
  return (
    <div className="App">
      <div className='expenses'>
        <Expenses
        expenses={Expenses}/>
      </div>
      </div>
  )
}

export default App;
