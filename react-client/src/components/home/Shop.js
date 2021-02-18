import React from 'react';
import {
  Row,
  Col,
  Container,
  CardDeck
} from 'reactstrap';
import Fish from './Fish';

import arowana from '../../img/arowana.jpg';
import arowanaSilver from '../../img/arowanaSilver.jpg';
import channa from '../../img/channa.jpg';
import oscar from '../../img/oscar.jpg';
import pari from '../../img/pari.jpg';
import redFeifeng from '../../img/redFeifeng.jpg';

const fishes = [
  {
    id: 1,
    name: 'Arowana Super Red',
    imgSource: arowana,
    priceTag: '@Rp2.500.000',
    price: 2500000,
    description: 'Dayungnya batman dan kepalanya juga sendok.'
  },
  {
    id: 2,
    name: 'Arowana Silver Albino',
    imgSource: arowanaSilver,
    priceTag: '@Rp425.000',
    price: 425000,
    description: 'Ikannya stabil dan sehat, kualitas bisa dinilai sendiri.'
  },
  {
    id: 3,
    name: 'Channa Marulioides Yellow Sentarum',
    imgSource: channa,
    priceTag: '@Rp26.000',
    price: 26000,
    description: 'Berenangnya cepat, sisiknya bercorak stripe ungu.'
  },
  {
    id: 4,
    name: 'Oscar Albino Paris Red',
    imgSource: oscar,
    priceTag: '@Rp850.000',
    price: 850000,
    description: 'Warna merah terang, ikannya lebar.'
  },
  {
    id: 5,
    name: 'Pari Black Diamond Pure',
    imgSource: pari,
    priceTag: '@Rp6.500.000',
    price: 6500000,
    description: 'Ikannya stabil dan sehat, marking bisa dinilai sendiri.'
  },
  {
    id: 6,
    name: 'Red Feifeng',
    imgSource: redFeifeng,
    priceTag: '@Rp450.000',
    price: 450000,
    description: 'Merahnya stabil dan cerah, cocok jadi tankmate arowana.'
  }
]

const Shop = () => {

  return (
    <div className='shop mt-5'>
      <p className='header'>A nice addition to the family. Period.</p>
        <Row xs='1' sm='2' md='3' className='justify-content-center'>
          {fishes.map((item) => (
          <CardDeck key={item.id}>
            <Fish item={item} />
          </CardDeck>))}
        </Row>
    </div>
  )
}

export default Shop
