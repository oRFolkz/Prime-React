import React, { useEffect, useState } from "react"
import { CartBackground, CartCard, CartDescription, CartDiv, CartImg, CartName, CartTxt, Quantidade, QuantValorDiv, Valor, ValorFinal } from './style.ts'
import { useCart } from "./CartContext.js"

const Cart = () => {

    const { cartItems, openCart, setOpenCart} = useCart();
    const [ finalPrice, setFinalPrice ] = useState(0);

    useEffect(() => {
      const price = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      setFinalPrice(price);
    }, [cartItems]);
    

      return (
        <>
          {openCart && (
            <>
            <CartBackground onClick={() => setOpenCart(!openCart) }/>
            <CartDiv>
              <ValorFinal>
                TOTAL : R$ {(finalPrice).toFixed(2)}
              </ValorFinal>
              {cartItems.map((cartItem) => (
                <>
                  <CartCard key={cartItem.id}>
                    <CartImg>
                      <img src={cartItem.imgSrc} alt="Imagem do Lanche" />
                    </CartImg>
                    <CartTxt>
                      <CartName>{cartItem.name}</CartName>
                      <CartDescription>{cartItem.description}</CartDescription>
                      <QuantValorDiv>
                        <Quantidade>
                          Quantidade: {cartItem.quantity}
                        </Quantidade>
                        <Valor>
                          R$ {(cartItem.price).toFixed(2)}
                        </Valor>
                      </QuantValorDiv>
                    </CartTxt>
                  </CartCard>
                </>
              ))}
            </CartDiv>
            </>
          )}
        </>
      );
    }

export default Cart