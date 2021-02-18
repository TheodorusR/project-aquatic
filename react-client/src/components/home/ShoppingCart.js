import {useState, useContext} from 'react';
import {ListGroup, Button, Badge} from 'reactstrap';
import {motion} from 'framer-motion';
import {ShopContext} from './ShopState';
import Item from './Item';
import {Link} from 'react-router-dom';

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {items, clearItems, proceedBuy} = useContext(ShopContext);

  return (
    <div className='cart-container'>
      {isOpen && <motion.div className='cart-backdrop'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        onClick={() => setIsOpen(!isOpen)}
      >
      </motion.div>}

      <motion.div className='cart'
        initial={{right: '-300px'}}
        animate={{right: isOpen ? 0 : '-300px'}}
      >
        <div className='tab border-top' onClick={() => setIsOpen(!isOpen)}>
          <i className="fa fa-shopping-cart"></i>
          {items.length > 0 && <p><Badge color='danger' pill>{items.length}</Badge></p>}
        </div>
        <div className='shop-list'>
          {items.length > 0 ? 
          <ListGroup className='mb-3'>
            {items.map((item, index) => <Item key={index} item={item}/>)}
          </ListGroup> :
          <h3 className='text-center mb-4'>Cart Empty</h3>}
          {items.length > 0 && <p className='text-right mr-2'><strong>Total:</strong> Rp
            {items.reduce((total, item) => total + (item.price*item.quantity), 0)}
          </p>}
          {items.length > 0 && <div className='d-flex justify-content-around'>
            <Link to='/transactions'>
              <Button onClick={proceedBuy} size="sm" color='success'>Proceed</Button>
            </Link>
            <Button onClick={clearItems} size="sm" color='danger'>Clear Cart</Button>
          </div>}
        </div>
      </motion.div>
    </div>
    
  )
}

export default ShoppingCart
