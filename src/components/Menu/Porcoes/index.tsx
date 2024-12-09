import React from "react"
import { MenuItem, Description, ItemName, Price, ImgDiv, TxtDiv } from "../tabStyle.ts"
import porcoes from '../../../Imgs/Lanches/67.jpg'


const Porcoes = ({ tagPorcoesActive }) => {

    const menuItems = [
        {
          id: 1,
          imgSrc: porcoes,
          name: "ANÉIS DE CEBOLA (ONION RINGS)",
          description: "",
          price: "R$ 1,99",
        },
        {
          id: 2,
          imgSrc: porcoes,
          name: "ANÉIS DE CEBOLA (ONION RINGS)",
          description: "",
          price: "R$ 2,99",
        },
        {
          id: 3,
          imgSrc: porcoes,
          name: "ANÉIS DE CEBOLA (ONION RINGS)",
          description: "",
          price: "R$ 1,20",
        },
        {
            id: 4,
            imgSrc: porcoes,
            name: "ANÉIS DE CEBOLA (ONION RINGS)",
            description: "",
            price: "R$ 5,99",
          },
          {
            id: 5,
            imgSrc: porcoes,
            name: "ANÉIS DE CEBOLA (ONION RINGS)",
            description: "",
            price: "R$ 10,99",
          },
          {
            id: 6,
            imgSrc: porcoes,
            name: "ANÉIS DE CEBOLA (ONION RINGS)",
            description: "",
            price: "R$ 6,99",
          },
          {
            id: 7,
            imgSrc: porcoes,
            name: "ANÉIS DE CEBOLA (ONION RINGS)",
            description: "",
            price: "R$ 6,99",
          },
          {
            id: 8,
            imgSrc: porcoes,
            name: "ANÉIS DE CEBOLA (ONION RINGS)",
            description: "",
            price: "R$ 6,99",
          },
    ];

    return (
      <>
      {tagPorcoesActive &&
        menuItems.map((item) => (
          <MenuItem key={item.id} className={tagPorcoesActive ? "active" : ""}>
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

export default Porcoes