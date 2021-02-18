import React, { useEffect } from 'react';
import {Card, CardHeader, CardBody, CardText} from 'reactstrap';

const Transaction = ({transaction, toggleDone}) => {

  return (
    <Card 
      style={{color: transaction.done ? 'white' : 'black'}}
      color={transaction.done ? 'success' : ''} 
      onDoubleClick={() => toggleDone(transaction._id)} 
      className='my-4'
    >
      <CardHeader className='d-flex justify-content-between'>
        <p><strong>{transaction.name}</strong></p>
        <p>Status: {transaction.done ? 'Completed' : 'In Progress'}</p>
      </CardHeader>
      <CardBody>
        <CardText>Amount: {transaction.price}</CardText>
        <CardText>ID: {transaction._id}</CardText>
        <CardText>Date: {new Date(transaction.date).toLocaleString()}</CardText>
      </CardBody>
    </Card>
  )
}

export default Transaction
