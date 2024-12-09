import React from "react"
import { MenuItem, Description, ItemName, Price, ImgDiv, TxtDiv } from "../tabStyle.ts"
import DocesImg from '../../../Imgs/Lanches/506.jpg'


const Doces = ({ tagDocesActive }) => {

    const menuItems = [
        {
          id: 1,
          imgSrc: DocesImg,
          name: "BABALOO",
          description: "",
          price: "R$ 1,99",
        },
        {
          id: 2,
          imgSrc: DocesImg,
          name: "BABALOO",
          description: "",
          price: "R$ 2,49",
        },
        {
          id: 3,
          imgSrc: DocesImg,
          name: "BABALOO",
          description: "",
          price: "R$ 1,20",
        },
        {
            id: 4,
            imgSrc: DocesImg,
            name: "BABALOO",
            description: "",
            price: "R$ 1,79",
          },
          {
            id: 5,
            imgSrc: DocesImg,
            name: "BABALOO",
            description: "",
            price: "R$ 0,99",
          },
          {
            id: 6,
            imgSrc: DocesImg,
            name: "BABALOO",
            description: "",
            price: "R$ 1,00",
          },
          {
            id: 7,
            imgSrc: DocesImg,
            name: "BABALOO",
            description: "",
            price: "R$ 1,10",
          },
          {
            id: 8,
            imgSrc: DocesImg,
            name: "BABALOO",
            description: "",
            price: "R$ 1,20",
          },
    ];

    return (
      <>
      {tagDocesActive &&
        menuItems.map((item) => (
          <MenuItem key={item.id} className={tagDocesActive ? "active" : ""}>
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

export default Doces