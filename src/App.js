import React , {useState} from 'react'
import './App.css'
import Balance from './components/Balance'
import Header from './components/header'
import Incomexpensis from './components/incomeexpensis'
import TransactionList from './components/transactionlist'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalContext'
const App = () => {
 const [isActive, setIsActive] = useState('true')
 const handleClick = (e) => {
  e.preventDefault();
  setIsActive((isActive) => !isActive)
 }

 
  return (
    <GlobalProvider>
      <div className={ isActive ? 'app' :'App'} >
        <button onClick={handleClick} className='button'>MODE</button>
      <Header/>
      <div className='container'>
        <Balance/>
        <Incomexpensis/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </div>
    </GlobalProvider>
  )
}

export default App