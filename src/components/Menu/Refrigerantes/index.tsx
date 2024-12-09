import React from "react"
import { MenuItem, Description, ItemName, Price, ImgDiv, TxtDiv } from "../tabStyle.ts"
import RefrigeranteImg from '../../../Imgs/Lanches/340.jpg'


const Refrigerante = ({ tagRefigerantesActive }) => {

    const menuItems = [
        {
          id: 1,
          imgSrc: RefrigeranteImg,
          name: "COCA COLA 1L",
          description: "",
          price: "R$ 1,99",
        },
        {
          id: 2,
          imgSrc: RefrigeranteImg,
          name: "COCA COLA 1L",
          description: "",
          price: "R$ 2,49",
        },
        {
          id: 3,
          imgSrc: RefrigeranteImg,
          name: "COCA COLA 1L",
          description: "",
          price: "R$ 1,20",
        },
        {
            id: 4,
            imgSrc: RefrigeranteImg,
            name: "COCA COLA 1L",
            description: "",
            price: "R$ 1,79",
          },
          {
            id: 5,
            imgSrc: RefrigeranteImg,
            name: "COCA COLA 1L",
            description: "",
            price: "R$ 0,99",
          },
          {
            id: 6,
            imgSrc: RefrigeranteImg,
            name: "COCA COLA 1L",
            description: "",
            price: "R$ 1,00",
          },
          {
            id: 7,
            imgSrc: RefrigeranteImg,
            name: "COCA COLA 1L",
            description: "",
            price: "R$ 1,00",
          },
          {
            id: 8,
            imgSrc: RefrigeranteImg,
            name: "COCA COLA 1L",
            description: "",
            price: "R$ 1,00",
          },
    ];

    return (
      <>
      {tagRefigerantesActive &&
        menuItems.map((item) => (
          <MenuItem key={item.id} className={tagRefigerantesActive ? "active" : ""}>
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

export default Refrigerante