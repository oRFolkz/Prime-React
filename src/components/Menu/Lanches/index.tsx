import React, { useState } from "react"
import { useCart } from '../../Cart/CartContext.js';

import { MenuItem, Description, ItemName, Price, ImgDiv, TxtDiv, AcrecimosDiv, AcreTxt, AcreTxtDiv, AcreTxtIcon, Adicionais, PriceDiv } from "../tabStyle.ts"

import baconpiry from '../../../imgs/77.jpg'
import carneQueijo from '../../../imgs/55.jpg'
import toscana from '../../../imgs/56.jpg'
import costela from '../../../imgs/60.jpg'
import double from '../../../imgs/73.jpg'
import frango from '../../../imgs/74.jpg'
import philadelphia from '../../../imgs/75.jpg'
import prime from '../../../imgs/54.jpg'


const Lanches = ({ tagLanchesActive }) => {

  const { addCart, clickAnimation, animationOnClick  } = useCart()

    const [adicionalTomate, setAdicionalTomate] = useState(Number)
    const [adicionalCebola, setAdicionalCebola] = useState(Number)
    const [adicionalPicles, setAdicionalPicles] = useState(Number)

    const valorTomate = 0.50
    const valorCebola = 0.50
    const valorPicles = 0.50

    const valorFinalTomate = ( valorTomate * adicionalTomate )
    const valorFinalCebola = ( valorCebola * adicionalCebola )
    const valorFinalPicles = ( valorPicles * adicionalPicles )

    const [adicionais] = useState([
      {
        adicionalID: 1,
        adicionalNome: "TOMATE",
        adicionalQuantidade: adicionalTomate,
        adicionalValor: 0.50,
      },
      {
        adicionalID: 2,
        adicionalNome: "CEBOLA",
        adicionalQuantidade: adicionalCebola,
        adicionalValor: 0.50,
      },
      {
        adicionalID: 3,
        adicionalNome: "PICLES",
        adicionalQuantidade: adicionalPicles,
        adicionalValor: 0.50,
      },
    ])

    const [menuItems, setMenuItems] = useState([
        {
          id: 1,
          imgSrc: baconpiry,
          name: "BACONPIRY",
          description: "Burger Bovino de 150gr, Catupiry, Alho frito, Bacon em tiras, Rúcula no Pão Tradicional.",
          price: 31.50,
          mostrarAdicionais: false,
          adicionais : adicionais,
        },
        {
          id: 2,
          imgSrc: carneQueijo,
          name: "CARNE E QUEIJO",
          description: "Burger Bovino de 120g recheado com queijo Cheddar no Pão Tradicional",
          price: 27.90,
          mostrarAdicionais: false,
          adicionais : adicionais,
        },
        {
          id: 3,
          imgSrc: toscana,
          name: "TOSCANA",
          description: "Burger Bovino de 120g recheado com queijo Mussarela no Pão Tradicional",
          price: 28.90,
          mostrarAdicionais: false,
          adicionais : adicionais,
        },
        {
            id: 4,
            imgSrc: costela,
            name: "COSTELA 120G",
            description: "Burger de Costela Bovina de 120g, Bacon, queijo Mussarela, anéis de Cebola empanada",
            price: 31.50,
            mostrarAdicionais: false,
            adicionais : adicionais,
          },
          {
            id: 5,
            imgSrc: double,
            name: "DOUBLE",
            description: "Dois Burgers BovinoS de 120gr, 2X Cheddar, 2x Bacon em tiras e Molho no Pão Tradicional",
            price: 39.90,
            mostrarAdicionais: false,
            adicionais : adicionais,
          },
          {
            id: 6,
            imgSrc: frango,
            name: "FRANGO",
            description: "Burger de Frango de 150g, Mussarela, Alface, Tomate, Cebola Crispy e Cream Cheese no Pão Tradicional",
            price: 31.90,
            mostrarAdicionais: false,
            adicionais : adicionais,
          },
          {
            id: 7,
            imgSrc: philadelphia,
            name: "PHILADELPHIA",
            description: "Burger Bovino de 150gr, Queijo Cheddar, tiras de Bacon, anéis de Cebola empanada",
            price: 35.90,
            mostrarAdicionais: false,
            adicionais : adicionais,
          },
          {
            id: 8,
            imgSrc: prime,
            name: "PRIME",
            description: "Burger Bovino de 150gr, Cheddar, Bacon, Cebola Roxa, Tomate, Alface e Molho especial no Pão Tradicional",
            price: 29.50,
            mostrarAdicionais: false,
            adicionais : adicionais,
          },
    ])

    const toggleMostrarAdicionais = (id) => {
      setMenuItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id
            ? { ...item, mostrarAdicionais: !item.mostrarAdicionais }
            : item
        )
      );
    }

    const addAdicional = (itemId, adicionalId) => {
      setMenuItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId
            ? {
                ...item,
                adicionais: item.adicionais.map((adicional) => {
                  if (adicional.adicionalID === adicionalId) {
                    // Update the specific state
                    if (adicionalId === 1) setAdicionalTomate(adicional.adicionalQuantidade + 1);
                    if (adicionalId === 2) setAdicionalCebola(adicional.adicionalQuantidade + 1);
                    if (adicionalId === 3) setAdicionalPicles(adicional.adicionalQuantidade + 1);
    
                    return { ...adicional, adicionalQuantidade: adicional.adicionalQuantidade + 1 };
                  }
                  return adicional;
                }),
              }
            : item
        )
      );
    };
    
    const removeAdicional = (itemId, adicionalId) => {
      setMenuItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId
            ? {
                ...item,
                adicionais: item.adicionais.map((adicional) => {
                  if (adicional.adicionalID === adicionalId && adicional.adicionalQuantidade > 0) {
                    if (adicionalId === 1) setAdicionalTomate(adicional.adicionalQuantidade - 1);
                    if (adicionalId === 2) setAdicionalCebola(adicional.adicionalQuantidade - 1);
                    if (adicionalId === 3) setAdicionalPicles(adicional.adicionalQuantidade - 1);
                    return { ...adicional, adicionalQuantidade: adicional.adicionalQuantidade - 1 };
                  }
                  return adicional;
                }),
              }
            : item
        )
      );
    };

  return (
    <>
      {tagLanchesActive &&
        menuItems.map((item) => (
          <>
            <MenuItem 
            key={item.id} 
            className={item.mostrarAdicionais ? 'hideBorder active' : ''}
            onClick={() => {toggleMostrarAdicionais(item.id)}}>
              <ImgDiv>
                <img src={item.imgSrc} alt="Imagem do Lanche" />
              </ImgDiv>
              <TxtDiv>
                <ItemName>{item.name}</ItemName>
                <Description>{item.description}</Description>
                <Adicionais className={item.mostrarAdicionais ? "" : "backGroundColor"}>
                  {item.mostrarAdicionais ?
                  (<span>ADICIONAIS<i className="fa-solid fa-arrow-down"></i></span>) :
                  (<span>R$ {(item.price).toFixed(2)}</span>)}
                </Adicionais>
              </TxtDiv>
            </MenuItem>
            {item.mostrarAdicionais && 
            item.adicionais.map((itemsAdicionais) => (
            <AcrecimosDiv key={itemsAdicionais.adicionalID}>
              <AcreTxtDiv>
                <AcreTxt>
                  {itemsAdicionais.adicionalNome} 
                  <br></br><span>
                  (R$ {(itemsAdicionais.adicionalValor).toFixed(2)})</span>
                </AcreTxt> 
                <AcreTxtIcon>
                  <i
                    className="fa-solid fa-minus"
                    onClick={() => {
                    clickAnimation(item.id)
                    removeAdicional(item.id, itemsAdicionais.adicionalID)
                    }}
                  ></i>
                  {itemsAdicionais.adicionalQuantidade}
                  <i
                    className="fa-solid fa-plus"
                    onClick={() => {
                      clickAnimation(item.id)
                      addAdicional(item.id, itemsAdicionais.adicionalID)
                    }}
                  ></i>
                </AcreTxtIcon>
              </AcreTxtDiv>
            </AcrecimosDiv>
            ))}
            {item.mostrarAdicionais && (
            <PriceDiv>
              <Price 
              onClick={() => {
                clickAnimation(item.id)
                addCart(item)
              }}
              className={animationOnClick === item.id ? "fa-bounce" : ""}>
                ADICIONAR : R$ {(item.price + valorFinalTomate + valorFinalCebola + valorFinalPicles ).toFixed(2)}
              </Price>
            </PriceDiv>
            )}
          </>
        ))}
    </>
  )
}

export default Lanches