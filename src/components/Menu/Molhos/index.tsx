import React from "react"
import { MenuItem, Description, ItemName, Price, ImgDiv, TxtDiv } from "../tabStyle.ts"
import { useCart } from '../../Cart/CartContext.js'

import ketchup from '../../../imgs/260.jpg'
import maionese from '../../../imgs/263.jpg'
import mostarda from '../../../imgs/266.jpg'
import picante from '../../../imgs/218.jpg'
import especial from '../../../imgs/217.jpg'
import maioneseDeBacon from '../../../imgs/219.jpg'
import mostardaEMel from '../../../imgs/399.jpg'


const Molhos = ({ tagMolhosActive }) => {

    const { addCart, clickAnimation, animationOnClick  } = useCart()

    const listaMolhos = [
        {
          id: 1,
          imgSrc: ketchup,
          name: "HEINZ SACHÊ - KETCHUP",
          description: "",
          price: 0.50,
        },
        {
          id: 2,
          imgSrc: maionese,
          name: "HEINZ SACHÊ - MAIONESE",
          description: "",
          price: 0.50,
        },
        {
          id: 3,
          imgSrc: mostarda,
          name: "HEINZ SACHÊ - MOSTARDA",
          description: "",
          price: 0.50,
        },
        {
            id: 4,
            imgSrc: picante,
            name: "MOLHO - PICANTE",
            description: "",
            price: 1.99,
          },
          {
            id: 5,
            imgSrc: especial,
            name: "MOLHO - BARBECUE",
            description: "",
            price: 1.99,
          },
          {
            id: 6,
            imgSrc: maioneseDeBacon,
            name: "MOLHO - MAIONESE DE BACON",
            description: "",
            price: 1.99,
          },
          {
            id: 7,
            imgSrc: mostardaEMel,
            name: "MOLHO - MOSTARDA E MEL",
            description: "",
            price: 1.99,
          }
    ];
    
    return (
      <>
      {tagMolhosActive &&
        listaMolhos.map((item) => (
          <MenuItem key={item.id}>
            <ImgDiv>
              <img src={item.imgSrc} alt="" />
            </ImgDiv>
            <TxtDiv>
              <ItemName>{item.name}</ItemName>
              <Description >{item.description}</Description>
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

export default Molhos