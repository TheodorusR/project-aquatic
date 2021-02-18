import React, { useContext, useState } from 'react';
import {
  Card, CardImg, CardText, CardBody, Label,
  CardTitle, CardSubtitle, Modal, Input, Form,
  ModalHeader, ModalBody, ModalFooter, Button
} from 'reactstrap';
import net from '../../img/net.png';
import {motion} from 'framer-motion';
import { ShopContext } from './ShopState';

const Fish = ({item}) => {
  const {addItem} = useContext(ShopContext);
  const [quantity, setQuantity] = useState(0);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Card className='shadow my-2 mx-4'>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Buy {item.name}</ModalHeader>
        <ModalBody className='d-flex justify-content-center align-items-center'>
          <img height='100px' src={item.imgSource} alt={item.name} />
          <div className='ml-4 input-quantity'>
            <Label htmlFor='quantity'>Quantity:</Label>
            <Input 
              type='number' 
              name='quantity' 
              value={quantity}
              min={0}
              pattern="[0-9]*"
              onChange={(e) => {
                if (!e.target.value) {
                  setQuantity(0);
                } else if (e.target.value >= 0) {
                  setQuantity(Number(e.target.value));
                }
              }}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => {
            addItem(item, quantity);
            setQuantity(0);
            toggle();
          }}>Proceed</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <CardImg top height='200px' src={item.imgSource} alt={item.name} />
      <motion.img className='net-image' src={net} 
        whileHover={{opacity: 1}}
        onClick={toggle}
      />
      <CardBody>
        <CardTitle tag='h5'>{item.name}</CardTitle>
        <CardSubtitle tag='h6' className='mb-2 text-muted'>{item.priceTag}</CardSubtitle>
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  )
}

export default Fish
