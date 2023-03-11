import React, {useContext} from 'react'
import '../App.css'
import { GlobalContext } from '../context/GlobalContext';

const Incomexpensis = () => {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
  .filter(item => item > 0)
  .reduce((acc,item) => (acc += item), 0);

  const expenses = amounts
  .filter(item => item < 0)
  .reduce((acc,item) => (acc += item), 0);

 
  return (
    <div className='incexp'>
      <div className='moneyPlus income'>${income}</div>
      <div className='moneyMinus expensis'>${expenses}</div>
    </div>
  )
}

export default Incomexpensis