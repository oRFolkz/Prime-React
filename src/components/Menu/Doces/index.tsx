import React from "react"
import { MenuItem, Description, ItemName, Price, ImgDiv, TxtDiv } from "../tabStyle.ts"
import { useCart } from "../../Cart/CartContext.js"

import tridentVerde from '../../../imgs/118.jpg'
import tridentPreto from '../../../imgs/369.jpg'
import hallsVermelho from '../../../imgs/150.jpg'
import hallsPreto from '../../../imgs/372.jpg'
import hallsAzul from '../../../imgs/374.jpg'
import tridentRosa from '../../../imgs/505.jpg'
import bubalooAzul from '../../../imgs/506.jpg'
import bubalooVermelho from '../../../imgs/507.jpg'


const Doces = ({ tagDocesActive }) => {

  const { addCart, clickAnimation, animationOnClick  } = useCart()

    const listaDoces = [
        {
          id: 1,
          imgSrc: tridentVerde,
          name: "TRIDENT MENTA VERDE",
          description: "",
          price: 3.00,
        },
        {
          id: 2,
          imgSrc: tridentPreto,
          name: "TRIDENTE X",
          description: "",
          price: 3.00,
        },
        {
          id: 3,
          imgSrc: hallsVermelho,
          name: "HALLS MORANGO",
          description: "",
          price: 2.00,
        },
        {
            id: 4,
            imgSrc: hallsPreto,
            name: "HALLS EXTRA FORTE",
            description: "",
            price: 2.00,
          },
          {
            id: 5,
            imgSrc: hallsAzul,
            name: "HALLS MENTOL",
            description: "",
            price: 2.00,
          },
          {
            id: 6,
            imgSrc: tridentRosa,
            name: "TRIDENT TUTTI FRUTTI",
            description: "",
            price: 3.00,
          },
          {
            id: 7,
            imgSrc: bubalooAzul,
            name: "BUBBALOO HORTELÃ MENTA",
            description: "",
            price: 0.50,
          },
          {
            id: 8,
            imgSrc: bubalooVermelho,
            name: "BUBBALOO MORANGO",
            description: "",
            price: 0.50,
          },
    ];

    return (
      <>
      {tagDocesActive &&
        listaDoces.map((item) => (
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

export default Doces