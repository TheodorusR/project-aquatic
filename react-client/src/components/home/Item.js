import {useState}from 'react';
import {ListGroupItem, Collapse} from 'reactstrap';


const Item = ({item}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ListGroupItem 
      key={item.id}
      onClick={() => setIsOpen(!isOpen)} 
      style={{cursor: 'pointer'}}
    >
      <div className='item-header d-flex justify-content-between'>
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
