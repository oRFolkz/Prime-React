import React from "react"
import { MenuItem, Description, ItemName, Price, ImgDiv, TxtDiv } from "../tabStyle.ts"
import Molho from '../../../Imgs/Molhos/220.jpg'


const Molhos = ({ tagMolhosActive }) => {

    const menuItems = [
        {
          id: 1,
          imgSrc: Molho,
          name: "MOLHO - BARBECUE",
          description: "",
          price: "R$ 1,99",
        },
        {
          id: 2,
          imgSrc: Molho,
          name: "MOLHO - BARBECUE",
          description: "",
          price: "R$ 2,49",
        },
        {
          id: 3,
          imgSrc: Molho,
          name: "MOLHO - BARBECUE",
          description: "",
          price: "R$ 1,20",
        },
        {
            id: 4,
            imgSrc: Molho,
            name: "MOLHO - BARBECUE",
            description: "",
            price: "R$ 1,79",
          },
          {
            id: 5,
            imgSrc: Molho,
            name: "MOLHO - BARBECUE",
            description: "",
            price: "R$ 0,99",
          },
          {
            id: 6,
            imgSrc: Molho,
            name: "MOLHO - BARBECUE",
            description: "",
            price: "R$ 1,00",
          },
          {
            id: 7,
            imgSrc: Molho,
            name: "MOLHO - BARBECUE",
            description: "",
            price: "R$ 1,00",
          },
          {
            id: 8,
            imgSrc: Molho,
            name: "MOLHO - BARBECUE",
            description: "",
            price: "R$ 1,00",
          },
    ];

    return (
      <>
      {tagMolhosActive &&
        menuItems.map((item) => (
          <MenuItem key={item.id} className={tagMolhosActive ? "active" : ""}>
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

export default Molhos