import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {
  },
  cartItems: [],
  addItemToCart: () => {
  },
  cartCount: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount);
  }, [cartItems])
  const addItemToCart = (productToAdd) => {
    let updatedCartItems = [...cartItems];
    const existedItem = updatedCartItems.find(item => item.id === productToAdd.id);
    if (existedItem) {
      existedItem.quantity++;
    } else {
      updatedCartItems.push({ ...productToAdd, quantity: 1 });
    }
    setCartItems(updatedCartItems);
  }

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount };

  return <CartContext.Provider value={ value }>{ children }</CartContext.Provider>;
};