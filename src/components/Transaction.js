import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';


const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <div>
         <li style={{textTransform:'uppercase'}}className={ transaction.amount < 0 ? 'minus' : "plus"} >
          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}
          <button onClick={() => deleteTransaction(transaction.id)} className='delete-btn'>
              X
          </button></span>
         </li>
    </div>
  )
}

export default Transaction