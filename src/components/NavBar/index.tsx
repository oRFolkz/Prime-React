import React from "react"
import { useCart } from "../Cart/CartContext.js"
import { CartIcon, NavBarDiv, WppIcon, TextDiv } from "./style.ts"

function NavBar() {

    const { setOpenCart, cartItems } = useCart()

    const toggleCart = () => {
        setOpenCart(prevState => !prevState)
      };

    return (
        <NavBarDiv>
            <WppIcon>
                <i className="fa-brands fa-whatsapp"></i>
            </WppIcon>
            <TextDiv>
                <p>Endereço de retidada</p>
                <p>Rua 04, N°709 - Orlândia</p>
            </TextDiv>
            <CartIcon
            onClick={() => toggleCart()}>
                <i className="fa-solid fa-cart-shopping">
                    <span>{cartItems.length}</span></i>
            </CartIcon>
        </NavBarDiv>
    )
}

export default NavBar