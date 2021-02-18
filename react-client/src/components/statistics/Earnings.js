import React, {useState, useEffect} from 'react';
import {
  Jumbotron,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import axios from 'axios';
import PercentBar from './PercentBar';
import coin from '../../img/coin.png';

const Earnings = () => {
  const [activeTab, setActivetTab] = useState('1');
  const [transactions, setTransactions] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8000/api/transactions')
      .then((res) => {
        const doneTransactions = res.data.filter((item) => item.done)
        setTransactions(doneTransactions);
      })
      .catch((err) => {
        setTransactions([]);
        console.log(err);
      })
  }, []);

  useEffect(() => {
    setTotalAmount(transactions.reduce((total, item) => total + item.price, 0));
    setTotalQuantity(transactions.reduce((total, item) => total + item.quantity, 0));
  }, [transactions]);
  
  const toggle = (tab) => {
    if (activeTab !== tab) setActivetTab(tab);
  }

  return (
    <Jumbotron className='earnings-jumbotron'>
      <h1 className='display-3'>Bonjour, Captain!</h1>
      <div className='d-flex flex-column mt-4'>
        <p className='lead'>You have earned a total of:</p>
        <h2><img src={coin} height='50px' alt='gold coin' />Rp{totalAmount}</h2>
      </div>
      <hr className='my-2' />
      <p>Check out customer's favourite fishes below:</p>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab === '1' ? 'active' : 'inactive'}
            onClick={() => toggle('1')}
          >
            Amount
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === '2' ? 'active' : 'inactive'}
            onClick={() => toggle('2')}
          >
            Quantity
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='1'>
          <div className='statistic'>
            {transactions.length > 0 ? 
              transactions.sort((a, b) => b.price-a.price).map((item) => <PercentBar key={item._id} name={item.name} percentage={Math.round(item.price/totalAmount*100)} />) :
              <h3>No statistic to show. Let's get some transactions going!</h3>
            }
          </div>
        </TabPane>
        <TabPane tabId='2'>
          <div className='statistic'>
          {transactions.length > 0 ? 
            transactions.sort((a, b) => b.quantity-a.quantity).map((item) => <PercentBar key={item._id} name={item.name} percentage={Math.round(item.quantity/totalQuantity*100)} />) :
            <h3>No statistic to show. Let's get some transactions going!</h3>
          }
          </div>
        </TabPane>
      </TabContent>
    </Jumbotron>
  )
}

export default Earnings
