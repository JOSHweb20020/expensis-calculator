import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';


const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext);
  const [text,setText] = useState('');
  const [amount,setAmount] = useState(0)


   const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id:Math.floor(Math.random () * 1000000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction)
   }

  return (

    <div>
      <h1>Add new Transaction</h1>
      <form onSubmit={onSubmit}>
        <div className='formControl'>
          <label className=''>Text</label>
          <input type='text' value= {text} onChange={(e) => setText(e.target.value)} placeholder='Enter text ....'/>
        </div>
        <div className='formControl'>
          <label className=''>Amount <br/>
          (Negative = Expensis, Positive = income)</label>
          <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter Amount....'/>
        </div>
         <button className='btn'>CLICK TO SAVE TRANSACTION</button>
        

      </form>
    </div>
  )
}

export default AddTransaction