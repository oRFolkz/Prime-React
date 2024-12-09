import React from "react"
import { MenuItem, Description, ItemName, Price, ImgDiv, TxtDiv } from "../tabStyle.ts"
import SucosImg from '../../../Imgs/Lanches/322.jpg'


const Sucos = ({ tagSucosActive }) => {

    const menuItems = [
        {
          id: 1,
          imgSrc: SucosImg,
          name: "Suco De Laranja",
          description: "",
          price: "R$ 1,99",
        },
        {
          id: 2,
          imgSrc: SucosImg,
          name: "Suco De Laranja",
          description: "",
          price: "R$ 2,49",
        },
        {
          id: 3,
          imgSrc: SucosImg,
          name: "Suco De Laranja",
          description: "",
          price: "R$ 1,20",
        },
        {
            id: 4,
            imgSrc: SucosImg,
            name: "Suco De Laranja",
            description: "",
            price: "R$ 1,79",
          },
          {
            id: 5,
            imgSrc: SucosImg,
            name: "Suco De Laranja",
            description: "",
            price: "R$ 0,99",
          },
          {
            id: 6,
            imgSrc: SucosImg,
            name: "Suco De Laranja",
            description: "",
            price: "R$ 1,00",
          },
          {
            id: 7,
            imgSrc: SucosImg,
            name: "Suco De Laranja",
            description: "",
            price: "R$ 1,00",
          },
          {
            id: 8,
            imgSrc: SucosImg,
            name: "Suco De Laranja",
            description: "",
            price: "R$ 1,00",
          },
    ];
    
    return (
      <>
      {tagSucosActive &&
        menuItems.map((item) => (
          <MenuItem key={item.id} className={tagSucosActive ? "active" : ""}>
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

export default Sucos