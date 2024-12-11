import React from "react"
import { CartIcon, NavBarDiv, WppIcon, TextDiv } from "./style.ts"

function NavBar() {
    return (
        <NavBarDiv>
            <WppIcon>
                <i className="fa-brands fa-whatsapp"></i>
            </WppIcon>
            <TextDiv>
                <p>Endereço de retidada</p>
                <p>Rua 04, N°709</p>
            </TextDiv>
            <CartIcon>
                <i className="fa-solid fa-cart-shopping"><span>5</span></i>
            </CartIcon>
        </NavBarDiv>
    )
}

export default NavBar