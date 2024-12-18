import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export const useCart = () => {
  return useContext(CartContext)
}

export const CartProvider = ({ children }) => {

  const [ cartItems, setCartItems ] = useState([]);

  const [ animationOnClick, setAnimationOnClick ] = useState(null)
  const [ openCart, setOpenCart ] = useState(false)


  const addCart = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                adicionais: item.adicionais,
                quantity: (cartItem.quantity || 1) + 1,
              }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Função responsavel por mexer o botão de compra ao clicar
  const clickAnimation = (id) => {
    setAnimationOnClick(id);
    setTimeout(() => {
    setAnimationOnClick(null);
    }, 500);
  }

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addCart, 
      openCart, 
      setOpenCart,
      animationOnClick,
      clickAnimation
      }}>
      {children}
    </CartContext.Provider>
  );
};
