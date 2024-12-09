import React from "react"
import { MenuItem, Description, ItemName, Price, ImgDiv, TxtDiv } from "../tabStyle.ts"
import baconpiry from '../../../Imgs/Lanches/77.jpg'


const Lanches = ({ tagLanchesActive }) => {

    const menuItems = [
        {
          id: 1,
          imgSrc: baconpiry,
          name: "BACONPIRY",
          description: "Burger Bovino de 150gr, Catupiry, Alho frito, Bacon em tiras, Rúcula no Pão Tradicional.",
          price: "R$ 1,99",
        },
        {
          id: 2,
          imgSrc: baconpiry,
          name: "BACONPIRY",
          description: "Burger Bovino de 150gr, Catupiry, Alho frito, Bacon em tiras, Rúcula no Pão Tradicional.",
          price: "R$ 2,49",
        },
        {
          id: 3,
          imgSrc: baconpiry,
          name: "BACONPIRY",
          description: "Burger Bovino de 150gr, Catupiry, Alho frito, Bacon em tiras, Rúcula no Pão Tradicional.",
          price: "R$ 1,20",
        },
        {
            id: 4,
            imgSrc: baconpiry,
            name: "BACONPIRY",
            description: "Burger Bovino de 150gr, Catupiry, Alho frito, Bacon em tiras, Rúcula no Pão Tradicional.",
            price: "R$ 1,79",
          },
          {
            id: 5,
            imgSrc: baconpiry,
            name: "BACONPIRY",
            description: "Burger Bovino de 150gr, Catupiry, Alho frito, Bacon em tiras, Rúcula no Pão Tradicional.",
            price: "R$ 0,99",
          },
          {
            id: 6,
            imgSrc: baconpiry,
            name: "BACONPIRY",
            description: "Burger Bovino de 150gr, Catupiry, Alho frito, Bacon em tiras, Rúcula no Pão Tradicional.",
            price: "R$ 1,00",
          },
          {
            id: 7,
            imgSrc: baconpiry,
            name: "BACONPIRY",
            description: "Burger Bovino de 150gr, Catupiry, Alho frito, Bacon em tiras, Rúcula no Pão Tradicional.",
            price: "R$ 1,00",
          },
          {
            id: 8,
            imgSrc: baconpiry,
            name: "BACONPIRY",
            description: "Burger Bovino de 150gr, Catupiry, Alho frito, Bacon em tiras, Rúcula no Pão Tradicional.",
            price: "R$ 1,00",
          },
    ];

  return (
    <>
      {tagLanchesActive &&
        menuItems.map((item) => (
          <MenuItem key={item.id} className={tagLanchesActive ? "active" : ""}>
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
  );
};

export default Lanches