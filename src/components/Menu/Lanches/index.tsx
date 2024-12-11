import React, { useState } from "react"
import { MenuItem, Description, ItemName, Price, ImgDiv, TxtDiv, AcrecimosDiv, AcreTitulo, AcreTxt, AcreTxtAdd, AcreTxtDiv, AcreTxtIcon, Adicionais } from "../tabStyle.ts"
import baconpiry from '../../../Imgs/Lanches/77.jpg'


const Lanches = ({ tagLanchesActive }) => {

    const [acreHidden, setAcreHidden] = useState(false)
    const [adicionalPicles, setAdicionalPicles] = useState(0)
    const [adicionalTomate, setAdicionalTomate] = useState(0)
    const [adicionalCebola, setAdicionalCebola] = useState(0)

    const menuItems = [
        {
          id: 1,
          imgSrc: baconpiry,
          name: "BACONPIRY",
          description: "Burger Bovino de 150gr, Catupiry, Alho frito, Bacon em tiras, Rúcula no Pão Tradicional.",
          adicionais: "ADICIONAIS",
          price: "R$ 31,50",
        },
        {
          id: 2,
          imgSrc: baconpiry,
          name: "CARNE E QUEIJO",
          description: "Burger Bovino de 120g recheado com queijo Cheddar no Pão Tradicional",
          adicionais: "ADICIONAIS",
          price: "R$ 28,90",
        },
        {
          id: 3,
          imgSrc: baconpiry,
          name: "CARNE E QUEIJO",
          description: "Burger Bovino de 120g recheado com queijo Mussarela no Pão Tradicional",
          adicionais: "ADICIONAIS",
          price: "R$ 28,90",
        },
        {
            id: 4,
            imgSrc: baconpiry,
            name: "COSTELA 120G",
            description: "Burger de Costela Bovina de 120g, Bacon, queijo Mussarela, anéis de Cebola empanada",
            adicionais: "ADICIONAIS",
            price: "R$ 31,50",
          },
          {
            id: 5,
            imgSrc: baconpiry,
            name: "DOUBLE",
            description: "Dois Burgers BovinoS de 120gr, 2X Cheddar, 2x Bacon em tiras e Molho no Pão Tradicional",
            adicionais: "ADICIONAIS",
            price: "R$ 39,90",
          },
          {
            id: 6,
            imgSrc: baconpiry,
            name: "FRANGO",
            description: "Burger de Frango de 150g, Mussarela, Alface, Tomate, Cebola Crispy e Cream Cheese no Pão Tradicional",
            adicionais: "ADICIONAIS",
            price: "R$ 31,90",
          },
          {
            id: 7,
            imgSrc: baconpiry,
            name: "PHILADELPHIA",
            description: "Burger Bovino de 150gr, Queijo Cheddar, tiras de Bacon, anéis de Cebola empanada",
            adicionais: "ADICIONAIS",
            price: "R$ 35,90",
          },
          {
            id: 8,
            imgSrc: baconpiry,
            name: "PRIME",
            description: "Burger Bovino de 150gr, Cheddar, Bacon, Cebola Roxa, Tomate, Alface e Molho especial no Pão Tradicional",
            adicionais: "ADICIONAIS",
            price: "R$ 29,50",
          },
    ];

  return (
    <>
      {tagLanchesActive &&
        menuItems.map((item) => (
          <>
            <MenuItem 
            key={item.id} 
            className={tagLanchesActive ? "active" : ""}
            onClick={() => setAcreHidden(!acreHidden)}
            >
              <ImgDiv>
                <img src={item.imgSrc} alt="" />
              </ImgDiv>
              <TxtDiv>
                <ItemName>{item.name}</ItemName>
                <Description>{item.description}</Description>
                <Adicionais className={acreHidden ? 'backGroundColor' : ''}>
                  {acreHidden ? 
                  (<span>{item.price}</span>) : 
                  (<span>{item.adicionais} <i className="fa-solid fa-arrow-down"></i></span>)}
                </Adicionais>
              </TxtDiv>
            </MenuItem>
            <AcrecimosDiv className={acreHidden ? 'hidden' : ''}>
              <AcreTxtDiv>
                <AcreTxt>Tomate:</AcreTxt> 
                  <AcreTxtIcon>
                    <i 
                    className="fa-solid fa-minus"
                    onClick={() => 
                    {adicionalTomate <= 0 ? setAdicionalTomate(0) : 
                    setAdicionalTomate(adicionalTomate - 1)}}></i> 
                    {adicionalTomate}
                    <i 
                    className="fa-solid fa-plus"
                    onClick={() => setAdicionalTomate(adicionalTomate + 1)}></i>
                  </AcreTxtIcon>
              </AcreTxtDiv>
              <AcreTxtDiv>
                <AcreTxt>Picles:</AcreTxt> 
                <AcreTxtIcon>
                    <i 
                    className="fa-solid fa-minus"
                    onClick={() => 
                    {adicionalPicles <= 0 ? setAdicionalPicles(0) : 
                      setAdicionalPicles(adicionalPicles - 1)}}></i> 
                    {adicionalPicles}
                    <i 
                    className="fa-solid fa-plus"
                    onClick={() => setAdicionalPicles(adicionalPicles + 1)}></i>
                  </AcreTxtIcon>
              </AcreTxtDiv>
              <AcreTxtDiv>
                <AcreTxt>Cebola:</AcreTxt> 
                <AcreTxtIcon>
                    <i 
                    className="fa-solid fa-minus"
                    onClick={() => 
                      {adicionalCebola <= 0 ? setAdicionalCebola(0) : 
                      setAdicionalCebola(adicionalCebola - 1)}}></i> 
                      {adicionalCebola}
                    <i 
                    className="fa-solid fa-plus"
                    onClick={() => setAdicionalCebola(adicionalCebola + 1)}></i>
                  </AcreTxtIcon>
              </AcreTxtDiv>
              <Price>Adicionar : {item.price}</Price>
            </AcrecimosDiv>
          </>
        ))}
    </>
  );
};

export default Lanches