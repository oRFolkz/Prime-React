import React from "react"
import { Bars, NavBarDiv, SearchIcon, TextDiv } from "./style.ts"

function NavBar() {
    return (
        <NavBarDiv>
            <Bars>
                <i className="fa-solid fa-bars"></i>
            </Bars>
            <TextDiv>
                <p>Endereço de retidada</p>
                <p>Rua 04, N°709</p>
            </TextDiv>
            <SearchIcon>
                <i className="fa-solid fa-cart-shopping"><span>5</span></i>
            </SearchIcon>
        </NavBarDiv>
    )
}

export default NavBar