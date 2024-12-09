import React from "react"
import { MenuItem, Description, ItemName, Price, ImgDiv, TxtDiv } from "../tabStyle.ts"
import Cerveja from '../../../Imgs/Lanches/209.jpg'


const Cervejas= ({tagCervejasActive}) => {

    const menuItems = [
        {
          id: 1,
          imgSrc: Cerveja,
          name: "STELLA ARTOIS",
          description: "",
          price: "R$ 1,99",
        },
        {
          id: 2,
          imgSrc: Cerveja,
          name: "STELLA ARTOIS",
          description: "",
          price: "R$ 2,49",
        },
        {
          id: 3,
          imgSrc: Cerveja,
          name: "STELLA ARTOIS",
          description: "",
          price: "R$ 1,20",
        },
        {
            id: 4,
            imgSrc: Cerveja,
            name: "STELLA ARTOIS",
            description: "",
            price: "R$ 1,79",
          },
          {
            id: 5,
            imgSrc: Cerveja,
            name: "STELLA ARTOIS",
            description: "",
            price: "R$ 0,99",
          },
          {
            id: 6,
            imgSrc: Cerveja,
            name: "STELLA ARTOIS",
            description: "",
            price: "R$ 1,00",
          },
          {
            id: 7,
            imgSrc: Cerveja,
            name: "STELLA ARTOIS",
            description: "",
            price: "R$ 1,00",
          },
          {
            id: 8,
            imgSrc: Cerveja,
            name: "STELLA ARTOIS",
            description: "",
            price: "R$ 1,00",
          }
    ];

    return (
      <>
      {tagCervejasActive &&
        menuItems.map((item) => (
          <MenuItem key={item.id} className={tagCervejasActive ? "active" : ""}>
            <ImgDiv>
              <img src={item.imgSrc} alt="" />
            </ImgDiv>
            <TxtDiv>
              <ItemName>{item.name}</ItemName>
              <Description>{item.description}</Description>
              <Price>{item.price}</Price>
            </TxtDiv>
          </MenuItem>
        ))}
    </>
    )
}

export default Cervejas