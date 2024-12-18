import React from "react"
import { MenuItem, Description, ItemName, Price, ImgDiv, TxtDiv } from "../tabStyle.ts"
import { useCart } from '../../Cart/CartContext.js'

import aguaComGasImg from '../../../imgs/239.jpg'
import aguaSemGasImg from '../../../imgs/240.jpg'
import Coca1LZero from '../../../imgs/496.jpg'
import Coca1L from '../../../imgs/340.jpg'
import lataCoca from '../../../imgs/196.jpg'
import lataFanta from '../../../imgs/211.jpg'
import lataGuarana from '../../../imgs/377.jpg'
import lataSprite from '../../../imgs/213.jpg'


const Refrigerante = ({ tagRefigerantesActive }) => {

  const { addCart, clickAnimation, animationOnClick  } = useCart()

    const listaRefrigerantes = [
        {
          id: 1,
          imgSrc: aguaComGasImg,
          name: "ÁGUA COM GÁS",
          description: "",
          price: 4.00,
        },
        {
          id: 2,
          imgSrc: aguaSemGasImg,
          name: "ÁGUA SEM GÁS",
          description: "",
          price: 3.00,
        },
        {
          id: 3,
          imgSrc: Coca1LZero,
          name: "COCA COLA 1L",
          description: "",
          price: 9.00,
        },
        {
            id: 4,
            imgSrc: Coca1L,
            name: "COCA COLA 1L ZERO",
            description: "",
            price: 9.00,
          },
          {
            id: 5,
            imgSrc: lataCoca,
            name: "COCA COLA LATA",
            description: "",
            price: 6.00,
          },
          {
            id: 6,
            imgSrc: lataFanta,
            name: "FANTA LARANJA LATA",
            description: "",
            price: 6.00,
          },
          {
            id: 7,
            imgSrc: lataGuarana,
            name: "GUARANÁ ANTARCTICA LATA",
            description: "",
            price: 6.00,
          },
          {
            id: 8,
            imgSrc: lataSprite,
            name: "SPRITE LATA",
            description: "",
            price: 6.00,
          },
    ];
    
    return (
      <>
      {tagRefigerantesActive &&
        listaRefrigerantes.map((item) => (
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

export default Refrigerante