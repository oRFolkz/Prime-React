import React from "react"
import { MenuItem, Description, ItemName, Price, ImgDiv, TxtDiv } from "../tabStyle.ts"
import { useCart } from "../../Cart/CartContext.js"

import StellaImg from '../../../imgs/209.jpg'
import HeinekenImg from '../../../imgs/254.jpg'
import BuweiserImg from '../../../imgs/210.jpg'


const Cervejas= ({tagCervejasActive}) => {

    const { addCart, clickAnimation, animationOnClick  } = useCart()

    const listaCervejas = [
        {
          id: 1,
          imgSrc: StellaImg,
          name: "STELLA ARTOIS 275ML",
          description: "",
          price: 8.00,
        },
        {
          id: 2,
          imgSrc: HeinekenImg,
          name: "HEINEKEN  275ML",
          description: "",
          price: 9.00,
        },
        {
          id: 3,
          imgSrc: BuweiserImg,
          name: "BUDWEISER 330MLaaa",
          description: "",
          price: 8.00,
        },
    ];
    
    return (
      <>
      {tagCervejasActive &&
        listaCervejas.map((item) => (
          <MenuItem key={item.id}>
            <ImgDiv>
              <img src={item.imgSrc} alt="" />
            </ImgDiv>
            <TxtDiv>
              <ItemName>{item.name}</ItemName>
              <Description>{item.description}</Description>
              <Price 
              className={animationOnClick === item.id ? "fa-bounce" : ""} 
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

export default Cervejas