import React, { createContext, useReducer } from 'react';
import axios from 'axios';

const ACTIONS = {
  ADD_ITEM : 'ADD_ITEM',
  CLEAR_ITEMS : 'CLEAR_ITEMS'
}

const reducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.ADD_ITEM:
      //check if item already in cart
      let alreadyExist = false;
      for (let i=0; i<state.items.length; i++) {
        if (state.items[i].id === action.payload.id) {
          alreadyExist = true;
          break;
        }
      }
      if (alreadyExist) {
        return({
          ...state,
          items: state.items.map((item) => item.id === action.payload.id ? 
          {...item, quantity: item.quantity + action.payload.quantity} : item)
        })
      } else {
        return ({
          ...state,
          items: [...state.items, action.payload]
        })
      }

    case ACTIONS.CLEAR_ITEMS:
      return ({
        ...state,
        items: []
      })

    default:
      return state;
  }
}

const initialState = {
  items: []
}

export const ShopContext = createContext(initialState);

export const ShopProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (item, quantity) => {
    //only quantity > 0 will be registered
    if (quantity > 0) {
      const newItem = {
        ...item,
        quantity
      }
      dispatch({
        type: ACTIONS.ADD_ITEM,
        payload: newItem
      });
    }
  }

  const clearItems = () => {
    dispatch({
      type: ACTIONS.CLEAR_ITEMS
    })
  }

  const proceedBuy = () => {
    let transactions = [];
    for (let i=0; i<state.items.length; i++) {
      transactions.push({
        name: state.items[i].name,
        price: state.items[i].price * state.items[i].quantity,
        quantity: state.items[i].quantity,
        done: false
      })
    }
    axios.post('http://localhost:8000/api/transactions/', transactions)
      .then((res) => {
        console.log(res);
        // clearItems();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (<ShopContext.Provider
    value={{
      items: state.items,
      addItem,
      clearItems,
      proceedBuy
    }}
  >
    {children}
  </ShopContext.Provider>)
}

