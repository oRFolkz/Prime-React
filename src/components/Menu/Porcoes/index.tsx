import React from "react"
import { MenuItem, Description, ItemName, Price, ImgDiv, TxtDiv } from "../tabStyle.ts"
import { useCart } from '../../Cart/CartContext.js'

import batata from '../../../imgs/335.jpg'
import onionRings from '../../../imgs/67.jpg'
import batataCrinkle from '../../../imgs/333.jpg'
import batataPalito from '../../../imgs/62.jpg'


const Porcoes = ({ tagPorcoesActive }) => {

    const { addCart, clickAnimation, animationOnClick  } = useCart()

    const listaPorcoes = [
        {
          id: 1,
          imgSrc: batata,
          name: "BATATA CRINKLE GRANDE ESPECIAL",
          description: "",
          price: 8.90,
        },
        {
          id: 2,
          imgSrc: batata,
          name: "BATATA CRINKLE MÉDIA ESPECIAL",
          description: "",
          price: 9.90,
        },
        {
          id: 3,
          imgSrc: onionRings,
          name: "ANÉIS DE CEBOLA (ONION RINGS) GRANDE",
          description: "",
          price: 3.90,
        },
        {
            id: 4,
            imgSrc: onionRings,
            name: "ANÉIS DE CEBOLA (ONION RINGS) MÉDIA",
            description: "",
            price: 6.90,
          },
          {
            id: 5,
            imgSrc: batataCrinkle,
            name: "BATATA CRINKLE MÉDIA SIMPLES",
            description: "",
            price: 5.90,
          },
          {
            id: 6,
            imgSrc: batataCrinkle,
            name: "BATATA CRINKLE PEQUENA SIMPLES",
            description: "",
            price: 8.50,
          },
          {
            id: 7,
            imgSrc: batataPalito,
            name: "BATATA PALITO MÉDIA SIMPLES",
            description: "",
            price: 5.90,
          },
          {
            id: 8,
            imgSrc: batataPalito,
            name: "BATATA PALITO PEQUENA SIMPLES",
            description: "",
            price: 8.50,
          },
    ];

    return (
      <>
      {tagPorcoesActive &&
        listaPorcoes.map((item) => (
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

export default Porcoes