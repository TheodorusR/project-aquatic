import {useContext, useState}from 'react';
import {ListGroupItem, Collapse} from 'reactstrap';
import {ShopContext} from './ShopState';


const Item = ({item}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {removeItem} = useContext(ShopContext);

  return (
    <ListGroupItem
      key={item.id}
      className='item-container'
      style={{cursor: 'pointer'}}
    >
      <div className='remove-btn' onClick={() => removeItem(item.id)}>X</div>
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        className='item-header d-flex justify-content-between'
      >
        <p className='mr-2 mb-1'>{item.name}</p>
        <p>Rp{item.quantity*item.price}</p>
      </div>
      <Collapse className='border-top' isOpen={isOpen}>
        <p className='mt-2'>Quantity: {item.quantity}</p>
        <p className='mb-0'>Price: {item.priceTag} each</p>
      </Collapse>
    </ListGroupItem>
  )
}

export default Item
