import React from "react"
import { MenuItem, Description, ItemName, Price, ImgDiv, TxtDiv } from "../tabStyle.ts"
import { useCart } from '../../Cart/CartContext.js'

import Fruitz900ML from '../../../imgs/510.jpg'
import Prats900ML from '../../../imgs/322.jpg'
import Polpa1L from '../../../imgs/146.jpg'
import Polpa500ML from '../../../imgs/87.jpg'


const Sucos = ({ tagSucosActive }) => {

    const { addCart, clickAnimation, animationOnClick  } = useCart()

    const listSucos = [
        {
          id: 1,
          imgSrc: Fruitz900ML,
          name: "SUCO DE LARANJA INTEGRAL FRUITZ 900ML",
          description: "*ADOÇADO*",
          price: 13.00,
        },
        {
          id: 2,
          imgSrc: Prats900ML,
          name: "SUCO DE LARANJA INTEGRAL PRATS 900ML",
          description: "",
          price: 15.00,
        },
        {
          id: 3,
          imgSrc: Polpa1L,
          name: "SUCO DE POLPA 1L",
          description: "",
          price: 15.00,
        },
        {
            id: 4,
            imgSrc: Polpa500ML,
            name: "SUCO DE POLPA 500ML",
            description: "",
            price: 10.00,
          }
    ];

    return (
      <>
      {tagSucosActive &&
        listSucos.map((item) => (
          <MenuItem key={item.id}>
            <ImgDiv>
              <img src={item.imgSrc} alt="" />
            </ImgDiv>
            <TxtDiv>
              <ItemName>{item.name}</ItemName>
              <Description>{item.description}</Description>
              <Price className={animationOnClick === item.id ? "fa-bounce" : ""} 
              onClick={() => {
                clickAnimation(item.id)
                addCart(item)
              }} 
              >R$: {(item.price).toFixed(2)}</Price>
            </TxtDiv>
          </MenuItem>
        ))}
    </>
    )
}

export default Sucos