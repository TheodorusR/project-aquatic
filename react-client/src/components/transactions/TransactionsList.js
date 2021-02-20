import React, { useEffect, useState } from 'react';
import Transaction from './Transaction';
import axios from 'axios';

const TransactionsList = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://project-aquatic.herokuapp.com/api/transactions')
      .then((res) => {
        setTransactions(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setTransactions([]);
        console.log(err);
      })
  }, []);

  const toggleDone = (id) => {
    axios.get(`https://project-aquatic.herokuapp.com/api/transactions/${id}`)
      .then((res) => {
        const updatedItem = {...res.data, done: !res.data.done}
        axios.put('https://project-aquatic.herokuapp.com/api/transactions/', {...updatedItem})
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
        isLoading ? <h3 className='mt-4'>Fetching, please wait...</h3> : <h3 className='mt-4'>No transactions to show.</h3>
      }
    </div>
  )
}

export default TransactionsList
