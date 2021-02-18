import React, { useEffect, useState } from 'react';
import Transaction from './Transaction';
import axios from 'axios';

const TransactionsList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('https://whispering-forest-90538.herokuapp.com/api/transactions')
      .then((res) => {
        setTransactions(res.data);
        console.log(res);
      })
      .catch((err) => {
        setTransactions([]);
        console.log(err);
      })
  }, []);

  const toggleDone = (id) => {
    axios.get(`https://whispering-forest-90538.herokuapp.com/api/transactions/${id}`)
      .then((res) => {
        const updatedItem = {...res.data, done: !res.data.done}
        axios.put('http://localhost:8000/api/transactions/', {...updatedItem})
          .then((res) => {
            setTransactions(transactions.map((transaction) => transaction._id === id ? 
            {...transaction, done: !transaction.done} : transaction));
          })
      })
      .catch((err) => {
        console.log(err);
      })  
  }

  return (
    <div className='transaction-list p-3 bg-info rounded'>
      <h3 style={{color: 'white'}} >Here's what's happening recently:</h3>
      <small style={{color: 'white'}} className='mb-5'>(Double click to toggle status.)</small>
      {transactions.length > 0 ? 
        transactions.map((transaction) => <Transaction key={transaction._id} toggleDone={toggleDone} transaction={transaction} />) :
        <h3 className='mt-4'>No transactions to show.</h3>
      }
    </div>
  )
}

export default TransactionsList
